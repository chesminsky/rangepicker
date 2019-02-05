import * as moment_ from 'moment';
const moment = moment_;

export const presets = [{
	title: 'Сегодня',
	start: moment().startOf('day'),
	end: moment().endOf('day'),
	code: 'TODAY'
},
{
	title: 'Вчера',
	start: moment().subtract(1, 'day').startOf('day'),
	end: moment().subtract(1, 'day').endOf('day'),
	code: 'YESTERDAY'
},
{
	title: 'Позавчера',
	start: moment().subtract(2, 'day').startOf('day'),
	end: moment().subtract(2, 'day').endOf('day'),
	code: 'DAY_BEFORE_YESTERDAY'
},
{
	title: 'Текущая неделя',
	start: moment().startOf('isoWeek').startOf('day'),
	end: moment().endOf('day'),
	code: 'CURRENT_WEEK'
},
{
	title: 'Текущий месяц',
	start: moment().startOf('month'),
	end: moment().endOf('day'),
	code: 'CURRENT_MONTH'
},
{
	title: 'Текущий квартал',
	start: moment().startOf('quarter'),
	end: moment().endOf('day'),
	code: 'CURRENT_QUARTER'
},
{
	title: 'Текущий год',
	start: moment().startOf('year'),
	end: moment().endOf('day'),
	code: 'CURRENT_YEAR'
},
{
	title: 'Предыдущая неделя',
	start: moment().subtract(1, 'w').startOf('isoWeek'),
	end: moment().subtract(1, 'w').endOf('isoWeek'),
	code: 'PAST_WEEK'
},
{
	title: 'Предыдущий месяц',
	start: moment().subtract(1, 'M').startOf('month'),
	end: moment().subtract(1, 'M').endOf('month'),
	code: 'PAST_MONTH'
},
{
	title: 'Предыдущий год',
	start: moment().subtract(1, 'y').startOf('year'),
	end: moment().subtract(1, 'y').endOf('year'),
	code: 'PAST_YEAR'
},
{
	title: 'Последние 15 минут',
	start: moment().subtract(15, 'm'),
	end: moment(),
	code: 'LAST_15_MIN'
},
{
	title: 'Последние 30 минут',
	start: moment().subtract(30, 'm'),
	end: moment(),
	code: 'LAST_30_MIN'
},
{
	title: 'Последний час',
	start: moment().subtract(1, 'h'),
	end: moment(),
	code: 'LAST_HOUR'
},
{
	title: 'Последние 4 часа',
	start: moment().subtract(4, 'h'),
	end: moment(),
	code: 'LAST_4_HOURS'
},
{
	title: 'Последние 12 часов',
	start: moment().subtract(12, 'h'),
	end: moment(),
	code: 'LAST_12_HOURS'
},
{
	title: 'Последние 24 часа',
	start: moment().subtract(1, 'd'),
	end: moment(),
	code: 'LAST_24_HOURS'
},
{
	title: 'Последние 7 дней',
	start: moment().subtract(7, 'd').startOf('day'),
	end: moment().endOf('day'),
	code: 'LAST_7_DAYS'
},
{
	title: 'Последние 30 дней',
	start: moment().subtract(30, 'd').startOf('day'),
	end: moment().endOf('day'),
	code: 'LAST_30_DAYS'
},
{
	title: 'Последние 60 дней',
	start: moment().subtract(60, 'd').startOf('day'),
	end: moment().endOf('day'),
	code: 'LAST_60_DAYS'
},
{
	title: 'Последний квартал',
	start: moment().subtract(3, 'M').startOf('day'),
	end: moment().endOf('day'),
	code: 'LAST_QUARTER'
},
{
	title: 'Последние 6 месяцев',
	start: moment().subtract(6, 'M').startOf('day'),
	end: moment().endOf('day'),
	code: 'LAST_6_MONTHS'
},
{
	title: 'Последний 1 год',
	start: moment().subtract(1, 'y').startOf('day'),
	end: moment().endOf('day'),
	code: 'LAST_YEAR'
},
{
	title: 'Последние 2 года',
	start: moment().subtract(2, 'y').startOf('day'),
	end: moment().endOf('day'),
	code: 'LAST_2_YEARS'
}];
