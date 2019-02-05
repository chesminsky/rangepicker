import * as moment from 'moment';

export interface CalendarDay {
	name: string;
	number: number;
	isCurrentMonth: boolean;
	isToday: boolean;
	date: moment.Moment;
}

export interface CalendarPeriod {
	start?: number;
	end?: number;
}

export interface CalendarEvents {
	send: (eventName: string, details: moment.Moment | string) => void;
	on: (eventName: string, callback: (param: any) => void) => void;
}

export interface RangepickerPreset {
	title: string;
	start:  moment.Moment;
	end:  moment.Moment;
	code: string;
}
