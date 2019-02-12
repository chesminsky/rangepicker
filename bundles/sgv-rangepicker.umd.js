(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('moment'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@sgv/rangepicker', ['exports', '@angular/forms', 'moment', '@angular/common', '@angular/core'], factory) :
    (factory((global.sgv = global.sgv || {}, global.sgv.rangepicker = {}),global.ng.forms,global.moment_,global.ng.common,global.ng.core));
}(this, (function (exports,forms,moment_,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SgvRangepickerOptions = new core.InjectionToken('options');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SgvRangepickerDefaultsService = /** @class */ (function () {
        function SgvRangepickerDefaultsService(options) {
            this.options = options;
            /** @type {?} */
            var defaults = {
                color: '#3f51b5',
                format: 'DD.MM.YYYY'
            };
            Object.assign(this, defaults);
            if (options) {
                Object.assign(this, options);
            }
        }
        SgvRangepickerDefaultsService.decorators = [
            { type: core.Injectable }
        ];
        SgvRangepickerDefaultsService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [SgvRangepickerOptions,] }, { type: core.Optional }] }
            ];
        };
        return SgvRangepickerDefaultsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment = moment_;
    var SgvRangepickerDirective = /** @class */ (function () {
        function SgvRangepickerDirective(elemRef, defaults) {
            this.elemRef = elemRef;
            this.defaults = defaults;
            this.windowClick = this.windowClick.bind(this);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SgvRangepickerDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value) {
                    this.value = value;
                    this.elemRef.nativeElement.value = value;
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        SgvRangepickerDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                var _this = this;
                this.onChange = ( /**
                 * @return {?}
                 */function () {
                    fn(_this.value);
                });
            };
        /**
         * @param {?} _fn
         * @return {?}
         */
        SgvRangepickerDirective.prototype.registerOnTouched = /**
         * @param {?} _fn
         * @return {?}
         */
            function (_fn) {
                return;
            };
        /**
         * @return {?}
         */
        SgvRangepickerDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.processChange(this.elemRef.nativeElement.value);
                this.sgvRangepicker.init();
                this.sub = this.sgvRangepicker.datesChanged.subscribe(( /**
                 * @param {?} period
                 * @return {?}
                 */function (period) {
                    /** @type {?} */
                    var start = Number(period.start);
                    /** @type {?} */
                    var end = Number(period.end);
                    _this.writeValue(moment(start).format(_this.defaults.format) + ' - ' + moment(end).format(_this.defaults.format));
                    _this.onChange();
                }));
                window.addEventListener('click', this.windowClick);
            };
        /**
         * @return {?}
         */
        SgvRangepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.sub.unsubscribe();
                window.removeEventListener('click', this.windowClick);
            };
        /**
         * Show picker
         */
        /**
         * Show picker
         * @param {?} e
         * @return {?}
         */
        SgvRangepickerDirective.prototype.onclick = /**
         * Show picker
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.stopPropagation();
                this.sgvRangepicker.show();
            };
        /**
         * Pick dates on input changes
         * @param event - input event
         */
        /**
         * Pick dates on input changes
         * @param {?} event - input event
         * @return {?}
         */
        SgvRangepickerDirective.prototype.onInput = /**
         * Pick dates on input changes
         * @param {?} event - input event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var value = event.target.value;
                this.processChange(value);
            };
        /**
         * Process changes of input element, set rangepicker model
         * @param value - input string
         */
        /**
         * Process changes of input element, set rangepicker model
         * @private
         * @param {?} value - input string
         * @return {?}
         */
        SgvRangepickerDirective.prototype.processChange = /**
         * Process changes of input element, set rangepicker model
         * @private
         * @param {?} value - input string
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var valid;
                if (!value) {
                    valid = true;
                    this.sgvRangepicker.period = {};
                }
                else {
                    /** @type {?} */
                    var dates = value.split(' - ');
                    /** @type {?} */
                    var start = moment(dates[0], this.defaults.format);
                    /** @type {?} */
                    var end = moment(dates[1], this.defaults.format);
                    valid = start.isValid() && end.isValid() && start.valueOf() <= end.valueOf();
                    if (valid) {
                        this.sgvRangepicker.period = {
                            start: start.valueOf(),
                            end: end.valueOf()
                        };
                    }
                    else {
                        this.sgvRangepicker.period = {};
                        this.sgvRangepicker.hide();
                    }
                }
            };
        /**
         * @private
         * @return {?}
         */
        SgvRangepickerDirective.prototype.windowClick = /**
         * @private
         * @return {?}
         */
            function () {
                this.sgvRangepicker.hide();
            };
        SgvRangepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[sgvRangepicker]',
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: SgvRangepickerDirective,
                                multi: true,
                            }],
                    },] }
        ];
        SgvRangepickerDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: undefined, decorators: [{ type: core.Inject, args: [SgvRangepickerDefaultsService,] }] }
            ];
        };
        SgvRangepickerDirective.propDecorators = {
            sgvRangepicker: [{ type: core.Input }],
            onclick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
            onInput: [{ type: core.HostListener, args: ['input', ['$event'],] }]
        };
        return SgvRangepickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment$1 = moment_;
    var SgvCalendarComponent = /** @class */ (function () {
        function SgvCalendarComponent(locale, defaults) {
            this.locale = locale;
            this.defaults = defaults;
            this.headings = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        }
        /**
         * @return {?}
         */
        SgvCalendarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.monthIndex = moment$1().month();
                this.year = moment$1().year();
                if (this.side === 'left') {
                    this.decMonth();
                }
                this.init();
                this.events.on('navigate', ( /**
                 * @param {?} direction
                 * @return {?}
                 */function (direction) {
                    if (direction === 'prev') {
                        _this.decMonth();
                    }
                    else if (direction === 'next') {
                        _this.incMonth();
                    }
                    _this.init();
                }));
            };
        /**
         * @return {?}
         */
        SgvCalendarComponent.prototype.getMonthTitle = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var str = this.month.locale(this.locale).format('MMMM, YYYY');
                return str.charAt(0).toUpperCase() + str.slice(1);
            };
        /**
         * @param {?} direction
         * @return {?}
         */
        SgvCalendarComponent.prototype.navigate = /**
         * @param {?} direction
         * @return {?}
         */
            function (direction) {
                this.events.send('navigate', direction);
            };
        /**
         * @param {?} day
         * @return {?}
         */
        SgvCalendarComponent.prototype.select = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                if (day.isCurrentMonth) {
                    this.events.send('updateModel', day.date);
                }
            };
        /**
         * @param {?} day
         * @return {?}
         */
        SgvCalendarComponent.prototype.onHover = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                if (day.isCurrentMonth) {
                    this.events.send('hovered', day.date);
                }
            };
        /**
         * @param {?} date
         * @return {?}
         */
        SgvCalendarComponent.prototype.isSelected = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var start = Number(this.period.start);
                /** @type {?} */
                var end = Number(this.period.end);
                return (start && date.isSame(start, 'day')) || (end && date.isSame(end, 'day'));
            };
        /**
         * @param {?} date
         * @return {?}
         */
        SgvCalendarComponent.prototype.isBetween = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var start = Number(this.period.start);
                /** @type {?} */
                var end = Number(this.period.end);
                /** @type {?} */
                var hovered = Number(this.hoveredDate);
                if (start && end) {
                    return date.isBetween(start, end);
                }
                if (start && hovered) {
                    return (date.isBetween(start, hovered) ||
                        date.isBetween(hovered, start) ||
                        date.valueOf() === hovered);
                }
            };
        // TODO rename ?
        // TODO rename ?
        /**
         * @private
         * @return {?}
         */
        SgvCalendarComponent.prototype.init =
            // TODO rename ?
            /**
             * @private
             * @return {?}
             */
            function () {
                this.month = moment$1([this.year, this.monthIndex]);
                this.firstMonday = moment$1([this.year, this.monthIndex]).startOf('isoWeek');
                this.weeks = this.buildCalendar();
            };
        /**
         * @private
         * @return {?}
         */
        SgvCalendarComponent.prototype.buildCalendar = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var weeks = [];
                /** @type {?} */
                var done = false;
                /** @type {?} */
                var date = this.firstMonday.clone();
                while (!done) {
                    weeks.push({
                        days: this.buildWeek(date.clone())
                    });
                    date.add(1, 'w');
                    done = this.monthIndex !== date.month();
                }
                return weeks;
            };
        /**
         * @private
         * @param {?} date
         * @return {?}
         */
        SgvCalendarComponent.prototype.buildWeek = /**
         * @private
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var days = [];
                for (var i = 0; i < 7; i++) {
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
            };
        /**
         * @private
         * @return {?}
         */
        SgvCalendarComponent.prototype.incMonth = /**
         * @private
         * @return {?}
         */
            function () {
                this.monthIndex++;
                if (this.monthIndex === 12) {
                    this.monthIndex = 0;
                    this.year++;
                }
            };
        /**
         * @private
         * @return {?}
         */
        SgvCalendarComponent.prototype.decMonth = /**
         * @private
         * @return {?}
         */
            function () {
                this.monthIndex--;
                if (this.monthIndex === -1) {
                    this.monthIndex = 11;
                    this.year--;
                }
            };
        SgvCalendarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sgv-calendar',
                        template: "<div class=\"m-calendar\">\r\n\t<header class=\"m-calendar__header\">\r\n\t\t<div class=\"m-calendar__nav m-calendar__nav--left\">\r\n\t\t\t<i (click)=\"navigate('prev')\" *ngIf=\"side !== 'right'\"></i>\r\n\t\t</div>\r\n\t\t<div class=\"m-calendar__title\" >\r\n\t\t\t{{ getMonthTitle() }}\r\n\t\t</div>\r\n\t\t<div class=\"m-calendar__nav m-calendar__nav--right\">\r\n\t\t\t<i (click)=\"navigate('next')\" *ngIf=\"side !== 'left'\"></i>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\t<table>\r\n\t\t<thead>\r\n\t\t\t<th *ngFor=\"let th of headings\">{{th}}</th>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let week of weeks\">\r\n\t\t\t\t<td *ngFor=\"let day of week.days\" \r\n\t\t\t\t\t(click)=\"select(day)\"\r\n\t\t\t\t\t(mouseover)=\"onHover(day);\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<span class=\"m-calendar__day\"\r\n\t\t\t\t\t\t  [ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t'is-today': day.isToday,\r\n\t\t\t\t\t\t\t\t\t'is-selected': isSelected(day.date)\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t  [ngStyle]=\"isBetween(day.date) ? {'color': defaults.color} : {}\"\r\n\t\t\t\t\t\t  *ngIf=\"day.isCurrentMonth\">\r\n\t\t\t\t\t\t{{day.number}}\r\n\t\t\t\t\t\t<span class=\"m-calendar__selected-day\"\r\n\t\t\t\t\t\t\t  [ngStyle]=\"isSelected(day.date) ? {'background-color': defaults.color, 'display': 'block'} : {}\"></span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n",
                        styles: [".m-calendar{width:100%}.m-calendar__header{display:table;width:100%;height:60px;table-layout:fixed}.m-calendar__nav{display:table-cell;width:50px;vertical-align:middle}.m-calendar__nav--left{text-align:left}.m-calendar__nav--left i{display:inline-block;width:24px;height:24px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAN0lEQVR4AWOgEIyCBiAkSfl/ht8MWqQpDyFNeShpysNIUf4HpJw0DeFA1nDRokWaljry0tQoAABoiB3OU+DRDgAAAABJRU5ErkJggg==)}.m-calendar__nav--right{text-align:right}.m-calendar__nav--right i{display:inline-block;width:24px;height:24px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAANElEQVR4AWMgE4yCRoYGUpTrMvxh+E+algjStUSSriWKdC3REC2UaBh45TSMuAYgpAiMAgDU3h38ltq8/gAAAABJRU5ErkJggg==)}.m-calendar__nav i{margin:0 8px;cursor:pointer;vertical-align:middle}.m-calendar__title{display:table-cell;font-size:14px;font-weight:500;text-align:center;vertical-align:middle}.m-calendar table{width:100%}.m-calendar table td,.m-calendar table th{height:34px;font-size:12px;font-weight:500;text-align:center}.m-calendar table th{color:#9e9e9e}.m-calendar table td{cursor:pointer}.m-calendar__day{position:relative;display:inline-block;height:34px;line-height:34px}.m-calendar__day.is-today{color:#21a497}.m-calendar__day.is-selected{color:#fff!important}.m-calendar__selected-day{display:none;position:absolute;z-index:-1;top:50%;left:50%;width:34px;height:34px;margin-top:-17px;margin-left:-17px;border-radius:50%}"]
                    }] }
        ];
        SgvCalendarComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [SgvRangepickerDefaultsService,] }] }
            ];
        };
        SgvCalendarComponent.propDecorators = {
            side: [{ type: core.Input }],
            period: [{ type: core.Input }],
            events: [{ type: core.Input }],
            hoveredDate: [{ type: core.Input }]
        };
        return SgvCalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment$2 = moment_;
    /** @type {?} */
    var presets = [
        {
            start: moment$2().startOf('day'),
            end: moment$2().endOf('day'),
            code: 'TODAY'
        },
        {
            start: moment$2().subtract(1, 'day').startOf('day'),
            end: moment$2().subtract(1, 'day').endOf('day'),
            code: 'YESTERDAY'
        },
        {
            start: moment$2().subtract(2, 'day').startOf('day'),
            end: moment$2().subtract(2, 'day').endOf('day'),
            code: 'DAY_BEFORE_YESTERDAY'
        },
        {
            start: moment$2().startOf('isoWeek').startOf('day'),
            end: moment$2().endOf('day'),
            code: 'CURRENT_WEEK'
        },
        {
            start: moment$2().startOf('month'),
            end: moment$2().endOf('day'),
            code: 'CURRENT_MONTH'
        },
        {
            start: moment$2().startOf('quarter'),
            end: moment$2().endOf('day'),
            code: 'CURRENT_QUARTER'
        },
        {
            start: moment$2().startOf('year'),
            end: moment$2().endOf('day'),
            code: 'CURRENT_YEAR'
        },
        {
            start: moment$2().subtract(1, 'w').startOf('isoWeek'),
            end: moment$2().subtract(1, 'w').endOf('isoWeek'),
            code: 'PAST_WEEK'
        },
        {
            start: moment$2().subtract(1, 'M').startOf('month'),
            end: moment$2().subtract(1, 'M').endOf('month'),
            code: 'PAST_MONTH'
        },
        {
            start: moment$2().subtract(1, 'y').startOf('year'),
            end: moment$2().subtract(1, 'y').endOf('year'),
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
            start: moment$2().subtract(7, 'd').startOf('day'),
            end: moment$2().endOf('day'),
            code: 'LAST_7_DAYS'
        },
        {
            start: moment$2().subtract(30, 'd').startOf('day'),
            end: moment$2().endOf('day'),
            code: 'LAST_30_DAYS'
        },
        {
            start: moment$2().subtract(60, 'd').startOf('day'),
            end: moment$2().endOf('day'),
            code: 'LAST_60_DAYS'
        },
        {
            start: moment$2().subtract(3, 'M').startOf('day'),
            end: moment$2().endOf('day'),
            code: 'LAST_QUARTER'
        },
        {
            start: moment$2().subtract(6, 'M').startOf('day'),
            end: moment$2().endOf('day'),
            code: 'LAST_6_MONTHS'
        },
        {
            start: moment$2().subtract(1, 'y').startOf('day'),
            end: moment$2().endOf('day'),
            code: 'LAST_YEAR'
        },
        {
            start: moment$2().subtract(2, 'y').startOf('day'),
            end: moment$2().endOf('day'),
            code: 'LAST_2_YEARS'
        }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment$3 = moment_;
    var SgvRangepickerComponent = /** @class */ (function () {
        function SgvRangepickerComponent(defaults) {
            this.defaults = defaults;
            this.presets = presets;
            this.tab = 2;
            this.chunkSize = Math.ceil(this.presets.length / 2);
            this.datesChanged = new core.EventEmitter();
            /**
             * Event bus
             * TODO - ref to observables
             */
            this.events = {
                topics: {},
                on: /**
                 * @param {?} topic
                 * @param {?} listener
                 * @return {?}
                 */ function (topic, listener) {
                    if (!this.topics[topic]) {
                        this.topics[topic] = [];
                    }
                    this.topics[topic].push(listener);
                },
                send: /**
                 * @param {?} topic
                 * @param {?} info
                 * @return {?}
                 */ function (topic, info) {
                    if (!this.topics[topic]) {
                        return;
                    }
                    this.topics[topic].forEach(( /**
                     * @param {?} listener
                     * @return {?}
                     */function (listener) {
                        listener(info);
                    }));
                }
            };
            this.visible = false;
        }
        /**
         * @return {?}
         */
        SgvRangepickerComponent.prototype.show = /**
         * @return {?}
         */
            function () {
                this.visible = true;
            };
        /**
         * @return {?}
         */
        SgvRangepickerComponent.prototype.hide = /**
         * @return {?}
         */
            function () {
                this.visible = false;
                this.presets.forEach(( /**
                 * @param {?} p
                 * @return {?}
                 */function (p) { return p.hovered = false; }));
            };
        /**
         * Initialize rangepicker
         */
        /**
         * Initialize rangepicker
         * @return {?}
         */
        SgvRangepickerComponent.prototype.init = /**
         * Initialize rangepicker
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var counter = 0;
                this.events.on('updateModel', ( /**
                 * @param {?} date
                 * @return {?}
                 */function (date) {
                    if (counter === 0) {
                        // pick first time
                        _this.period.start = date.valueOf();
                        _this.period.end = null;
                    }
                    if (counter === 1) {
                        // pick second time
                        if (date.valueOf() < _this.period.start.valueOf()) {
                            _this.period.end = moment$3(_this.period.start).endOf('day').valueOf();
                            _this.period.start = date.valueOf();
                        }
                        else {
                            _this.period.end = date.endOf('day').valueOf();
                        }
                    }
                    if (_this.period.start && _this.period.end) {
                        _this.hide();
                        _this.datesChanged.emit(_this.period);
                    }
                    counter++;
                    if (counter === 2) {
                        counter = 0;
                    }
                }));
                this.events.on('hovered', ( /**
                 * @param {?} date
                 * @return {?}
                 */function (date) {
                    _this.hoveredDate = date;
                }));
            };
        /**
         * Prevent bubbling to input
         */
        /**
         * Prevent bubbling to input
         * @param {?} e
         * @return {?}
         */
        SgvRangepickerComponent.prototype.onClick = /**
         * Prevent bubbling to input
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.stopPropagation();
            };
        /**
         * Set period from presets
         */
        /**
         * Set period from presets
         * @param {?} code
         * @return {?}
         */
        SgvRangepickerComponent.prototype.setPeriod = /**
         * Set period from presets
         * @param {?} code
         * @return {?}
         */
            function (code) {
                this.period.start = this.getPresetValueByCode(code, 'start');
                this.period.end = this.getPresetValueByCode(code, 'end');
                this.hide();
                this.datesChanged.emit(this.period);
            };
        /**
         * Get date in ms from preset
         * @param code - preset code
         * @param key - end or start
         */
        /**
         * Get date in ms from preset
         * @private
         * @param {?} code - preset code
         * @param {?} key - end or start
         * @return {?}
         */
        SgvRangepickerComponent.prototype.getPresetValueByCode = /**
         * Get date in ms from preset
         * @private
         * @param {?} code - preset code
         * @param {?} key - end or start
         * @return {?}
         */
            function (code, key) {
                return this.presets.find(( /**
                 * @param {?} p
                 * @return {?}
                 */function (p) { return p.code === code; }))[key].valueOf();
            };
        SgvRangepickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sgv-rangepicker',
                        template: "<div class=\"m-calendar-wrapper\" *ngIf=\"visible\">\r\n    <header class=\"m-calendar-wrapper__header\" [ngStyle]=\"{'background-color': defaults.color}\">\r\n        <ul>\r\n            <li [ngClass]=\"{'is-active': tab === 1}\" (click)=\"tab = 1\">\r\n                {{ 'PRESETS' | translate }}\r\n            </li>\r\n            <li [ngClass]=\"{'is-active': tab === 2}\" (click)=\"tab = 2\">\r\n                {{ 'DATE_INTERVAL' | translate}}\r\n            </li>\r\n        </ul>\r\n    </header>\r\n    <div class=\"m-calendar-wrapper__inner\">\r\n        <div *ngIf=\"tab === 1\" class=\"m-calendar-wrapper__presets\">\r\n            <div class=\"m-calendar-wrapper__row\">\r\n                <div class=\"m-calendar-wrapper__col\">\r\n                    <ul>\r\n                        <li *ngFor=\"let preset of presets | slice :  0 : chunkSize\"\r\n                            [ngStyle]=\"preset.hovered ? {'color':  defaults.color } : {}\"\r\n                            (click)=\"setPeriod(preset.code);\"\r\n                            (mouseover)=\"preset.hovered=true\"\r\n                            (mouseleave)=\"preset.hovered=false\">\r\n                            {{ preset.code | translate }}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"m-calendar-wrapper__col\">\r\n                    <ul>\r\n                        <li *ngFor=\"let preset of presets | slice : chunkSize: presets.length\"\r\n                            [ngStyle]=\"preset.hovered ? {'color':  defaults.color } : {}\"\r\n                            (click)=\"setPeriod(preset.code);\"\r\n                            (mouseover)=\"preset.hovered=true\"\r\n                            (mouseleave)=\"preset.hovered=false\">\r\n                            {{ preset.code | translate}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"m-calendar-wrapper__row\" *ngIf=\"tab === 2\">\r\n            <div class=\"m-calendar-wrapper__col\">\r\n                <sgv-calendar side=\"left\" [period]=\"period\" [events]=\"events\" [hoveredDate]=\"hoveredDate\"></sgv-calendar>\r\n            </div>\r\n            <div class=\"m-calendar-wrapper__col\">\r\n                <sgv-calendar side=\"right\" [period]=\"period\" [events]=\"events\" [hoveredDate]=\"hoveredDate\"></sgv-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                        styles: [".m-calendar-wrapper{position:absolute;z-index:1000;top:40px;left:0;width:530px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #eee;border-radius:2px;background:#fff;box-shadow:0 15px 79.38px 1.62px rgba(0,0,0,.16)}.m-calendar-wrapper--single{width:285px}.m-calendar-wrapper__row{margin:0 -10px}.m-calendar-wrapper__row:after{display:table;clear:both;content:''}.m-calendar-wrapper__col{float:left;box-sizing:border-box;width:50%;padding:0 10px}.m-calendar-wrapper__inner{padding:20px 20px 40px}.m-calendar-wrapper__header{height:70px;line-height:67px;box-shadow:0 2px 2.82px .18px rgba(0,0,0,.24)}.m-calendar-wrapper__header ul{display:table;width:100%;margin:0;padding:0}.m-calendar-wrapper__header li{display:table-cell;width:50%;font-size:14px;cursor:pointer;text-align:center;text-transform:uppercase;color:#fff}.m-calendar-wrapper__header li.is-active{border-bottom:3px solid #fff}.m-calendar-wrapper__presets{padding:20px 0;font-size:14px;font-weight:300;line-height:2}.m-calendar-wrapper__presets ul{margin:0;padding:0}.m-calendar-wrapper__presets li{padding:0 20px;list-style:none;cursor:pointer}"]
                    }] }
        ];
        SgvRangepickerComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [SgvRangepickerDefaultsService,] }] }
            ];
        };
        SgvRangepickerComponent.propDecorators = {
            datesChanged: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SgvRangepickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var translations = {
        'PRESETS': {
            'en': 'Presets',
            'ru': 'Предустановленные'
        },
        'DATE_INTERVAL': {
            'en': 'Date interval',
            'ru': 'Интервал дат'
        },
        'TODAY': {
            'en': 'Today',
            'ru': 'Сегодня'
        },
        'YESTERDAY': {
            'en': 'Yesterday',
            'ru': 'Вчера'
        },
        'DAY_BEFORE_YESTERDAY': {
            'en': 'Day before yesterday',
            'ru': 'Позавчера'
        },
        'CURRENT_WEEK': {
            'en': 'Current week',
            'ru': 'Текущая неделя'
        },
        'CURRENT_MONTH': {
            'en': 'Current month',
            'ru': 'Текущий месяц'
        },
        'CURRENT_QUARTER': {
            'en': 'Current quarter',
            'ru': 'Текущий квартал'
        },
        'CURRENT_YEAR': {
            'en': 'Current year',
            'ru': 'Текущий год'
        },
        'PAST_WEEK': {
            'en': 'Past week',
            'ru': 'Предыдущая неделя'
        },
        'PAST_MONTH': {
            'en': 'Past month',
            'ru': 'Предыдущий месяц'
        },
        'PAST_YEAR': {
            'en': 'Past year',
            'ru': 'Предыдущий год'
        },
        'LAST_15_MIN': {
            'en': 'Last 15 minutes',
            'ru': 'Последние 15 минут'
        },
        'LAST_30_MIN': {
            'en': 'Last 30 minutes',
            'ru': 'Последние 30 минут'
        },
        'LAST_HOUR': {
            'en': 'Last hour',
            'ru': 'Последний час'
        },
        'LAST_4_HOURS': {
            'en': 'Last 4 hours',
            'ru': 'Последние 4 часа'
        },
        'LAST_12_HOURS': {
            'en': 'Last 12 hours',
            'ru': 'Последние 12 часов'
        },
        'LAST_24_HOURS': {
            'en': 'Last 24 hours',
            'ru': 'Последние 24 часа'
        },
        'LAST_7_DAYS': {
            'en': 'Last 7 days',
            'ru': 'Последние 7 дней'
        },
        'LAST_30_DAYS': {
            'en': 'Last 30 days',
            'ru': 'Последние 30 дней'
        },
        'LAST_60_DAYS': {
            'en': 'Last 60 days',
            'ru': 'Последние 60 дней'
        },
        'LAST_QUARTER': {
            'en': 'Last quarter',
            'ru': 'Последний квартал'
        },
        'LAST_6_MONTHS': {
            'en': 'Last 6 months',
            'ru': 'Последние 6 месяцев'
        },
        'LAST_YEAR': {
            'en': 'Last year',
            'ru': 'Последний 1 год'
        },
        'LAST_2_YEARS': {
            'en': 'Last 2 years',
            'ru': 'Последние 2 года'
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SgvTranslatePipe = /** @class */ (function () {
        function SgvTranslatePipe(locale) {
            this.locale = locale;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SgvTranslatePipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return translations[value][this.locale] || value;
            };
        SgvTranslatePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'translate'
                    },] }
        ];
        SgvTranslatePipe.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
            ];
        };
        return SgvTranslatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SgvRangepickerModule = /** @class */ (function () {
        function SgvRangepickerModule() {
        }
        SgvRangepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            SgvRangepickerDirective,
                            SgvCalendarComponent,
                            SgvRangepickerComponent,
                            SgvTranslatePipe
                        ],
                        exports: [
                            SgvRangepickerDirective,
                            SgvRangepickerComponent
                        ],
                        providers: [
                            SgvRangepickerDefaultsService,
                            { provide: core.LOCALE_ID, useValue: 'en' }
                        ]
                    },] }
        ];
        return SgvRangepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SgvRangepickerModule = SgvRangepickerModule;
    exports.SgvRangepickerDirective = SgvRangepickerDirective;
    exports.SgvCalendarComponent = SgvCalendarComponent;
    exports.SgvRangepickerComponent = SgvRangepickerComponent;
    exports.SgvTranslatePipe = SgvTranslatePipe;
    exports.SgvRangepickerOptions = SgvRangepickerOptions;
    exports.ɵa = SgvRangepickerDefaultsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=sgv-rangepicker.umd.js.map