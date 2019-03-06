import { Component, OnInit, Input, HostListener, Output, Inject, ElementRef } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;
import { CalendarDay, CalendarPeriod, CalendarEvents, RangepickerPreset } from '../types';
import { EventEmitter } from '@angular/core';
import { presets } from '../presets';
import { SgvRangepickerDefaultsService } from '../defaults';

@Component({
	selector: 'sgv-rangepicker',
	templateUrl: './rangepicker.component.html',
	styleUrls: ['./rangepicker.component.scss']
})
export class SgvRangepickerComponent implements OnInit {

	public period: CalendarPeriod;
	public hoveredDate: moment_.Moment;
	public presets: Array<RangepickerPreset> = presets;
	public tab = 2;
	public chunkSize = Math.ceil(this.presets.length / 2);

	@Output()
	public datesChanged: EventEmitter<CalendarPeriod> = new EventEmitter();

	/**
	 * Event bus
	 * TODO - ref to observables
	 */
	public events = {
		topics: {},
		on(topic, listener) {

			if (!this.topics[topic]) {
				this.topics[topic] = [];
			}

			this.topics[topic].push(listener);
		},

		send(topic, info) {

			if (!this.topics[topic]) {
				return;
			}

			this.topics[topic].forEach(function (listener) {
				listener(info);
			});
		}
	};

	public visible = false;

	constructor(
		@Inject(SgvRangepickerDefaultsService) public defaults,
		private elemRef: ElementRef
	) {}

	public ngOnInit() {
		this.stylize();
	}

	public show() {
		this.visible = true;
	}

	public hide() {
		this.visible = false;
	}

	/**
	 * Initialize rangepicker
	 */
	public init(): void {

		let counter = 0;

		this.events.on('updateModel', (date: moment_.Moment) => {
			if (counter === 0) {
				// pick first time
				this.period.start = date.valueOf();
				this.period.end = null;
			}

			if (counter === 1) {
				// pick second time
				if (date.valueOf() < this.period.start.valueOf()) {
					this.period.end = moment(this.period.start).endOf('day').valueOf();
					this.period.start = date.valueOf();
				} else {
					this.period.end = date.endOf('day').valueOf();
				}
			}

			if (this.period.start && this.period.end) {
				this.hide();
				this.datesChanged.emit(this.period);
			}

			counter++;

			if (counter === 2) {
				counter = 0;
			}

		});

		this.events.on('hovered', (date: moment_.Moment) => {
			this.hoveredDate = date;
		});
	}

	/**
	 * Prevent bubbling to input
	 */
	@HostListener('click', ['$event'])
	public onClick(e) {
		e.stopPropagation();
	}

	/**
	 * Set period from presets
	 */
	public setPeriod(code: string): void {
		this.period.start = this.getPresetValueByCode(code, 'start');
		this.period.end = this.getPresetValueByCode(code, 'end');
		this.hide();
		this.datesChanged.emit(this.period);
	}

	/**
	 * Get date in ms from preset
	 * @param code - preset code
	 * @param key - end or start
	 */
	private getPresetValueByCode(code: string, key: 'start' | 'end'): number  {
		return this.presets.find(p => p.code === code)[key].valueOf();
	}

	private stylize() {
		const css = `
				.m-calendar-wrapper__header {
					background: ${this.defaults.color}
				}
				.m-calendar-wrapper__preset:hover {
					color: ${this.defaults.color}
				}
		`;

		const style = document.createElement('style');
		style.innerHTML = css;
		this.elemRef.nativeElement.appendChild(style);
	}
}
