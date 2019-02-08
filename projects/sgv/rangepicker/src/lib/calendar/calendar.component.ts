import { Component, OnInit, Input, LOCALE_ID, Inject } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;
import { CalendarDay, CalendarPeriod, CalendarEvents } from '../types';
import { SgvRangepickerDefaultsService } from '../defaults';

@Component({
	selector: 'sgv-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class SgvCalendarComponent implements OnInit {

	public weeks: Array<Array<CalendarDay>>;
	@Input()
	public side: string;
	public headings = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	@Input()
	private period: CalendarPeriod;
	@Input()
	private events: CalendarEvents;
	private year: number;
	private month: moment_.Moment;
	private monthIndex: number;
	private firstMonday: moment_.Moment;
	@Input()
	private hoveredDate: moment_.Moment;

	constructor(
		@Inject(LOCALE_ID) private locale: string,
		@Inject(SgvRangepickerDefaultsService) public defaults
	) {}

	public ngOnInit() {

		this.monthIndex = moment().month();
		this.year = moment().year();

		if (this.side === 'left') {
			this.decMonth();
		}

		this.init();

		this.events.on('navigate', (direction: string) => {

			if (direction === 'prev') {
				this.decMonth();
			} else if (direction === 'next') {
				this.incMonth();
			}

			this.init();
		});
	}

	public getMonthTitle(): string {
		const str = this.month.locale(this.locale).format('MMMM, YYYY');
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	public navigate(direction: string): void {
		this.events.send('navigate', direction);
	}

	public select(day: CalendarDay): void {
		if (day.isCurrentMonth) {
			this.events.send('updateModel', day.date);
		}
	}

	public onHover(day: CalendarDay): void {
		if (day.isCurrentMonth) {
			this.events.send('hovered', day.date);
		}
	}

	public isSelected(date: moment_.Moment): boolean {
		const start = Number(this.period.start);
		const end = Number(this.period.end);
		return (start && date.isSame(start, 'day')) || (end && date.isSame(end, 'day'));
	}

	public isBetween(date: moment_.Moment): boolean {
		const start = Number(this.period.start);
		const end = Number(this.period.end);
		const hovered = Number(this.hoveredDate);

		if (start && end) {
			return date.isBetween(start, end);
		}

		if (start && hovered) {
			return (
				date.isBetween(start, hovered) ||
				date.isBetween(hovered, start) ||
				date.valueOf() === hovered
			);
		}
	}

	// TODO rename ?
	private init() {
		this.month = moment([this.year, this.monthIndex]);
		this.firstMonday = moment([this.year, this.monthIndex]).startOf('isoWeek');
		this.weeks = this.buildCalendar();
	}

	private buildCalendar(): Array<Array<CalendarDay>> {
		const weeks = [];
		let done = false;
		const date = this.firstMonday.clone();

		while (!done) {
			weeks.push({
				days: this.buildWeek(date.clone())
			});
			date.add(1, 'w');
			done = this.monthIndex !== date.month();
		}

		return weeks;
	}

	private buildWeek(date: moment_.Moment): Array<CalendarDay> {
		const days: Array<CalendarDay> = [];

		for (let i = 0; i < 7; i++) {

			days.push({
				name: date.format('dd').substring(0, 1),
				number: date.date(),
				isCurrentMonth: date.month() === this.monthIndex,
				isToday: date.isSame(new Date(), 'day'),
				date: date
			});

			date = date.clone();
			date.add(1, 'd');
		}

		return days;
	}

	private incMonth(): void {
		this.monthIndex++;
		if (this.monthIndex === 12) {
			this.monthIndex = 0;
			this.year++;
		}
	}

	private decMonth(): void {
		this.monthIndex--;
		if (this.monthIndex === -1) {
			this.monthIndex = 11;
			this.year--;
		}
	}

}
