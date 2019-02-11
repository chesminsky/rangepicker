import * as moment_ from 'moment';
const moment = moment_;

export const presets = [
	{
		start: moment().startOf('day'),
		end: moment().endOf('day'),
		code: 'TODAY'
	},
	{
		start: moment().subtract(1, 'day').startOf('day'),
		end: moment().subtract(1, 'day').endOf('day'),
		code: 'YESTERDAY'
	},
	{
		start: moment().subtract(2, 'day').startOf('day'),
		end: moment().subtract(2, 'day').endOf('day'),
		code: 'DAY_BEFORE_YESTERDAY'
	},
	{
		start: moment().startOf('isoWeek').startOf('day'),
		end: moment().endOf('day'),
		code: 'CURRENT_WEEK'
	},
	{
		start: moment().startOf('month'),
		end: moment().endOf('day'),
		code: 'CURRENT_MONTH'
	},
	{
		start: moment().startOf('quarter'),
		end: moment().endOf('day'),
		code: 'CURRENT_QUARTER'
	},
	{
		start: moment().startOf('year'),
		end: moment().endOf('day'),
		code: 'CURRENT_YEAR'
	},
	{
		start: moment().subtract(1, 'w').startOf('isoWeek'),
		end: moment().subtract(1, 'w').endOf('isoWeek'),
		code: 'PAST_WEEK'
	},
	{
		start: moment().subtract(1, 'M').startOf('month'),
		end: moment().subtract(1, 'M').endOf('month'),
		code: 'PAST_MONTH'
	},
	{
		start: moment().subtract(1, 'y').startOf('year'),
		end: moment().subtract(1, 'y').endOf('year'),
		code: 'PAST_YEAR'
	},
	/*
	{
		start: moment().subtract(15, 'm'),
		end: moment(),
		code: 'LAST_15_MIN'
	},
	{
		start: moment().subtract(30, 'm'),
		end: moment(),
		code: 'LAST_30_MIN'
	},
	{
		start: moment().subtract(1, 'h'),
		end: moment(),
		code: 'LAST_HOUR'
	},
	{
		start: moment().subtract(4, 'h'),
		end: moment(),
		code: 'LAST_4_HOURS'
	},
	{
		start: moment().subtract(12, 'h'),
		end: moment(),
		code: 'LAST_12_HOURS'
	},
	{
		start: moment().subtract(1, 'd'),
		end: moment(),
		code: 'LAST_24_HOURS'
	},
	*/
	{
		start: moment().subtract(7, 'd').startOf('day'),
		end: moment().endOf('day'),
		code: 'LAST_7_DAYS'
	},
	{
		start: moment().subtract(30, 'd').startOf('day'),
		end: moment().endOf('day'),
		code: 'LAST_30_DAYS'
	},
	{
		start: moment().subtract(60, 'd').startOf('day'),
		end: moment().endOf('day'),
		code: 'LAST_60_DAYS'
	},
	{
		start: moment().subtract(3, 'M').startOf('day'),
		end: moment().endOf('day'),
		code: 'LAST_QUARTER'
	},
	{
		start: moment().subtract(6, 'M').startOf('day'),
		end: moment().endOf('day'),
		code: 'LAST_6_MONTHS'
	},
	{
		start: moment().subtract(1, 'y').startOf('day'),
		end: moment().endOf('day'),
		code: 'LAST_YEAR'
	},
	{
		start: moment().subtract(2, 'y').startOf('day'),
		end: moment().endOf('day'),
		code: 'LAST_2_YEARS'
	}
];
