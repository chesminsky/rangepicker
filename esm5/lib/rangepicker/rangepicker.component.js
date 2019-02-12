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
import { SgvRangepickerDefaultsService } from '../defaults';
var SgvRangepickerComponent = /** @class */ (function () {
    function SgvRangepickerComponent(defaults) {
        this.defaults = defaults;
        this.presets = presets;
        this.tab = 2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci9yYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUM1QixNQUFNLEdBQUcsT0FBTztBQUV0QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVEO0lBNkNDLGlDQUMrQyxRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQXJDaEQsWUFBTyxHQUE2QixPQUFPLENBQUM7UUFDNUMsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLGNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRy9DLGlCQUFZLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkU7OztXQUdHO1FBQ0ksV0FBTSxHQUFHO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixFQUFFOzs7OztzQkFBQyxLQUFLLEVBQUUsUUFBUTtnQkFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUN4QjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FB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QUssR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNLLHNEQUFvQjs7Ozs7OztJQUE1QixVQUE2QixJQUFZLEVBQUUsR0FBb0I7UUFDOUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFmLENBQWUsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9ELENBQUM7O2dCQTdIRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsdytFQUEyQzs7aUJBRTNDOzs7Z0RBMENFLE1BQU0sU0FBQyw2QkFBNkI7OzsrQkFqQ3JDLE1BQU07MEJBMEZOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBdUJsQyw4QkFBQztDQUFBLEFBOUhELElBOEhDO1NBekhZLHVCQUF1Qjs7O0lBRW5DLHlDQUE4Qjs7SUFDOUIsOENBQW1DOztJQUNuQywwQ0FBbUQ7O0lBQ25ELHNDQUFlOztJQUNmLDRDQUFzRDs7SUFFdEQsK0NBQ3VFOzs7Ozs7SUFNdkUseUNBcUJFOztJQUVGLDBDQUF1Qjs7SUFHdEIsMkNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuaW1wb3J0IHsgQ2FsZW5kYXJEYXksIENhbGVuZGFyUGVyaW9kLCBDYWxlbmRhckV2ZW50cywgUmFuZ2VwaWNrZXJQcmVzZXQgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwcmVzZXRzIH0gZnJvbSAnLi4vcHJlc2V0cyc7XHJcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi4vZGVmYXVsdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzZ3YtcmFuZ2VwaWNrZXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9yYW5nZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vcmFuZ2VwaWNrZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2d2UmFuZ2VwaWNrZXJDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgcGVyaW9kOiBDYWxlbmRhclBlcmlvZDtcclxuXHRwdWJsaWMgaG92ZXJlZERhdGU6IG1vbWVudF8uTW9tZW50O1xyXG5cdHB1YmxpYyBwcmVzZXRzOiBBcnJheTxSYW5nZXBpY2tlclByZXNldD4gPSBwcmVzZXRzO1xyXG5cdHB1YmxpYyB0YWIgPSAyO1xyXG5cdHB1YmxpYyBjaHVua1NpemUgPSBNYXRoLmNlaWwodGhpcy5wcmVzZXRzLmxlbmd0aCAvIDIpO1xyXG5cclxuXHRAT3V0cHV0KClcclxuXHRwdWJsaWMgZGF0ZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJQZXJpb2Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHQvKipcclxuXHQgKiBFdmVudCBidXNcclxuXHQgKiBUT0RPIC0gcmVmIHRvIG9ic2VydmFibGVzXHJcblx0ICovXHJcblx0cHVibGljIGV2ZW50cyA9IHtcclxuXHRcdHRvcGljczoge30sXHJcblx0XHRvbih0b3BpYywgbGlzdGVuZXIpIHtcclxuXHJcblx0XHRcdGlmICghdGhpcy50b3BpY3NbdG9waWNdKSB7XHJcblx0XHRcdFx0dGhpcy50b3BpY3NbdG9waWNdID0gW107XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMudG9waWNzW3RvcGljXS5wdXNoKGxpc3RlbmVyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2VuZCh0b3BpYywgaW5mbykge1xyXG5cclxuXHRcdFx0aWYgKCF0aGlzLnRvcGljc1t0b3BpY10pIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMudG9waWNzW3RvcGljXS5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG5cdFx0XHRcdGxpc3RlbmVyKGluZm8pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UpIHB1YmxpYyBkZWZhdWx0c1xyXG5cdCkge31cclxuXHJcblx0cHVibGljIHNob3coKSB7XHJcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGhpZGUoKSB7XHJcblx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdHRoaXMucHJlc2V0cy5mb3JFYWNoKChwKSA9PiBwLmhvdmVyZWQgPSBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplIHJhbmdlcGlja2VyXHJcblx0ICovXHJcblx0cHVibGljIGluaXQoKTogdm9pZCB7XHJcblxyXG5cdFx0bGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuXHRcdHRoaXMuZXZlbnRzLm9uKCd1cGRhdGVNb2RlbCcsIChkYXRlOiBtb21lbnRfLk1vbWVudCkgPT4ge1xyXG5cdFx0XHRpZiAoY291bnRlciA9PT0gMCkge1xyXG5cdFx0XHRcdC8vIHBpY2sgZmlyc3QgdGltZVxyXG5cdFx0XHRcdHRoaXMucGVyaW9kLnN0YXJ0ID0gZGF0ZS52YWx1ZU9mKCk7XHJcblx0XHRcdFx0dGhpcy5wZXJpb2QuZW5kID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNvdW50ZXIgPT09IDEpIHtcclxuXHRcdFx0XHQvLyBwaWNrIHNlY29uZCB0aW1lXHJcblx0XHRcdFx0aWYgKGRhdGUudmFsdWVPZigpIDwgdGhpcy5wZXJpb2Quc3RhcnQudmFsdWVPZigpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBlcmlvZC5lbmQgPSBtb21lbnQodGhpcy5wZXJpb2Quc3RhcnQpLmVuZE9mKCdkYXknKS52YWx1ZU9mKCk7XHJcblx0XHRcdFx0XHR0aGlzLnBlcmlvZC5zdGFydCA9IGRhdGUudmFsdWVPZigpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnBlcmlvZC5lbmQgPSBkYXRlLmVuZE9mKCdkYXknKS52YWx1ZU9mKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5wZXJpb2Quc3RhcnQgJiYgdGhpcy5wZXJpb2QuZW5kKSB7XHJcblx0XHRcdFx0dGhpcy5oaWRlKCk7XHJcblx0XHRcdFx0dGhpcy5kYXRlc0NoYW5nZWQuZW1pdCh0aGlzLnBlcmlvZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvdW50ZXIrKztcclxuXHJcblx0XHRcdGlmIChjb3VudGVyID09PSAyKSB7XHJcblx0XHRcdFx0Y291bnRlciA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmV2ZW50cy5vbignaG92ZXJlZCcsIChkYXRlOiBtb21lbnRfLk1vbWVudCkgPT4ge1xyXG5cdFx0XHR0aGlzLmhvdmVyZWREYXRlID0gZGF0ZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUHJldmVudCBidWJibGluZyB0byBpbnB1dFxyXG5cdCAqL1xyXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuXHRwdWJsaWMgb25DbGljayhlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IHBlcmlvZCBmcm9tIHByZXNldHNcclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0UGVyaW9kKGNvZGU6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0dGhpcy5wZXJpb2Quc3RhcnQgPSB0aGlzLmdldFByZXNldFZhbHVlQnlDb2RlKGNvZGUsICdzdGFydCcpO1xyXG5cdFx0dGhpcy5wZXJpb2QuZW5kID0gdGhpcy5nZXRQcmVzZXRWYWx1ZUJ5Q29kZShjb2RlLCAnZW5kJyk7XHJcblx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdHRoaXMuZGF0ZXNDaGFuZ2VkLmVtaXQodGhpcy5wZXJpb2QpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGRhdGUgaW4gbXMgZnJvbSBwcmVzZXRcclxuXHQgKiBAcGFyYW0gY29kZSAtIHByZXNldCBjb2RlXHJcblx0ICogQHBhcmFtIGtleSAtIGVuZCBvciBzdGFydFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZ2V0UHJlc2V0VmFsdWVCeUNvZGUoY29kZTogc3RyaW5nLCBrZXk6ICdzdGFydCcgfCAnZW5kJyk6IG51bWJlciAge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJlc2V0cy5maW5kKHAgPT4gcC5jb2RlID09PSBjb2RlKVtrZXldLnZhbHVlT2YoKTtcclxuXHR9XHJcbn1cclxuIl19