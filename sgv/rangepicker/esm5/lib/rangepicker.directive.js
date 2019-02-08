/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Rangepicker directive for input elements
 */
import { Directive, Input, ElementRef, HostListener, Inject } from '@angular/core';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
import { SgvRangepickerDefaultsService } from './defaults.service';
var SgvRangepickerDirective = /** @class */ (function () {
    function SgvRangepickerDirective(elemRef, defaults) {
        this.elemRef = elemRef;
        this.defaults = defaults;
        this.windowClick = this.windowClick.bind(this);
    }
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
        this.sub = this.sgvRangepicker.datesChanged.subscribe((/**
         * @param {?} period
         * @return {?}
         */
        function (period) {
            /** @type {?} */
            var start = Number(period.start);
            /** @type {?} */
            var end = Number(period.end);
            _this.elemRef.nativeElement.value = moment(start).format(_this.defaults.format) + ' - ' + moment(end).format(_this.defaults.format);
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
        { type: Directive, args: [{
                    selector: '[sgvRangepicker]'
                },] }
    ];
    SgvRangepickerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [SgvRangepickerDefaultsService,] }] }
    ]; };
    SgvRangepickerDirective.propDecorators = {
        sgvRangepicker: [{ type: Input }],
        onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return SgvRangepickerDirective;
}());
export { SgvRangepickerDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SgvRangepickerDirective.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    SgvRangepickerDirective.prototype.sgvRangepicker;
    /**
     * @type {?}
     * @private
     */
    SgvRangepickerDirective.prototype.elemRef;
    /**
     * @type {?}
     * @private
     */
    SgvRangepickerDirective.prototype.defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBVSxZQUFZLEVBQTRCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7SUFHNUIsTUFBTSxHQUFHLE9BQU87QUFDdEIsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkU7SUFVQyxpQ0FDUyxPQUFtQixFQUNvQixRQUFRO1FBRC9DLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDb0IsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUV2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxpREFBZTs7O0lBQWY7UUFBQSxpQkFXQztRQVZBLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQXNCOztnQkFDdEUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOztnQkFDNUIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMs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Y3RpdmUgZm9yIGlucHV0IGVsZW1lbnRzXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZ3ZSYW5nZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2VwaWNrZXIvcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IENhbGVuZGFyUGVyaW9kIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5pbXBvcnQgeyBTZ3ZSYW5nZXBpY2tlckRlZmF1bHRzU2VydmljZSB9IGZyb20gJy4vZGVmYXVsdHMuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tzZ3ZSYW5nZXBpY2tlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNndlJhbmdlcGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG5cdEBJbnB1dCgpXG5cdHByaXZhdGUgc2d2UmFuZ2VwaWNrZXI6IFNndlJhbmdlcGlja2VyQ29tcG9uZW50O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZixcblx0XHRASW5qZWN0KFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlKSBwcml2YXRlIGRlZmF1bHRzXG5cdCkge1xuXHRcdHRoaXMud2luZG93Q2xpY2sgPSB0aGlzLndpbmRvd0NsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5wcm9jZXNzQ2hhbmdlKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnZhbHVlKTtcblx0XHR0aGlzLnNndlJhbmdlcGlja2VyLmluaXQoKTtcblxuXHRcdHRoaXMuc3ViID0gdGhpcy5zZ3ZSYW5nZXBpY2tlci5kYXRlc0NoYW5nZWQuc3Vic2NyaWJlKChwZXJpb2Q6IENhbGVuZGFyUGVyaW9kKSA9PiB7XG5cdFx0XHRjb25zdCBzdGFydCA9IE51bWJlcihwZXJpb2Quc3RhcnQpO1xuXHRcdFx0Y29uc3QgZW5kID0gTnVtYmVyKHBlcmlvZC5lbmQpO1xuXHRcdFx0dGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCh0aGlzLmRlZmF1bHRzLmZvcm1hdCkgKyAnIC0gJyArIG1vbWVudChlbmQpLmZvcm1hdCh0aGlzLmRlZmF1bHRzLmZvcm1hdCk7XG5cdFx0fSk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLndpbmRvd0NsaWNrKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy53aW5kb3dDbGljayk7XG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBwaWNrZXJcblx0ICovXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uY2xpY2soZSk6IHZvaWQge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5zaG93KCk7XG5cdH1cblxuXHQvKipcblx0ICogUGljayBkYXRlcyBvbiBpbnB1dCBjaGFuZ2VzXG5cdCAqIEBwYXJhbSBldmVudCAtIGlucHV0IGV2ZW50XG5cdCAqL1xuXHRASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG5cdHB1YmxpYyBvbklucHV0KGV2ZW50KTogdm9pZCB7XG5cdFx0Y29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5wcm9jZXNzQ2hhbmdlKHZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9jZXNzIGNoYW5nZXMgb2YgaW5wdXQgZWxlbWVudCwgc2V0IHJhbmdlcGlja2VyIG1vZGVsXG5cdCAqIEBwYXJhbSB2YWx1ZSAtIGlucHV0IHN0cmluZ1xuXHQgKi9cblx0cHJpdmF0ZSBwcm9jZXNzQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRsZXQgdmFsaWQ6IGJvb2xlYW47XG5cblx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHR2YWxpZCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGRhdGVzID0gdmFsdWUuc3BsaXQoJyAtICcpO1xuXG5cdFx0XHRjb25zdCBzdGFydCA9IG1vbWVudChkYXRlc1swXSwgdGhpcy5kZWZhdWx0cy5mb3JtYXQpO1xuXHRcdFx0Y29uc3QgZW5kID0gIG1vbWVudChkYXRlc1sxXSwgdGhpcy5kZWZhdWx0cy5mb3JtYXQpO1xuXG5cdFx0XHR2YWxpZCA9IHN0YXJ0LmlzVmFsaWQoKSAmJiBlbmQuaXNWYWxpZCgpICYmIHN0YXJ0LnZhbHVlT2YoKSA8PSBlbmQudmFsdWVPZigpO1xuXG5cdFx0XHRpZiAodmFsaWQpIHtcblx0XHRcdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5wZXJpb2QgPSB7XG5cdFx0XHRcdFx0c3RhcnQ6IHN0YXJ0LnZhbHVlT2YoKSxcblx0XHRcdFx0XHRlbmQ6IGVuZC52YWx1ZU9mKClcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2d2UmFuZ2VwaWNrZXIucGVyaW9kID0ge307XG5cdFx0XHRcdHRoaXMuc2d2UmFuZ2VwaWNrZXIuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgd2luZG93Q2xpY2soKSB7XG5cdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5oaWRlKCk7XG5cdH1cblxufVxuIl19