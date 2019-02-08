/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Output, Inject } from '@angular/core';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
import { EventEmitter } from '@angular/core';
import { presets } from '../presets';
import { SgvRangepickerDefaultsService } from '../defaults.service';
var SgvRangepickerComponent = /** @class */ (function () {
    function SgvRangepickerComponent(defaults) {
        this.defaults = defaults;
        this.presets = presets;
        this.tab = 1;
        this.chunkSize = Math.ceil(this.presets.length / 2);
        this.datesChanged = new EventEmitter();
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
             */
            function (topic, listener) {
                if (!this.topics[topic]) {
                    this.topics[topic] = [];
                }
                this.topics[topic].push(listener);
            },
            send: /**
             * @param {?} topic
             * @param {?} info
             * @return {?}
             */
            function (topic, info) {
                if (!this.topics[topic]) {
                    return;
                }
                this.topics[topic].forEach((/**
                 * @param {?} listener
                 * @return {?}
                 */
                function (listener) {
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
        this.presets.forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.hovered = false; }));
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
        this.events.on('updateModel', (/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (counter === 0) {
                // pick first time
                _this.period.start = date.valueOf();
                _this.period.end = null;
            }
            if (counter === 1) {
                // pick second time
                if (date.valueOf() < _this.period.start.valueOf()) {
                    _this.period.end = moment(_this.period.start).endOf('day').valueOf();
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
        this.events.on('hovered', (/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
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
        return this.presets.find((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.code === code; }))[key].valueOf();
    };
    SgvRangepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sgv-rangepicker',
                    template: "<div class=\"m-calendar-wrapper\" *ngIf=\"visible\">\r\n    <header class=\"m-calendar-wrapper__header\" [ngStyle]=\"{'background-color': defaults.color}\">\r\n        <ul>\r\n            <li [ngClass]=\"{'is-active': tab === 1}\" (click)=\"tab = 1\">\r\n                {{ 'PRESETS' | translate }}\r\n            </li>\r\n            <li [ngClass]=\"{'is-active': tab === 2}\" (click)=\"tab = 2\">\r\n                {{ 'DATE_INTERVAL' | translate}}\r\n            </li>\r\n        </ul>\r\n    </header>\r\n    <div class=\"m-calendar-wrapper__inner\">\r\n        <div *ngIf=\"tab === 1\" class=\"m-calendar-wrapper__presets\">\r\n            <div class=\"m-calendar-wrapper__row\">\r\n                <div class=\"m-calendar-wrapper__col\">\r\n                    <ul>\r\n                        <li *ngFor=\"let preset of presets | slice :  0 : chunkSize\"\r\n                            [ngStyle]=\"preset.hovered ? {'color':  defaults.color } : {}\"\r\n                            (click)=\"setPeriod(preset.code);\"\r\n                            (mouseover)=\"preset.hovered=true\"\r\n                            (mouseleave)=\"preset.hovered=false\">\r\n                            {{ preset.code | translate }}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"m-calendar-wrapper__col\">\r\n                    <ul>\r\n                        <li *ngFor=\"let preset of presets | slice : chunkSize: presets.length\"\r\n                            [ngStyle]=\"preset.hovered ? {'color':  defaults.color } : {}\"\r\n                            (click)=\"setPeriod(preset.code);\"\r\n                            (mouseover)=\"preset.hovered=true\"\r\n                            (mouseleave)=\"preset.hovered=false\">\r\n                            {{ preset.code | translate}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"m-calendar-wrapper__row\" *ngIf=\"tab === 2\">\r\n            <div class=\"m-calendar-wrapper__col\">\r\n                <sgv-calendar side=\"left\" [period]=\"period\" [events]=\"events\" [hoveredDate]=\"hoveredDate\"></sgv-calendar>\r\n            </div>\r\n            <div class=\"m-calendar-wrapper__col\">\r\n                <sgv-calendar side=\"right\" [period]=\"period\" [events]=\"events\" [hoveredDate]=\"hoveredDate\"></sgv-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [".m-calendar-wrapper{position:absolute;z-index:1000;top:40px;left:0;width:530px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #eee;border-radius:2px;background:#fff;box-shadow:0 15px 79.38px 1.62px rgba(0,0,0,.16)}.m-calendar-wrapper--single{width:285px}.m-calendar-wrapper__row{margin:0 -10px}.m-calendar-wrapper__row:after{display:table;clear:both;content:''}.m-calendar-wrapper__col{float:left;box-sizing:border-box;width:50%;padding:0 10px}.m-calendar-wrapper__inner{padding:20px 20px 40px}.m-calendar-wrapper__header{height:70px;line-height:67px;box-shadow:0 2px 2.82px .18px rgba(0,0,0,.24)}.m-calendar-wrapper__header ul{display:table;width:100%;margin:0;padding:0}.m-calendar-wrapper__header li{display:table-cell;width:50%;font-size:14px;cursor:pointer;text-align:center;text-transform:uppercase;color:#fff}.m-calendar-wrapper__header li.is-active{border-bottom:3px solid #fff}.m-calendar-wrapper__presets{padding:20px 0;font-size:14px;font-weight:300;line-height:2}.m-calendar-wrapper__presets ul{margin:0;padding:0}.m-calendar-wrapper__presets li{padding:0 20px;list-style:none;cursor:pointer}"]
                }] }
    ];
    SgvRangepickerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [SgvRangepickerDefaultsService,] }] }
    ]; };
    SgvRangepickerComponent.propDecorators = {
        datesChanged: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SgvRangepickerComponent;
}());
export { SgvRangepickerComponent };
if (false) {
    /** @type {?} */
    SgvRangepickerComponent.prototype.period;
    /** @type {?} */
    SgvRangepickerComponent.prototype.hoveredDate;
    /** @type {?} */
    SgvRangepickerComponent.prototype.presets;
    /** @type {?} */
    SgvRangepickerComponent.prototype.tab;
    /** @type {?} */
    SgvRangepickerComponent.prototype.chunkSize;
    /** @type {?} */
    SgvRangepickerComponent.prototype.datesChanged;
    /**
     * Event bus
     * TODO - ref to observables
     * @type {?}
     */
    SgvRangepickerComponent.prototype.events;
    /** @type {?} */
    SgvRangepickerComponent.prototype.visible;
    /** @type {?} */
    SgvRangepickerComponent.prototype.defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci9yYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUM1QixNQUFNLEdBQUcsT0FBTztBQUV0QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFcEU7SUE2Q0MsaUNBQytDLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBckNoRCxZQUFPLEdBQTZCLE9BQU8sQ0FBQztRQUM1QyxRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsY0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFHL0MsaUJBQVksR0FBaUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV2RTs7O1dBR0c7UUFDSSxXQUFNLEdBQUc7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLEVBQUU7Ozs7O3NCQUFDLEtBQUssRUFBRSxRQUFRO2dCQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ3hCO2dCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxD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S0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7O0lBQ0ssc0RBQW9COzs7Ozs7O0lBQTVCLFVBQTZCLElBQVksRUFBRSxHQUFvQjtRQUM5RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWYsQ0FBZSxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0QsQ0FBQzs7Z0JBN0hELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix3K0VBQTJDOztpQkFFM0M7OztnREEwQ0UsTUFBTSxTQUFDLDZCQUE2Qjs7OytCQWpDckMsTUFBTTswQkEwRk4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF1QmxDLDhCQUFDO0NBQUEsQUE5SEQsSUE4SEM7U0F6SFksdUJBQXVCOzs7SUFFbkMseUNBQThCOztJQUM5Qiw4Q0FBbUM7O0lBQ25DLDBDQUFtRDs7SUFDbkQsc0NBQWU7O0lBQ2YsNENBQXNEOztJQUV0RCwrQ0FDdUU7Ozs7OztJQU12RSx5Q0FxQkU7O0lBRUYsMENBQXVCOztJQUd0QiwyQ0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5pbXBvcnQgeyBDYWxlbmRhckRheSwgQ2FsZW5kYXJQZXJpb2QsIENhbGVuZGFyRXZlbnRzLCBSYW5nZXBpY2tlclByZXNldCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHByZXNldHMgfSBmcm9tICcuLi9wcmVzZXRzJztcclxuaW1wb3J0IHsgU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLi9kZWZhdWx0cy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc2d2LXJhbmdlcGlja2VyJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vcmFuZ2VwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3JhbmdlcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNndlJhbmdlcGlja2VyQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIHBlcmlvZDogQ2FsZW5kYXJQZXJpb2Q7XHJcblx0cHVibGljIGhvdmVyZWREYXRlOiBtb21lbnRfLk1vbWVudDtcclxuXHRwdWJsaWMgcHJlc2V0czogQXJyYXk8UmFuZ2VwaWNrZXJQcmVzZXQ+ID0gcHJlc2V0cztcclxuXHRwdWJsaWMgdGFiID0gMTtcclxuXHRwdWJsaWMgY2h1bmtTaXplID0gTWF0aC5jZWlsKHRoaXMucHJlc2V0cy5sZW5ndGggLyAyKTtcclxuXHJcblx0QE91dHB1dCgpXHJcblx0cHVibGljIGRhdGVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENhbGVuZGFyUGVyaW9kPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0LyoqXHJcblx0ICogRXZlbnQgYnVzXHJcblx0ICogVE9ETyAtIHJlZiB0byBvYnNlcnZhYmxlc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBldmVudHMgPSB7XHJcblx0XHR0b3BpY3M6IHt9LFxyXG5cdFx0b24odG9waWMsIGxpc3RlbmVyKSB7XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMudG9waWNzW3RvcGljXSkge1xyXG5cdFx0XHRcdHRoaXMudG9waWNzW3RvcGljXSA9IFtdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnRvcGljc1t0b3BpY10ucHVzaChsaXN0ZW5lcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNlbmQodG9waWMsIGluZm8pIHtcclxuXHJcblx0XHRcdGlmICghdGhpcy50b3BpY3NbdG9waWNdKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnRvcGljc1t0b3BpY10uZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcclxuXHRcdFx0XHRsaXN0ZW5lcihpbmZvKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cHVibGljIHZpc2libGUgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlKSBwdWJsaWMgZGVmYXVsdHNcclxuXHQpIHt9XHJcblxyXG5cdHB1YmxpYyBzaG93KCkge1xyXG5cdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoaWRlKCkge1xyXG5cdFx0dGhpcy52aXNpYmxlID0gZmFsc2U7XHJcblx0XHR0aGlzLnByZXNldHMuZm9yRWFjaCgocCkgPT4gcC5ob3ZlcmVkID0gZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhbGl6ZSByYW5nZXBpY2tlclxyXG5cdCAqL1xyXG5cdHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG5cclxuXHRcdGxldCBjb3VudGVyID0gMDtcclxuXHJcblx0XHR0aGlzLmV2ZW50cy5vbigndXBkYXRlTW9kZWwnLCAoZGF0ZTogbW9tZW50Xy5Nb21lbnQpID0+IHtcclxuXHRcdFx0aWYgKGNvdW50ZXIgPT09IDApIHtcclxuXHRcdFx0XHQvLyBwaWNrIGZpcnN0IHRpbWVcclxuXHRcdFx0XHR0aGlzLnBlcmlvZC5zdGFydCA9IGRhdGUudmFsdWVPZigpO1xyXG5cdFx0XHRcdHRoaXMucGVyaW9kLmVuZCA9IG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChjb3VudGVyID09PSAxKSB7XHJcblx0XHRcdFx0Ly8gcGljayBzZWNvbmQgdGltZVxyXG5cdFx0XHRcdGlmIChkYXRlLnZhbHVlT2YoKSA8IHRoaXMucGVyaW9kLnN0YXJ0LnZhbHVlT2YoKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5wZXJpb2QuZW5kID0gbW9tZW50KHRoaXMucGVyaW9kLnN0YXJ0KS5lbmRPZignZGF5JykudmFsdWVPZigpO1xyXG5cdFx0XHRcdFx0dGhpcy5wZXJpb2Quc3RhcnQgPSBkYXRlLnZhbHVlT2YoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5wZXJpb2QuZW5kID0gZGF0ZS5lbmRPZignZGF5JykudmFsdWVPZigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMucGVyaW9kLnN0YXJ0ICYmIHRoaXMucGVyaW9kLmVuZCkge1xyXG5cdFx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHRcdHRoaXMuZGF0ZXNDaGFuZ2VkLmVtaXQodGhpcy5wZXJpb2QpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb3VudGVyKys7XHJcblxyXG5cdFx0XHRpZiAoY291bnRlciA9PT0gMikge1xyXG5cdFx0XHRcdGNvdW50ZXIgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5ldmVudHMub24oJ2hvdmVyZWQnLCAoZGF0ZTogbW9tZW50Xy5Nb21lbnQpID0+IHtcclxuXHRcdFx0dGhpcy5ob3ZlcmVkRGF0ZSA9IGRhdGU7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByZXZlbnQgYnViYmxpbmcgdG8gaW5wdXRcclxuXHQgKi9cclxuXHRASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcblx0cHVibGljIG9uQ2xpY2soZSkge1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBwZXJpb2QgZnJvbSBwcmVzZXRzXHJcblx0ICovXHJcblx0cHVibGljIHNldFBlcmlvZChjb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHRoaXMucGVyaW9kLnN0YXJ0ID0gdGhpcy5nZXRQcmVzZXRWYWx1ZUJ5Q29kZShjb2RlLCAnc3RhcnQnKTtcclxuXHRcdHRoaXMucGVyaW9kLmVuZCA9IHRoaXMuZ2V0UHJlc2V0VmFsdWVCeUNvZGUoY29kZSwgJ2VuZCcpO1xyXG5cdFx0dGhpcy5oaWRlKCk7XHJcblx0XHR0aGlzLmRhdGVzQ2hhbmdlZC5lbWl0KHRoaXMucGVyaW9kKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBkYXRlIGluIG1zIGZyb20gcHJlc2V0XHJcblx0ICogQHBhcmFtIGNvZGUgLSBwcmVzZXQgY29kZVxyXG5cdCAqIEBwYXJhbSBrZXkgLSBlbmQgb3Igc3RhcnRcclxuXHQgKi9cclxuXHRwcml2YXRlIGdldFByZXNldFZhbHVlQnlDb2RlKGNvZGU6IHN0cmluZywga2V5OiAnc3RhcnQnIHwgJ2VuZCcpOiBudW1iZXIgIHtcclxuXHRcdHJldHVybiB0aGlzLnByZXNldHMuZmluZChwID0+IHAuY29kZSA9PT0gY29kZSlba2V5XS52YWx1ZU9mKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==