/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, LOCALE_ID, Inject } from '@angular/core';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
import { SgvRangepickerDefaultsService } from '../defaults';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O0lBQzVCLE1BQU0sR0FBRyxPQUFPO0FBRXRCLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1RDtJQXVCQyw4QkFDNEIsTUFBYyxFQUNLLFFBQVE7UUFEM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNLLGFBQVEsR0FBUixRQUFRLENBQUE7UUFmaEQsYUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFnQjFELENBQUM7Ozs7SUFFRyx1Q0FBUTs7O0lBQWY7UUFBQSxpQkFxQkM7UUFuQkEsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVosSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVTs7OztRQUFFLFVBQUMsU0FBaUI7WUFFNUMsSUFBSSxTQUFTLEtBQUssTUFBTSxFQUFFO2dCQUN6QixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFD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IE9uSW5pdCwgSW5wdXQsIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuaW1wb3J0IHsgQ2FsZW5kYXJEYXksIENhbGVuZGFyUGVyaW9kLCBDYWxlbmRhckV2ZW50cyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLi9kZWZhdWx0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3Nndi1jYWxlbmRhcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZ3ZDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdHB1YmxpYyB3ZWVrczogQXJyYXk8QXJyYXk8Q2FsZW5kYXJEYXk+PjtcclxuXHRASW5wdXQoKVxyXG5cdHB1YmxpYyBzaWRlOiBzdHJpbmc7XHJcblx0cHVibGljIGhlYWRpbmdzID0gWyfQn9C9JywgJ9CS0YInLCAn0KHRgCcsICfQp9GCJywgJ9Cf0YInLCAn0KHQsScsICfQktGBJ107XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0cHJpdmF0ZSBwZXJpb2Q6IENhbGVuZGFyUGVyaW9kO1xyXG5cdEBJbnB1dCgpXHJcblx0cHJpdmF0ZSBldmVudHM6IENhbGVuZGFyRXZlbnRzO1xyXG5cdHByaXZhdGUgeWVhcjogbnVtYmVyO1xyXG5cdHByaXZhdGUgbW9udGg6IG1vbWVudF8uTW9tZW50O1xyXG5cdHByaXZhdGUgbW9udGhJbmRleDogbnVtYmVyO1xyXG5cdHByaXZhdGUgZmlyc3RNb25kYXk6IG1vbWVudF8uTW9tZW50O1xyXG5cdEBJbnB1dCgpXHJcblx0cHJpdmF0ZSBob3ZlcmVkRGF0ZTogbW9tZW50Xy5Nb21lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcsXHJcblx0XHRASW5qZWN0KFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlKSBwdWJsaWMgZGVmYXVsdHNcclxuXHQpIHt9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuXHJcblx0XHR0aGlzLm1vbnRoSW5kZXggPSBtb21lbnQoKS5tb250aCgpO1xyXG5cdFx0dGhpcy55ZWFyID0gbW9tZW50KCkueWVhcigpO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpZGUgPT09ICdsZWZ0Jykge1xyXG5cdFx0XHR0aGlzLmRlY01vbnRoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblxyXG5cdFx0dGhpcy5ldmVudHMub24oJ25hdmlnYXRlJywgKGRpcmVjdGlvbjogc3RyaW5nKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcclxuXHRcdFx0XHR0aGlzLmRlY01vbnRoKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuXHRcdFx0XHR0aGlzLmluY01vbnRoKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0TW9udGhUaXRsZSgpOiBzdHJpbmcge1xyXG5cdFx0Y29uc3Qgc3RyID0gdGhpcy5tb250aC5sb2NhbGUodGhpcy5sb2NhbGUpLmZvcm1hdCgnTU1NTSwgWVlZWScpO1xyXG5cdFx0cmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuYXZpZ2F0ZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0dGhpcy5ldmVudHMuc2VuZCgnbmF2aWdhdGUnLCBkaXJlY3Rpb24pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbGVjdChkYXk6IENhbGVuZGFyRGF5KTogdm9pZCB7XHJcblx0XHRpZiAoZGF5LmlzQ3VycmVudE1vbnRoKSB7XHJcblx0XHRcdHRoaXMuZXZlbnRzLnNlbmQoJ3VwZGF0ZU1vZGVsJywgZGF5LmRhdGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG9uSG92ZXIoZGF5OiBDYWxlbmRhckRheSk6IHZvaWQge1xyXG5cdFx0aWYgKGRheS5pc0N1cnJlbnRNb250aCkge1xyXG5cdFx0XHR0aGlzLmV2ZW50cy5zZW5kKCdob3ZlcmVkJywgZGF5LmRhdGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGlzU2VsZWN0ZWQoZGF0ZTogbW9tZW50Xy5Nb21lbnQpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gTnVtYmVyKHRoaXMucGVyaW9kLnN0YXJ0KTtcclxuXHRcdGNvbnN0IGVuZCA9IE51bWJlcih0aGlzLnBlcmlvZC5lbmQpO1xyXG5cdFx0cmV0dXJuIChzdGFydCAmJiBkYXRlLmlzU2FtZShzdGFydCwgJ2RheScpKSB8fCAoZW5kICYmIGRhdGUuaXNTYW1lKGVuZCwgJ2RheScpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0JldHdlZW4oZGF0ZTogbW9tZW50Xy5Nb21lbnQpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gTnVtYmVyKHRoaXMucGVyaW9kLnN0YXJ0KTtcclxuXHRcdGNvbnN0IGVuZCA9IE51bWJlcih0aGlzLnBlcmlvZC5lbmQpO1xyXG5cdFx0Y29uc3QgaG92ZXJlZCA9IE51bWJlcih0aGlzLmhvdmVyZWREYXRlKTtcclxuXHJcblx0XHRpZiAoc3RhcnQgJiYgZW5kKSB7XHJcblx0XHRcdHJldHVybiBkYXRlLmlzQmV0d2VlbihzdGFydCwgZW5kKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc3RhcnQgJiYgaG92ZXJlZCkge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGRhdGUuaXNCZXR3ZWVuKHN0YXJ0LCBob3ZlcmVkKSB8fFxyXG5cdFx0XHRcdGRhdGUuaXNCZXR3ZWVuKGhvdmVyZWQsIHN0YXJ0KSB8fFxyXG5cdFx0XHRcdGRhdGUudmFsdWVPZigpID09PSBob3ZlcmVkXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBUT0RPIHJlbmFtZSA/XHJcblx0cHJpdmF0ZSBpbml0KCkge1xyXG5cdFx0dGhpcy5tb250aCA9IG1vbWVudChbdGhpcy55ZWFyLCB0aGlzLm1vbnRoSW5kZXhdKTtcclxuXHRcdHRoaXMuZmlyc3RNb25kYXkgPSBtb21lbnQoW3RoaXMueWVhciwgdGhpcy5tb250aEluZGV4XSkuc3RhcnRPZignaXNvV2VlaycpO1xyXG5cdFx0dGhpcy53ZWVrcyA9IHRoaXMuYnVpbGRDYWxlbmRhcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBidWlsZENhbGVuZGFyKCk6IEFycmF5PEFycmF5PENhbGVuZGFyRGF5Pj4ge1xyXG5cdFx0Y29uc3Qgd2Vla3MgPSBbXTtcclxuXHRcdGxldCBkb25lID0gZmFsc2U7XHJcblx0XHRjb25zdCBkYXRlID0gdGhpcy5maXJzdE1vbmRheS5jbG9uZSgpO1xyXG5cclxuXHRcdHdoaWxlICghZG9uZSkge1xyXG5cdFx0XHR3ZWVrcy5wdXNoKHtcclxuXHRcdFx0XHRkYXlzOiB0aGlzLmJ1aWxkV2VlayhkYXRlLmNsb25lKCkpXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRkYXRlLmFkZCgxLCAndycpO1xyXG5cdFx0XHRkb25lID0gdGhpcy5tb250aEluZGV4ICE9PSBkYXRlLm1vbnRoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHdlZWtzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBidWlsZFdlZWsoZGF0ZTogbW9tZW50Xy5Nb21lbnQpOiBBcnJheTxDYWxlbmRhckRheT4ge1xyXG5cdFx0Y29uc3QgZGF5czogQXJyYXk8Q2FsZW5kYXJEYXk+ID0gW107XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuXHJcblx0XHRcdGRheXMucHVzaCh7XHJcblx0XHRcdFx0bmFtZTogZGF0ZS5mb3JtYXQoJ2RkJykuc3Vic3RyaW5nKDAsIDEpLFxyXG5cdFx0XHRcdG51bWJlcjogZGF0ZS5kYXRlKCksXHJcblx0XHRcdFx0aXNDdXJyZW50TW9udGg6IGRhdGUubW9udGgoKSA9PT0gdGhpcy5tb250aEluZGV4LFxyXG5cdFx0XHRcdGlzVG9kYXk6IGRhdGUuaXNTYW1lKG5ldyBEYXRlKCksICdkYXknKSxcclxuXHRcdFx0XHRkYXRlOiBkYXRlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZGF0ZSA9IGRhdGUuY2xvbmUoKTtcclxuXHRcdFx0ZGF0ZS5hZGQoMSwgJ2QnKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF5cztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5jTW9udGgoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1vbnRoSW5kZXgrKztcclxuXHRcdGlmICh0aGlzLm1vbnRoSW5kZXggPT09IDEyKSB7XHJcblx0XHRcdHRoaXMubW9udGhJbmRleCA9IDA7XHJcblx0XHRcdHRoaXMueWVhcisrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkZWNNb250aCgpOiB2b2lkIHtcclxuXHRcdHRoaXMubW9udGhJbmRleC0tO1xyXG5cdFx0aWYgKHRoaXMubW9udGhJbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0dGhpcy5tb250aEluZGV4ID0gMTE7XHJcblx0XHRcdHRoaXMueWVhci0tO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19