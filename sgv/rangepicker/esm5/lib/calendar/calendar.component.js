/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, LOCALE_ID, Inject } from '@angular/core';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
import { SgvRangepickerDefaultsService } from '../defaults.service';
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
        this.monthIndex = moment().month();
        this.year = moment().year();
        if (this.side === 'left') {
            this.decMonth();
        }
        this.init();
        this.events.on('navigate', (/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
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
        this.month = moment([this.year, this.monthIndex]);
        this.firstMonday = moment([this.year, this.monthIndex]).startOf('isoWeek');
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
        { type: Component, args: [{
                    selector: 'sgv-calendar',
                    template: "<div class=\"m-calendar\">\r\n\t<header class=\"m-calendar__header\">\r\n\t\t<div class=\"m-calendar__nav m-calendar__nav--left\">\r\n\t\t\t<i (click)=\"navigate('prev')\" *ngIf=\"side !== 'right'\"></i>\r\n\t\t</div>\r\n\t\t<div class=\"m-calendar__title\" >\r\n\t\t\t{{ getMonthTitle() }}\r\n\t\t</div>\r\n\t\t<div class=\"m-calendar__nav m-calendar__nav--right\">\r\n\t\t\t<i (click)=\"navigate('next')\" *ngIf=\"side !== 'left'\"></i>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\t<table>\r\n\t\t<thead>\r\n\t\t\t<th *ngFor=\"let th of headings\">{{th}}</th>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let week of weeks\">\r\n\t\t\t\t<td *ngFor=\"let day of week.days\" \r\n\t\t\t\t\t(click)=\"select(day)\"\r\n\t\t\t\t\t(mouseover)=\"onHover(day);\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<span class=\"m-calendar__day\"\r\n\t\t\t\t\t\t  [ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t'is-today': day.isToday,\r\n\t\t\t\t\t\t\t\t\t'is-selected': isSelected(day.date)\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t  [ngStyle]=\"isBetween(day.date) ? {'color': defaults.color} : {}\"\r\n\t\t\t\t\t\t  *ngIf=\"day.isCurrentMonth\">\r\n\t\t\t\t\t\t{{day.number}}\r\n\t\t\t\t\t\t<span class=\"m-calendar__selected-day\"\r\n\t\t\t\t\t\t\t  [ngStyle]=\"isSelected(day.date) ? {'background-color': defaults.color, 'display': 'block'} : {}\"></span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n",
                    styles: [".m-calendar{width:100%}.m-calendar__header{display:table;width:100%;height:60px;table-layout:fixed}.m-calendar__nav{display:table-cell;width:50px;vertical-align:middle}.m-calendar__nav--left{text-align:left}.m-calendar__nav--left i{display:inline-block;width:24px;height:24px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAN0lEQVR4AWOgEIyCBiAkSfl/ht8MWqQpDyFNeShpysNIUf4HpJw0DeFA1nDRokWaljry0tQoAABoiB3OU+DRDgAAAABJRU5ErkJggg==)}.m-calendar__nav--right{text-align:right}.m-calendar__nav--right i{display:inline-block;width:24px;height:24px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAANElEQVR4AWMgE4yCRoYGUpTrMvxh+E+algjStUSSriWKdC3REC2UaBh45TSMuAYgpAiMAgDU3h38ltq8/gAAAABJRU5ErkJggg==)}.m-calendar__nav i{margin:0 8px;cursor:pointer;vertical-align:middle}.m-calendar__title{display:table-cell;font-size:14px;font-weight:500;text-align:center;vertical-align:middle}.m-calendar table{width:100%}.m-calendar table td,.m-calendar table th{height:34px;font-size:12px;font-weight:500;text-align:center}.m-calendar table th{color:#9e9e9e}.m-calendar table td{cursor:pointer}.m-calendar__day{position:relative;display:inline-block;height:34px;line-height:34px}.m-calendar__day.is-today{color:#21a497}.m-calendar__day.is-selected{color:#fff!important}.m-calendar__selected-day{display:none;position:absolute;z-index:-1;top:50%;left:50%;width:34px;height:34px;margin-top:-17px;margin-left:-17px;border-radius:50%}"]
                }] }
    ];
    SgvCalendarComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [SgvRangepickerDefaultsService,] }] }
    ]; };
    SgvCalendarComponent.propDecorators = {
        side: [{ type: Input }],
        period: [{ type: Input }],
        events: [{ type: Input }],
        hoveredDate: [{ type: Input }]
    };
    return SgvCalendarComponent;
}());
export { SgvCalendarComponent };
if (false) {
    /** @type {?} */
    SgvCalendarComponent.prototype.weeks;
    /** @type {?} */
    SgvCalendarComponent.prototype.side;
    /** @type {?} */
    SgvCalendarComponent.prototype.headings;
    /**
     * @type {?}
     * @private
     */
    SgvCalendarComponent.prototype.period;
    /**
     * @type {?}
     * @private
     */
    SgvCalendarComponent.prototype.events;
    /**
     * @type {?}
     * @private
     */
    SgvCalendarComponent.prototype.year;
    /**
     * @type {?}
     * @private
     */
    SgvCalendarComponent.prototype.month;
    /**
     * @type {?}
     * @private
     */
    SgvCalendarComponent.prototype.monthIndex;
    /**
     * @type {?}
     * @private
     */
    SgvCalendarComponent.prototype.firstMonday;
    /**
     * @type {?}
     * @private
     */
    SgvCalendarComponent.prototype.hoveredDate;
    /**
     * @type {?}
     * @private
     */
    SgvCalendarComponent.prototype.locale;
    /** @type {?} */
    SgvCalendarComponent.prototype.defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O0lBQzVCLE1BQU0sR0FBRyxPQUFPO0FBRXRCLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXBFO0lBdUJDLDhCQUM0QixNQUFjLEVBQ0ssUUFBUTtRQUQzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0ssYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQWZoRCxhQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQWdCMUQsQ0FBQzs7OztJQUVHLHVDQUFROzs7SUFBZjtRQUFBLGlCQXFCQztRQW5CQSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFWixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVOzs7O1FBQUUsVUFBQyxTQUFpQjtZQUU1QyxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzth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dCwgT25Jbml0LCBJbnB1dCwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5pbXBvcnQgeyBDYWxlbmRhckRheSwgQ2FsZW5kYXJQZXJpb2QsIENhbGVuZGFyRXZlbnRzIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBTZ3ZSYW5nZXBpY2tlckRlZmF1bHRzU2VydmljZSB9IGZyb20gJy4uL2RlZmF1bHRzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzZ3YtY2FsZW5kYXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2d2Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRwdWJsaWMgd2Vla3M6IEFycmF5PEFycmF5PENhbGVuZGFyRGF5Pj47XHJcblx0QElucHV0KClcclxuXHRwdWJsaWMgc2lkZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBoZWFkaW5ncyA9IFsn0J/QvScsICfQktGCJywgJ9Ch0YAnLCAn0KfRgicsICfQn9GCJywgJ9Ch0LEnLCAn0JLRgSddO1xyXG5cclxuXHRASW5wdXQoKVxyXG5cdHByaXZhdGUgcGVyaW9kOiBDYWxlbmRhclBlcmlvZDtcclxuXHRASW5wdXQoKVxyXG5cdHByaXZhdGUgZXZlbnRzOiBDYWxlbmRhckV2ZW50cztcclxuXHRwcml2YXRlIHllYXI6IG51bWJlcjtcclxuXHRwcml2YXRlIG1vbnRoOiBtb21lbnRfLk1vbWVudDtcclxuXHRwcml2YXRlIG1vbnRoSW5kZXg6IG51bWJlcjtcclxuXHRwcml2YXRlIGZpcnN0TW9uZGF5OiBtb21lbnRfLk1vbWVudDtcclxuXHRASW5wdXQoKVxyXG5cdHByaXZhdGUgaG92ZXJlZERhdGU6IG1vbWVudF8uTW9tZW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nLFxyXG5cdFx0QEluamVjdChTZ3ZSYW5nZXBpY2tlckRlZmF1bHRzU2VydmljZSkgcHVibGljIGRlZmF1bHRzXHJcblx0KSB7fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XHJcblxyXG5cdFx0dGhpcy5tb250aEluZGV4ID0gbW9tZW50KCkubW9udGgoKTtcclxuXHRcdHRoaXMueWVhciA9IG1vbWVudCgpLnllYXIoKTtcclxuXHJcblx0XHRpZiAodGhpcy5zaWRlID09PSAnbGVmdCcpIHtcclxuXHRcdFx0dGhpcy5kZWNNb250aCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cclxuXHRcdHRoaXMuZXZlbnRzLm9uKCduYXZpZ2F0ZScsIChkaXJlY3Rpb246IHN0cmluZykgPT4ge1xyXG5cclxuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XHJcblx0XHRcdFx0dGhpcy5kZWNNb250aCgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XHJcblx0XHRcdFx0dGhpcy5pbmNNb250aCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmluaXQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldE1vbnRoVGl0bGUoKTogc3RyaW5nIHtcclxuXHRcdGNvbnN0IHN0ciA9IHRoaXMubW9udGgubG9jYWxlKHRoaXMubG9jYWxlKS5mb3JtYXQoJ01NTU0sIFlZWVknKTtcclxuXHRcdHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmF2aWdhdGUoZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHRoaXMuZXZlbnRzLnNlbmQoJ25hdmlnYXRlJywgZGlyZWN0aW9uKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZWxlY3QoZGF5OiBDYWxlbmRhckRheSk6IHZvaWQge1xyXG5cdFx0aWYgKGRheS5pc0N1cnJlbnRNb250aCkge1xyXG5cdFx0XHR0aGlzLmV2ZW50cy5zZW5kKCd1cGRhdGVNb2RlbCcsIGRheS5kYXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkhvdmVyKGRheTogQ2FsZW5kYXJEYXkpOiB2b2lkIHtcclxuXHRcdGlmIChkYXkuaXNDdXJyZW50TW9udGgpIHtcclxuXHRcdFx0dGhpcy5ldmVudHMuc2VuZCgnaG92ZXJlZCcsIGRheS5kYXRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc1NlbGVjdGVkKGRhdGU6IG1vbWVudF8uTW9tZW50KTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBzdGFydCA9IE51bWJlcih0aGlzLnBlcmlvZC5zdGFydCk7XHJcblx0XHRjb25zdCBlbmQgPSBOdW1iZXIodGhpcy5wZXJpb2QuZW5kKTtcclxuXHRcdHJldHVybiAoc3RhcnQgJiYgZGF0ZS5pc1NhbWUoc3RhcnQsICdkYXknKSkgfHwgKGVuZCAmJiBkYXRlLmlzU2FtZShlbmQsICdkYXknKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNCZXR3ZWVuKGRhdGU6IG1vbWVudF8uTW9tZW50KTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBzdGFydCA9IE51bWJlcih0aGlzLnBlcmlvZC5zdGFydCk7XHJcblx0XHRjb25zdCBlbmQgPSBOdW1iZXIodGhpcy5wZXJpb2QuZW5kKTtcclxuXHRcdGNvbnN0IGhvdmVyZWQgPSBOdW1iZXIodGhpcy5ob3ZlcmVkRGF0ZSk7XHJcblxyXG5cdFx0aWYgKHN0YXJ0ICYmIGVuZCkge1xyXG5cdFx0XHRyZXR1cm4gZGF0ZS5pc0JldHdlZW4oc3RhcnQsIGVuZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHN0YXJ0ICYmIGhvdmVyZWQpIHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRkYXRlLmlzQmV0d2VlbihzdGFydCwgaG92ZXJlZCkgfHxcclxuXHRcdFx0XHRkYXRlLmlzQmV0d2Vlbihob3ZlcmVkLCBzdGFydCkgfHxcclxuXHRcdFx0XHRkYXRlLnZhbHVlT2YoKSA9PT0gaG92ZXJlZFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVE9ETyByZW5hbWUgP1xyXG5cdHByaXZhdGUgaW5pdCgpIHtcclxuXHRcdHRoaXMubW9udGggPSBtb21lbnQoW3RoaXMueWVhciwgdGhpcy5tb250aEluZGV4XSk7XHJcblx0XHR0aGlzLmZpcnN0TW9uZGF5ID0gbW9tZW50KFt0aGlzLnllYXIsIHRoaXMubW9udGhJbmRleF0pLnN0YXJ0T2YoJ2lzb1dlZWsnKTtcclxuXHRcdHRoaXMud2Vla3MgPSB0aGlzLmJ1aWxkQ2FsZW5kYXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYnVpbGRDYWxlbmRhcigpOiBBcnJheTxBcnJheTxDYWxlbmRhckRheT4+IHtcclxuXHRcdGNvbnN0IHdlZWtzID0gW107XHJcblx0XHRsZXQgZG9uZSA9IGZhbHNlO1xyXG5cdFx0Y29uc3QgZGF0ZSA9IHRoaXMuZmlyc3RNb25kYXkuY2xvbmUoKTtcclxuXHJcblx0XHR3aGlsZSAoIWRvbmUpIHtcclxuXHRcdFx0d2Vla3MucHVzaCh7XHJcblx0XHRcdFx0ZGF5czogdGhpcy5idWlsZFdlZWsoZGF0ZS5jbG9uZSgpKVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZGF0ZS5hZGQoMSwgJ3cnKTtcclxuXHRcdFx0ZG9uZSA9IHRoaXMubW9udGhJbmRleCAhPT0gZGF0ZS5tb250aCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB3ZWVrcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYnVpbGRXZWVrKGRhdGU6IG1vbWVudF8uTW9tZW50KTogQXJyYXk8Q2FsZW5kYXJEYXk+IHtcclxuXHRcdGNvbnN0IGRheXM6IEFycmF5PENhbGVuZGFyRGF5PiA9IFtdO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcblxyXG5cdFx0XHRkYXlzLnB1c2goe1xyXG5cdFx0XHRcdG5hbWU6IGRhdGUuZm9ybWF0KCdkZCcpLnN1YnN0cmluZygwLCAxKSxcclxuXHRcdFx0XHRudW1iZXI6IGRhdGUuZGF0ZSgpLFxyXG5cdFx0XHRcdGlzQ3VycmVudE1vbnRoOiBkYXRlLm1vbnRoKCkgPT09IHRoaXMubW9udGhJbmRleCxcclxuXHRcdFx0XHRpc1RvZGF5OiBkYXRlLmlzU2FtZShuZXcgRGF0ZSgpLCAnZGF5JyksXHJcblx0XHRcdFx0ZGF0ZTogZGF0ZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGRhdGUgPSBkYXRlLmNsb25lKCk7XHJcblx0XHRcdGRhdGUuYWRkKDEsICdkJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRheXM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluY01vbnRoKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5tb250aEluZGV4Kys7XHJcblx0XHRpZiAodGhpcy5tb250aEluZGV4ID09PSAxMikge1xyXG5cdFx0XHR0aGlzLm1vbnRoSW5kZXggPSAwO1xyXG5cdFx0XHR0aGlzLnllYXIrKztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZGVjTW9udGgoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1vbnRoSW5kZXgtLTtcclxuXHRcdGlmICh0aGlzLm1vbnRoSW5kZXggPT09IC0xKSB7XHJcblx0XHRcdHRoaXMubW9udGhJbmRleCA9IDExO1xyXG5cdFx0XHR0aGlzLnllYXItLTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==