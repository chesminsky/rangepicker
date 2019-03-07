/**
 * Rangepicker directive for input elements
 */

import { Directive, Input, ElementRef, OnInit, HostListener, AfterViewInit, OnDestroy, Inject, forwardRef } from '@angular/core';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import * as moment_ from 'moment';
import { CalendarPeriod } from './types';
import { Subscription } from 'rxjs';
const moment = moment_;
import { SgvRangepickerDefaultsService } from './defaults';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: '[sgvRangepicker]',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => SgvRangepickerDirective),
		multi: true,
	}, {
		provide: NG_VALIDATORS,
		useExisting: forwardRef(() => SgvRangepickerDirective),
		multi: true,
	}],
})
export class SgvRangepickerDirective implements AfterViewInit, OnDestroy, ControlValueAccessor {

	private val: string;
	private sub: Subscription;
	@Input()
	private sgvRangepicker: SgvRangepickerComponent;
	private onTouch: any = () => {};
	private onChange: any = () => {};

	constructor(
		private elemRef: ElementRef,
		@Inject(SgvRangepickerDefaultsService) private defaults
	) {
		this.windowClick = this.windowClick.bind(this);
	}

	writeValue(value: any) {
		this.value = value;
	}

	registerOnChange(fn: any) {
		this.onChange = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouch = fn;
	}

	set value(val) {
		if (val !== undefined && this.val !== val) {
			this.val = val;
			this.elemRef.nativeElement.value = val;
			this.onChange(val);
			this.onTouch(val);
			this.setPickerModel();
		}
	}

	ngAfterViewInit() {
		this.setPickerModel();
		this.sgvRangepicker.init();

		this.sub = this.sgvRangepicker.datesChanged.subscribe((period: CalendarPeriod) => {
			const start = Number(period.start);
			const end = Number(period.end);
			this.value = moment(start).format(this.defaults.format) + ' - ' + moment(end).format(this.defaults.format);
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
		this.sgvRangepicker.show();
	}


	@HostListener('input', ['$event'])
	public onInput(event): void {
		this.value = event.target.value;
	}

	public validate(c: FormControl) {
		return (c.value && this.sgvRangepicker.isValid(c.value)) ? null : {
			dateFormat: {
				valid: false,
			},
		};
	}

	/**
	 * set rangepicker model
	 * @param value - input string
	 */
	private setPickerModel(): void {
		const value = this.val;
		let valid: boolean;

		if (!value) {
			valid = true;
			this.sgvRangepicker.period = {};
		} else {
			valid = this.sgvRangepicker.isValid(value);
			if (valid) {
				this.sgvRangepicker.setPeriod(value);
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
