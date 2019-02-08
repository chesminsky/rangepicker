/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Output, Inject } from '@angular/core';
import * as moment_ from 'moment';
/** @type {?} */
const moment = moment_;
import { EventEmitter } from '@angular/core';
import { presets } from '../presets';
import { SgvRangepickerDefaultsService } from '../defaults.service';
export class SgvRangepickerComponent {
    /**
     * @param {?} defaults
     */
    constructor(defaults) {
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
            /**
             * @param {?} topic
             * @param {?} listener
             * @return {?}
             */
            on(topic, listener) {
                if (!this.topics[topic]) {
                    this.topics[topic] = [];
                }
                this.topics[topic].push(listener);
            },
            /**
             * @param {?} topic
             * @param {?} info
             * @return {?}
             */
            send(topic, info) {
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
    show() {
        this.visible = true;
    }
    /**
     * @return {?}
     */
    hide() {
        this.visible = false;
        this.presets.forEach((/**
         * @param {?} p
         * @return {?}
         */
        (p) => p.hovered = false));
    }
    /**
     * Initialize rangepicker
     * @return {?}
     */
    init() {
        /** @type {?} */
        let counter = 0;
        this.events.on('updateModel', (/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            if (counter === 0) {
                // pick first time
                this.period.start = date.valueOf();
                this.period.end = null;
            }
            if (counter === 1) {
                // pick second time
                if (date.valueOf() < this.period.start.valueOf()) {
                    this.period.end = moment(this.period.start).endOf('day').valueOf();
                    this.period.start = date.valueOf();
                }
                else {
                    this.period.end = date.endOf('day').valueOf();
                }
            }
            if (this.period.start && this.period.end) {
                this.hide();
                this.datesChanged.emit(this.period);
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
        (date) => {
            this.hoveredDate = date;
        }));
    }
    /**
     * Prevent bubbling to input
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.stopPropagation();
    }
    /**
     * Set period from presets
     * @param {?} code
     * @return {?}
     */
    setPeriod(code) {
        this.period.start = this.getPresetValueByCode(code, 'start');
        this.period.end = this.getPresetValueByCode(code, 'end');
        this.hide();
        this.datesChanged.emit(this.period);
    }
    /**
     * Get date in ms from preset
     * @private
     * @param {?} code - preset code
     * @param {?} key - end or start
     * @return {?}
     */
    getPresetValueByCode(code, key) {
        return this.presets.find((/**
         * @param {?} p
         * @return {?}
         */
        p => p.code === code))[key].valueOf();
    }
}
SgvRangepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sgv-rangepicker',
                template: "<div class=\"m-calendar-wrapper\" *ngIf=\"visible\">\r\n    <header class=\"m-calendar-wrapper__header\" [ngStyle]=\"{'background-color': defaults.color}\">\r\n        <ul>\r\n            <li [ngClass]=\"{'is-active': tab === 1}\" (click)=\"tab = 1\">\r\n                {{ 'PRESETS' | translate }}\r\n            </li>\r\n            <li [ngClass]=\"{'is-active': tab === 2}\" (click)=\"tab = 2\">\r\n                {{ 'DATE_INTERVAL' | translate}}\r\n            </li>\r\n        </ul>\r\n    </header>\r\n    <div class=\"m-calendar-wrapper__inner\">\r\n        <div *ngIf=\"tab === 1\" class=\"m-calendar-wrapper__presets\">\r\n            <div class=\"m-calendar-wrapper__row\">\r\n                <div class=\"m-calendar-wrapper__col\">\r\n                    <ul>\r\n                        <li *ngFor=\"let preset of presets | slice :  0 : chunkSize\"\r\n                            [ngStyle]=\"preset.hovered ? {'color':  defaults.color } : {}\"\r\n                            (click)=\"setPeriod(preset.code);\"\r\n                            (mouseover)=\"preset.hovered=true\"\r\n                            (mouseleave)=\"preset.hovered=false\">\r\n                            {{ preset.code | translate }}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"m-calendar-wrapper__col\">\r\n                    <ul>\r\n                        <li *ngFor=\"let preset of presets | slice : chunkSize: presets.length\"\r\n                            [ngStyle]=\"preset.hovered ? {'color':  defaults.color } : {}\"\r\n                            (click)=\"setPeriod(preset.code);\"\r\n                            (mouseover)=\"preset.hovered=true\"\r\n                            (mouseleave)=\"preset.hovered=false\">\r\n                            {{ preset.code | translate}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"m-calendar-wrapper__row\" *ngIf=\"tab === 2\">\r\n            <div class=\"m-calendar-wrapper__col\">\r\n                <sgv-calendar side=\"left\" [period]=\"period\" [events]=\"events\" [hoveredDate]=\"hoveredDate\"></sgv-calendar>\r\n            </div>\r\n            <div class=\"m-calendar-wrapper__col\">\r\n                <sgv-calendar side=\"right\" [period]=\"period\" [events]=\"events\" [hoveredDate]=\"hoveredDate\"></sgv-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                styles: [".m-calendar-wrapper{position:absolute;z-index:1000;top:40px;left:0;width:530px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #eee;border-radius:2px;background:#fff;box-shadow:0 15px 79.38px 1.62px rgba(0,0,0,.16)}.m-calendar-wrapper--single{width:285px}.m-calendar-wrapper__row{margin:0 -10px}.m-calendar-wrapper__row:after{display:table;clear:both;content:''}.m-calendar-wrapper__col{float:left;box-sizing:border-box;width:50%;padding:0 10px}.m-calendar-wrapper__inner{padding:20px 20px 40px}.m-calendar-wrapper__header{height:70px;line-height:67px;box-shadow:0 2px 2.82px .18px rgba(0,0,0,.24)}.m-calendar-wrapper__header ul{display:table;width:100%;margin:0;padding:0}.m-calendar-wrapper__header li{display:table-cell;width:50%;font-size:14px;cursor:pointer;text-align:center;text-transform:uppercase;color:#fff}.m-calendar-wrapper__header li.is-active{border-bottom:3px solid #fff}.m-calendar-wrapper__presets{padding:20px 0;font-size:14px;font-weight:300;line-height:2}.m-calendar-wrapper__presets ul{margin:0;padding:0}.m-calendar-wrapper__presets li{padding:0 20px;list-style:none;cursor:pointer}"]
            }] }
];
SgvRangepickerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [SgvRangepickerDefaultsService,] }] }
];
SgvRangepickerComponent.propDecorators = {
    datesChanged: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci9yYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUM1QixNQUFNLEdBQUcsT0FBTztBQUV0QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPcEUsTUFBTTs7OztJQXdDTCxZQUMrQyxRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQXJDaEQsWUFBTyxHQUE2QixPQUFPLENBQUM7UUFDNUMsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLGNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRy9DLGlCQUFZLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkU7OztXQUdHO1FBQ0ksV0FBTSxHQUFHO1lBQ2YsTUFBTSxFQUFFLEVBQUU7Ozs7OztZQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUTtnQkFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUN4QjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxDQUFDOzs7Ozs7WUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUk7Z0JBRWYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU87aUJBQ1A7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQVUsUUFBUTtvQkFDNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixDQUFDLEVBQUMsQ0FBQztZQUNKLENBQUM7U0FDRCxDQUFDO1FBRUssWUFBTyxHQUFHLEtBQUssQ0FBQztJQUlwQixDQUFDOzs7O0lBRUcsSUFBSTtRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFTSxJQUFJO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFLTSxJQUFJOztZQUVOLE9BQU8sR0FBRyxDQUFDO1FBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYTs7OztRQUFFLENBQUMsSUFBb0IsRUFBRSxFQUFFO1lBQ3RELElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtnQkFDbEIsa0JBQWtCO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQzthQUN2QjtZQUVELElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtnQkFDbEIsbUJBQW1CO2dCQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ25DO3FCQUFNO29CQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQzlDO2FBQ0Q7WUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsT0FBTyxFQUFFLENBQUM7WUFFVixJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDWjtRQUVGLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUzs7OztRQUFFLENBQUMsSUFBb0IsRUFBRSxFQUFFO1lBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBTU0sT0FBTyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBS00sU0FBUyxDQUFDLElBQVk7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7OztJQU9PLG9CQUFvQixDQUFDLElBQVksRUFBRSxHQUFvQjtRQUM5RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzs7WUE3SEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHcrRUFBMkM7O2FBRTNDOzs7NENBMENFLE1BQU0sU0FBQyw2QkFBNkI7OzsyQkFqQ3JDLE1BQU07c0JBMEZOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFoR2pDLHlDQUE4Qjs7SUFDOUIsOENBQW1DOztJQUNuQywwQ0FBbUQ7O0lBQ25ELHNDQUFlOztJQUNmLDRDQUFzRDs7SUFFdEQsK0NBQ3VFOzs7Ozs7SUFNdkUseUNBcUJFOztJQUVGLDBDQUF1Qjs7SUFHdEIsMkNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuaW1wb3J0IHsgQ2FsZW5kYXJEYXksIENhbGVuZGFyUGVyaW9kLCBDYWxlbmRhckV2ZW50cywgUmFuZ2VwaWNrZXJQcmVzZXQgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwcmVzZXRzIH0gZnJvbSAnLi4vcHJlc2V0cyc7XHJcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi4vZGVmYXVsdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3Nndi1yYW5nZXBpY2tlcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3JhbmdlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9yYW5nZXBpY2tlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZ3ZSYW5nZXBpY2tlckNvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBwZXJpb2Q6IENhbGVuZGFyUGVyaW9kO1xyXG5cdHB1YmxpYyBob3ZlcmVkRGF0ZTogbW9tZW50Xy5Nb21lbnQ7XHJcblx0cHVibGljIHByZXNldHM6IEFycmF5PFJhbmdlcGlja2VyUHJlc2V0PiA9IHByZXNldHM7XHJcblx0cHVibGljIHRhYiA9IDE7XHJcblx0cHVibGljIGNodW5rU2l6ZSA9IE1hdGguY2VpbCh0aGlzLnByZXNldHMubGVuZ3RoIC8gMik7XHJcblxyXG5cdEBPdXRwdXQoKVxyXG5cdHB1YmxpYyBkYXRlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDYWxlbmRhclBlcmlvZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEV2ZW50IGJ1c1xyXG5cdCAqIFRPRE8gLSByZWYgdG8gb2JzZXJ2YWJsZXNcclxuXHQgKi9cclxuXHRwdWJsaWMgZXZlbnRzID0ge1xyXG5cdFx0dG9waWNzOiB7fSxcclxuXHRcdG9uKHRvcGljLCBsaXN0ZW5lcikge1xyXG5cclxuXHRcdFx0aWYgKCF0aGlzLnRvcGljc1t0b3BpY10pIHtcclxuXHRcdFx0XHR0aGlzLnRvcGljc1t0b3BpY10gPSBbXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy50b3BpY3NbdG9waWNdLnB1c2gobGlzdGVuZXIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZW5kKHRvcGljLCBpbmZvKSB7XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMudG9waWNzW3RvcGljXSkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy50b3BpY3NbdG9waWNdLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcblx0XHRcdFx0bGlzdGVuZXIoaW5mbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyB2aXNpYmxlID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChTZ3ZSYW5nZXBpY2tlckRlZmF1bHRzU2VydmljZSkgcHVibGljIGRlZmF1bHRzXHJcblx0KSB7fVxyXG5cclxuXHRwdWJsaWMgc2hvdygpIHtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGlkZSgpIHtcclxuXHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wcmVzZXRzLmZvckVhY2goKHApID0+IHAuaG92ZXJlZCA9IGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgcmFuZ2VwaWNrZXJcclxuXHQgKi9cclxuXHRwdWJsaWMgaW5pdCgpOiB2b2lkIHtcclxuXHJcblx0XHRsZXQgY291bnRlciA9IDA7XHJcblxyXG5cdFx0dGhpcy5ldmVudHMub24oJ3VwZGF0ZU1vZGVsJywgKGRhdGU6IG1vbWVudF8uTW9tZW50KSA9PiB7XHJcblx0XHRcdGlmIChjb3VudGVyID09PSAwKSB7XHJcblx0XHRcdFx0Ly8gcGljayBmaXJzdCB0aW1lXHJcblx0XHRcdFx0dGhpcy5wZXJpb2Quc3RhcnQgPSBkYXRlLnZhbHVlT2YoKTtcclxuXHRcdFx0XHR0aGlzLnBlcmlvZC5lbmQgPSBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY291bnRlciA9PT0gMSkge1xyXG5cdFx0XHRcdC8vIHBpY2sgc2Vjb25kIHRpbWVcclxuXHRcdFx0XHRpZiAoZGF0ZS52YWx1ZU9mKCkgPCB0aGlzLnBlcmlvZC5zdGFydC52YWx1ZU9mKCkpIHtcclxuXHRcdFx0XHRcdHRoaXMucGVyaW9kLmVuZCA9IG1vbWVudCh0aGlzLnBlcmlvZC5zdGFydCkuZW5kT2YoJ2RheScpLnZhbHVlT2YoKTtcclxuXHRcdFx0XHRcdHRoaXMucGVyaW9kLnN0YXJ0ID0gZGF0ZS52YWx1ZU9mKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMucGVyaW9kLmVuZCA9IGRhdGUuZW5kT2YoJ2RheScpLnZhbHVlT2YoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLnBlcmlvZC5zdGFydCAmJiB0aGlzLnBlcmlvZC5lbmQpIHtcclxuXHRcdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdFx0XHR0aGlzLmRhdGVzQ2hhbmdlZC5lbWl0KHRoaXMucGVyaW9kKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y291bnRlcisrO1xyXG5cclxuXHRcdFx0aWYgKGNvdW50ZXIgPT09IDIpIHtcclxuXHRcdFx0XHRjb3VudGVyID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZXZlbnRzLm9uKCdob3ZlcmVkJywgKGRhdGU6IG1vbWVudF8uTW9tZW50KSA9PiB7XHJcblx0XHRcdHRoaXMuaG92ZXJlZERhdGUgPSBkYXRlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQcmV2ZW50IGJ1YmJsaW5nIHRvIGlucHV0XHJcblx0ICovXHJcblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG5cdHB1YmxpYyBvbkNsaWNrKGUpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgcGVyaW9kIGZyb20gcHJlc2V0c1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRQZXJpb2QoY29kZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHR0aGlzLnBlcmlvZC5zdGFydCA9IHRoaXMuZ2V0UHJlc2V0VmFsdWVCeUNvZGUoY29kZSwgJ3N0YXJ0Jyk7XHJcblx0XHR0aGlzLnBlcmlvZC5lbmQgPSB0aGlzLmdldFByZXNldFZhbHVlQnlDb2RlKGNvZGUsICdlbmQnKTtcclxuXHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0dGhpcy5kYXRlc0NoYW5nZWQuZW1pdCh0aGlzLnBlcmlvZCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgZGF0ZSBpbiBtcyBmcm9tIHByZXNldFxyXG5cdCAqIEBwYXJhbSBjb2RlIC0gcHJlc2V0IGNvZGVcclxuXHQgKiBAcGFyYW0ga2V5IC0gZW5kIG9yIHN0YXJ0XHJcblx0ICovXHJcblx0cHJpdmF0ZSBnZXRQcmVzZXRWYWx1ZUJ5Q29kZShjb2RlOiBzdHJpbmcsIGtleTogJ3N0YXJ0JyB8ICdlbmQnKTogbnVtYmVyICB7XHJcblx0XHRyZXR1cm4gdGhpcy5wcmVzZXRzLmZpbmQocCA9PiBwLmNvZGUgPT09IGNvZGUpW2tleV0udmFsdWVPZigpO1xyXG5cdH1cclxufVxyXG4iXX0=