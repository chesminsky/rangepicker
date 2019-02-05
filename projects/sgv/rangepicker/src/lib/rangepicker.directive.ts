import { Directive, Input, ElementRef, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import * as moment_ from 'moment';
const moment = moment_;

@Directive({
	selector: '[sgvRangepicker]'
})
export class SgvDatepickerDirective implements AfterViewInit {

	@Input()
	sgvRangepicker: SgvRangepickerComponent;

	constructor(
		private elemRef: ElementRef
	) {

	}


	ngAfterViewInit() {

		this.processChange(this.elemRef.nativeElement.value);

		let counter = 0;
		const d = this.sgvRangepicker;

		d.events.on('updateModel', (date: moment_.Moment) => {
			if (counter === 0) {
				// pick first time
				d.period.start = date.valueOf();
				d.period.end = null;
			}

			if (counter === 1) {
				// pick second time
				if (date.valueOf() < d.period.start.valueOf()) {
					d.period.end = moment(d.period.start).endOf('day').valueOf();
					d.period.start = date.valueOf();
				} else {
					d.period.end = date.endOf('day').valueOf();
				}
			}

			if (d.period.start && d.period.end) {
				d.visible = false;
				this.genString();
			}

			counter++;

			if (counter === 2) {
				counter = 0;
			}

		});

		d.events.on('hovered', function (date: moment_.Moment) {
			d.hoveredDate = date;
		});
	}

	private genString() {
		const d = this.sgvRangepicker;
		if (!d.period || !d.period.start || !d.period.end) {
			return;
		}

		const start = Number(d.period.start);
		const end = Number(d.period.end);

		this.elemRef.nativeElement.value = moment(start).format('DD.MM.YYYY') + ' - ' + moment(end).format('DD.MM.YYYY');
	}

	@HostListener('click')
	onclick() {
		this.sgvRangepicker.visible = true;
	}

	@HostListener('input', ['$event'])
	onInput(event) {
		const value = event.target.value;
		this.processChange(value);
	}

	private processChange(value: string) {
		let valid: boolean;

		if (!value) {
			valid = true;
		} else {
			const dates = value.split(' - ');

			const start = moment(dates[0], 'DD.MM.YYYY');
			const end =  moment(dates[1], 'DD.MM.YYYY');

			valid = start.isValid() && end.isValid() && start.valueOf() <= end.valueOf();

			if (valid) {
				this.sgvRangepicker.period = {
					start: start.valueOf(),
					end: end.valueOf()
				};
			} else {
				this.sgvRangepicker.period = {};
				this.sgvRangepicker.visible = false;
			}
		}
	}
}
