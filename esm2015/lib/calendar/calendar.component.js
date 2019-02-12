/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, LOCALE_ID, Inject } from '@angular/core';
import * as moment_ from 'moment';
/** @type {?} */
const moment = moment_;
import { SgvRangepickerDefaultsService } from '../defaults';
export class SgvCalendarComponent {
    /**
     * @param {?} locale
     * @param {?} defaults
     */
    constructor(locale, defaults) {
        this.locale = locale;
        this.defaults = defaults;
        this.headings = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        (direction) => {
            if (direction === 'prev') {
                this.decMonth();
            }
            else if (direction === 'next') {
                this.incMonth();
            }
            this.init();
        }));
    }
    /**
     * @return {?}
     */
    getMonthTitle() {
        /** @type {?} */
        const str = this.month.locale(this.locale).format('MMMM, YYYY');
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    navigate(direction) {
        this.events.send('navigate', direction);
    }
    /**
     * @param {?} day
     * @return {?}
     */
    select(day) {
        if (day.isCurrentMonth) {
            this.events.send('updateModel', day.date);
        }
    }
    /**
     * @param {?} day
     * @return {?}
     */
    onHover(day) {
        if (day.isCurrentMonth) {
            this.events.send('hovered', day.date);
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSelected(date) {
        /** @type {?} */
        const start = Number(this.period.start);
        /** @type {?} */
        const end = Number(this.period.end);
        return (start && date.isSame(start, 'day')) || (end && date.isSame(end, 'day'));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBetween(date) {
        /** @type {?} */
        const start = Number(this.period.start);
        /** @type {?} */
        const end = Number(this.period.end);
        /** @type {?} */
        const hovered = Number(this.hoveredDate);
        if (start && end) {
            return date.isBetween(start, end);
        }
        if (start && hovered) {
            return (date.isBetween(start, hovered) ||
                date.isBetween(hovered, start) ||
                date.valueOf() === hovered);
        }
    }
    // TODO rename ?
    /**
     * @private
     * @return {?}
     */
    init() {
        this.month = moment([this.year, this.monthIndex]);
        this.firstMonday = moment([this.year, this.monthIndex]).startOf('isoWeek');
        this.weeks = this.buildCalendar();
    }
    /**
     * @private
     * @return {?}
     */
    buildCalendar() {
        /** @type {?} */
        const weeks = [];
        /** @type {?} */
        let done = false;
        /** @type {?} */
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
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    buildWeek(date) {
        /** @type {?} */
        const days = [];
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
    /**
     * @private
     * @return {?}
     */
    incMonth() {
        this.monthIndex++;
        if (this.monthIndex === 12) {
            this.monthIndex = 0;
            this.year++;
        }
    }
    /**
     * @private
     * @return {?}
     */
    decMonth() {
        this.monthIndex--;
        if (this.monthIndex === -1) {
            this.monthIndex = 11;
            this.year--;
        }
    }
}
SgvCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sgv-calendar',
                template: "<div class=\"m-calendar\">\r\n\t<header class=\"m-calendar__header\">\r\n\t\t<div class=\"m-calendar__nav m-calendar__nav--left\">\r\n\t\t\t<i (click)=\"navigate('prev')\" *ngIf=\"side !== 'right'\"></i>\r\n\t\t</div>\r\n\t\t<div class=\"m-calendar__title\" >\r\n\t\t\t{{ getMonthTitle() }}\r\n\t\t</div>\r\n\t\t<div class=\"m-calendar__nav m-calendar__nav--right\">\r\n\t\t\t<i (click)=\"navigate('next')\" *ngIf=\"side !== 'left'\"></i>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\t<table>\r\n\t\t<thead>\r\n\t\t\t<th *ngFor=\"let th of headings\">{{th}}</th>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let week of weeks\">\r\n\t\t\t\t<td *ngFor=\"let day of week.days\" \r\n\t\t\t\t\t(click)=\"select(day)\"\r\n\t\t\t\t\t(mouseover)=\"onHover(day);\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<span class=\"m-calendar__day\"\r\n\t\t\t\t\t\t  [ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t'is-today': day.isToday,\r\n\t\t\t\t\t\t\t\t\t'is-selected': isSelected(day.date)\r\n\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t  [ngStyle]=\"isBetween(day.date) ? {'color': defaults.color} : {}\"\r\n\t\t\t\t\t\t  *ngIf=\"day.isCurrentMonth\">\r\n\t\t\t\t\t\t{{day.number}}\r\n\t\t\t\t\t\t<span class=\"m-calendar__selected-day\"\r\n\t\t\t\t\t\t\t  [ngStyle]=\"isSelected(day.date) ? {'background-color': defaults.color, 'display': 'block'} : {}\"></span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n",
                styles: [".m-calendar{width:100%}.m-calendar__header{display:table;width:100%;height:60px;table-layout:fixed}.m-calendar__nav{display:table-cell;width:50px;vertical-align:middle}.m-calendar__nav--left{text-align:left}.m-calendar__nav--left i{display:inline-block;width:24px;height:24px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAN0lEQVR4AWOgEIyCBiAkSfl/ht8MWqQpDyFNeShpysNIUf4HpJw0DeFA1nDRokWaljry0tQoAABoiB3OU+DRDgAAAABJRU5ErkJggg==)}.m-calendar__nav--right{text-align:right}.m-calendar__nav--right i{display:inline-block;width:24px;height:24px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAANElEQVR4AWMgE4yCRoYGUpTrMvxh+E+algjStUSSriWKdC3REC2UaBh45TSMuAYgpAiMAgDU3h38ltq8/gAAAABJRU5ErkJggg==)}.m-calendar__nav i{margin:0 8px;cursor:pointer;vertical-align:middle}.m-calendar__title{display:table-cell;font-size:14px;font-weight:500;text-align:center;vertical-align:middle}.m-calendar table{width:100%}.m-calendar table td,.m-calendar table th{height:34px;font-size:12px;font-weight:500;text-align:center}.m-calendar table th{color:#9e9e9e}.m-calendar table td{cursor:pointer}.m-calendar__day{position:relative;display:inline-block;height:34px;line-height:34px}.m-calendar__day.is-today{color:#21a497}.m-calendar__day.is-selected{color:#fff!important}.m-calendar__selected-day{display:none;position:absolute;z-index:-1;top:50%;left:50%;width:34px;height:34px;margin-top:-17px;margin-left:-17px;border-radius:50%}"]
            }] }
];
SgvCalendarComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [SgvRangepickerDefaultsService,] }] }
];
SgvCalendarComponent.propDecorators = {
    side: [{ type: Input }],
    period: [{ type: Input }],
    events: [{ type: Input }],
    hoveredDate: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O01BQzVCLE1BQU0sR0FBRyxPQUFPO0FBRXRCLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU81RCxNQUFNOzs7OztJQWtCTCxZQUM0QixNQUFjLEVBQ0ssUUFBUTtRQUQzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0ssYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQWZoRCxhQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQWdCMUQsQ0FBQzs7OztJQUVHLFFBQVE7UUFFZCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFWixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVOzs7O1FBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUU7WUFFaEQsSUFBSSxTQUFTLEtBQUssTUFBTSxFQUFFO2dCQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDaEI7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Ozs7OztJQUVPLFFBQVE7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDWjtJQUNGLENBQUM7Ozs7O0lBRU8sUUFBUTtRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7WUF6SkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixtNUNBQXdDOzthQUV4Qzs7O3lDQW9CRSxNQUFNLFNBQUMsU0FBUzs0Q0FDaEIsTUFBTSxTQUFDLDZCQUE2Qjs7O21CQWpCckMsS0FBSztxQkFJTCxLQUFLO3FCQUVMLEtBQUs7MEJBTUwsS0FBSzs7OztJQWJOLHFDQUF3Qzs7SUFDeEMsb0NBQ29COztJQUNwQix3Q0FBNkQ7Ozs7O0lBRTdELHNDQUMrQjs7Ozs7SUFDL0Isc0NBQytCOzs7OztJQUMvQixvQ0FBcUI7Ozs7O0lBQ3JCLHFDQUE4Qjs7Ozs7SUFDOUIsMENBQTJCOzs7OztJQUMzQiwyQ0FBb0M7Ozs7O0lBQ3BDLDJDQUNvQzs7Ozs7SUFHbkMsc0NBQXlDOztJQUN6Qyx3Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuaW1wb3J0IHsgQ2FsZW5kYXJEYXksIENhbGVuZGFyUGVyaW9kLCBDYWxlbmRhckV2ZW50cyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLi9kZWZhdWx0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3Nndi1jYWxlbmRhcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZ3ZDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdHB1YmxpYyB3ZWVrczogQXJyYXk8QXJyYXk8Q2FsZW5kYXJEYXk+PjtcclxuXHRASW5wdXQoKVxyXG5cdHB1YmxpYyBzaWRlOiBzdHJpbmc7XHJcblx0cHVibGljIGhlYWRpbmdzID0gWyfQn9C9JywgJ9CS0YInLCAn0KHRgCcsICfQp9GCJywgJ9Cf0YInLCAn0KHQsScsICfQktGBJ107XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0cHJpdmF0ZSBwZXJpb2Q6IENhbGVuZGFyUGVyaW9kO1xyXG5cdEBJbnB1dCgpXHJcblx0cHJpdmF0ZSBldmVudHM6IENhbGVuZGFyRXZlbnRzO1xyXG5cdHByaXZhdGUgeWVhcjogbnVtYmVyO1xyXG5cdHByaXZhdGUgbW9udGg6IG1vbWVudF8uTW9tZW50O1xyXG5cdHByaXZhdGUgbW9udGhJbmRleDogbnVtYmVyO1xyXG5cdHByaXZhdGUgZmlyc3RNb25kYXk6IG1vbWVudF8uTW9tZW50O1xyXG5cdEBJbnB1dCgpXHJcblx0cHJpdmF0ZSBob3ZlcmVkRGF0ZTogbW9tZW50Xy5Nb21lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcsXHJcblx0XHRASW5qZWN0KFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlKSBwdWJsaWMgZGVmYXVsdHNcclxuXHQpIHt9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuXHJcblx0XHR0aGlzLm1vbnRoSW5kZXggPSBtb21lbnQoKS5tb250aCgpO1xyXG5cdFx0dGhpcy55ZWFyID0gbW9tZW50KCkueWVhcigpO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpZGUgPT09ICdsZWZ0Jykge1xyXG5cdFx0XHR0aGlzLmRlY01vbnRoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblxyXG5cdFx0dGhpcy5ldmVudHMub24oJ25hdmlnYXRlJywgKGRpcmVjdGlvbjogc3RyaW5nKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcclxuXHRcdFx0XHR0aGlzLmRlY01vbnRoKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuXHRcdFx0XHR0aGlzLmluY01vbnRoKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0TW9udGhUaXRsZSgpOiBzdHJpbmcge1xyXG5cdFx0Y29uc3Qgc3RyID0gdGhpcy5tb250aC5sb2NhbGUodGhpcy5sb2NhbGUpLmZvcm1hdCgnTU1NTSwgWVlZWScpO1xyXG5cdFx0cmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuYXZpZ2F0ZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0dGhpcy5ldmVudHMuc2VuZCgnbmF2aWdhdGUnLCBkaXJlY3Rpb24pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbGVjdChkYXk6IENhbGVuZGFyRGF5KTogdm9pZCB7XHJcblx0XHRpZiAoZGF5LmlzQ3VycmVudE1vbnRoKSB7XHJcblx0XHRcdHRoaXMuZXZlbnRzLnNlbmQoJ3VwZGF0ZU1vZGVsJywgZGF5LmRhdGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG9uSG92ZXIoZGF5OiBDYWxlbmRhckRheSk6IHZvaWQge1xyXG5cdFx0aWYgKGRheS5pc0N1cnJlbnRNb250aCkge1xyXG5cdFx0XHR0aGlzLmV2ZW50cy5zZW5kKCdob3ZlcmVkJywgZGF5LmRhdGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGlzU2VsZWN0ZWQoZGF0ZTogbW9tZW50Xy5Nb21lbnQpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gTnVtYmVyKHRoaXMucGVyaW9kLnN0YXJ0KTtcclxuXHRcdGNvbnN0IGVuZCA9IE51bWJlcih0aGlzLnBlcmlvZC5lbmQpO1xyXG5cdFx0cmV0dXJuIChzdGFydCAmJiBkYXRlLmlzU2FtZShzdGFydCwgJ2RheScpKSB8fCAoZW5kICYmIGRhdGUuaXNTYW1lKGVuZCwgJ2RheScpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0JldHdlZW4oZGF0ZTogbW9tZW50Xy5Nb21lbnQpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gTnVtYmVyKHRoaXMucGVyaW9kLnN0YXJ0KTtcclxuXHRcdGNvbnN0IGVuZCA9IE51bWJlcih0aGlzLnBlcmlvZC5lbmQpO1xyXG5cdFx0Y29uc3QgaG92ZXJlZCA9IE51bWJlcih0aGlzLmhvdmVyZWREYXRlKTtcclxuXHJcblx0XHRpZiAoc3RhcnQgJiYgZW5kKSB7XHJcblx0XHRcdHJldHVybiBkYXRlLmlzQmV0d2VlbihzdGFydCwgZW5kKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc3RhcnQgJiYgaG92ZXJlZCkge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGRhdGUuaXNCZXR3ZWVuKHN0YXJ0LCBob3ZlcmVkKSB8fFxyXG5cdFx0XHRcdGRhdGUuaXNCZXR3ZWVuKGhvdmVyZWQsIHN0YXJ0KSB8fFxyXG5cdFx0XHRcdGRhdGUudmFsdWVPZigpID09PSBob3ZlcmVkXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBUT0RPIHJlbmFtZSA/XHJcblx0cHJpdmF0ZSBpbml0KCkge1xyXG5cdFx0dGhpcy5tb250aCA9IG1vbWVudChbdGhpcy55ZWFyLCB0aGlzLm1vbnRoSW5kZXhdKTtcclxuXHRcdHRoaXMuZmlyc3RNb25kYXkgPSBtb21lbnQoW3RoaXMueWVhciwgdGhpcy5tb250aEluZGV4XSkuc3RhcnRPZignaXNvV2VlaycpO1xyXG5cdFx0dGhpcy53ZWVrcyA9IHRoaXMuYnVpbGRDYWxlbmRhcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBidWlsZENhbGVuZGFyKCk6IEFycmF5PEFycmF5PENhbGVuZGFyRGF5Pj4ge1xyXG5cdFx0Y29uc3Qgd2Vla3MgPSBbXTtcclxuXHRcdGxldCBkb25lID0gZmFsc2U7XHJcblx0XHRjb25zdCBkYXRlID0gdGhpcy5maXJzdE1vbmRheS5jbG9uZSgpO1xyXG5cclxuXHRcdHdoaWxlICghZG9uZSkge1xyXG5cdFx0XHR3ZWVrcy5wdXNoKHtcclxuXHRcdFx0XHRkYXlzOiB0aGlzLmJ1aWxkV2VlayhkYXRlLmNsb25lKCkpXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRkYXRlLmFkZCgxLCAndycpO1xyXG5cdFx0XHRkb25lID0gdGhpcy5tb250aEluZGV4ICE9PSBkYXRlLm1vbnRoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHdlZWtzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBidWlsZFdlZWsoZGF0ZTogbW9tZW50Xy5Nb21lbnQpOiBBcnJheTxDYWxlbmRhckRheT4ge1xyXG5cdFx0Y29uc3QgZGF5czogQXJyYXk8Q2FsZW5kYXJEYXk+ID0gW107XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuXHJcblx0XHRcdGRheXMucHVzaCh7XHJcblx0XHRcdFx0bmFtZTogZGF0ZS5mb3JtYXQoJ2RkJykuc3Vic3RyaW5nKDAsIDEpLFxyXG5cdFx0XHRcdG51bWJlcjogZGF0ZS5kYXRlKCksXHJcblx0XHRcdFx0aXNDdXJyZW50TW9udGg6IGRhdGUubW9udGgoKSA9PT0gdGhpcy5tb250aEluZGV4LFxyXG5cdFx0XHRcdGlzVG9kYXk6IGRhdGUuaXNTYW1lKG5ldyBEYXRlKCksICdkYXknKSxcclxuXHRcdFx0XHRkYXRlOiBkYXRlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZGF0ZSA9IGRhdGUuY2xvbmUoKTtcclxuXHRcdFx0ZGF0ZS5hZGQoMSwgJ2QnKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF5cztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5jTW9udGgoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1vbnRoSW5kZXgrKztcclxuXHRcdGlmICh0aGlzLm1vbnRoSW5kZXggPT09IDEyKSB7XHJcblx0XHRcdHRoaXMubW9udGhJbmRleCA9IDA7XHJcblx0XHRcdHRoaXMueWVhcisrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkZWNNb250aCgpOiB2b2lkIHtcclxuXHRcdHRoaXMubW9udGhJbmRleC0tO1xyXG5cdFx0aWYgKHRoaXMubW9udGhJbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0dGhpcy5tb250aEluZGV4ID0gMTE7XHJcblx0XHRcdHRoaXMueWVhci0tO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19