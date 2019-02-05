import { Component, OnInit, Input, HostListener, Output } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;
import { CalendarDay, CalendarPeriod, CalendarEvents } from '../types';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'sgv-rangepicker',
	templateUrl: './rangepicker.component.html',
	styleUrls: ['./rangepicker.component.scss']
})
export class SgvRangepickerComponent {

	public period: CalendarPeriod;
	public hoveredDate: moment_.Moment;

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

	constructor() {}

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
				this.visible = false;
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

}
