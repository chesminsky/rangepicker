/**
 * Rangepicker directive for input elements
 */

import { Directive, Input, ElementRef, OnInit, HostListener, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import * as moment_ from 'moment';
import { CalendarPeriod } from './types';
import { Subscription } from 'rxjs';
const moment = moment_;
import { SgvRangepickerDefaultsService } from './defaults';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
	selector: '[sgvRangepicker]',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: SgvRangepickerDirective,
		multi: true,
	}],
})
export class SgvRangepickerDirective implements AfterViewInit, OnDestroy, ControlValueAccessor {

	private sub: Subscription;
	onChange: any;
	value: string;

	@Input()
	private sgvRangepicker: SgvRangepickerComponent;

	constructor(
		private elemRef: ElementRef,
		@Inject(SgvRangepickerDefaultsService) private defaults
	) {
		this.windowClick = this.windowClick.bind(this);
	}

	writeValue(value: any): void {
		if (value) {
			this.value = value;
			this.elemRef.nativeElement.value = value;
		}
	}

	registerOnChange(fn: any): void {
		this.onChange = () => {
			fn(this.value);
		};
	}

	registerOnTouched(_fn: any): void {
		return;
	}

	ngAfterViewInit() {
		this.processChange(this.elemRef.nativeElement.value);
		this.sgvRangepicker.init();

		this.sub = this.sgvRangepicker.datesChanged.subscribe((period: CalendarPeriod) => {
			const start = Number(period.start);
			const end = Number(period.end);
			this.writeValue(
				moment(start).format(this.defaults.format) + ' - ' + moment(end).format(this.defaults.format)
			);
			this.onChange();
		});

		window.addEventListener('click', this.windowClick);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
		window.removeEventListener('click', this.windowClick);
	}

	/**
	 * Show picker
	 */
	@HostListener('focus', ['$event'])
	public onfocus(e): void {
		this.sgvRangepicker.show();
	}

	@HostListener('click', ['$event'])
	public onclick(e): void {
		e.stopPropagation();
	}

	/**
	 * Pick dates on input changes
	 * @param event - input event
	 */
	@HostListener('input', ['$event'])
	public onInput(event): void {
		const value = event.target.value;
		this.processChange(value);
	}

	/**
	 * Process changes of input element, set rangepicker model
	 * @param value - input string
	 */
	private processChange(value: string): void {
		let valid: boolean;

		if (!value) {
			valid = true;
			this.sgvRangepicker.period = {};
		} else {
			const dates = value.split(' - ');

			const start = moment(dates[0], this.defaults.format);
			const end =  moment(dates[1], this.defaults.format);

			valid = start.isValid() && end.isValid() && start.valueOf() <= end.valueOf();

			if (valid) {
				this.sgvRangepicker.period = {
					start: start.valueOf(),
					end: end.valueOf()
				};
			} else {
				this.sgvRangepicker.period = {};
				this.sgvRangepicker.hide();
			}
		}
	}

	private windowClick() {
		this.sgvRangepicker.hide();
	}

}
