import { Component, OnInit, Input, HostListener } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;
import { CalendarDay, CalendarPeriod, CalendarEvents } from '../types';

@Component({
	selector: 'sgv-rangepicker',
	templateUrl: './rangepicker.component.html',
	styleUrls: ['./rangepicker.component.scss']
})
export class SgvRangepickerComponent implements OnInit {

	public period: CalendarPeriod;
	public hoveredDate: moment_.Moment;

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

	constructor() {
	}

	public ngOnInit () {

	}

	@HostListener('click', ['$event'])
	onClick(e) {
		e.stopPropagation();
	}

}
