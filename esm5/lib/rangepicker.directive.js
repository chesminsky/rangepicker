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
import { SgvRangepickerDefaultsService } from './defaults';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
        this.onChange = (/**
         * @return {?}
         */
        function () {
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
        this.sub = this.sgvRangepicker.datesChanged.subscribe((/**
         * @param {?} period
         * @return {?}
         */
        function (period) {
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
        { type: Directive, args: [{
                    selector: '[sgvRangepicker]',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SgvRangepickerDirective,
                            multi: true,
                        }],
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
    /** @type {?} */
    SgvRangepickerDirective.prototype.onChange;
    /** @type {?} */
    SgvRangepickerDirective.prototype.value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBVSxZQUFZLEVBQTRCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7SUFHNUIsTUFBTSxHQUFHLE9BQU87QUFDdEIsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RTtJQWlCQyxpQ0FDUyxPQUFtQixFQUNvQixRQUFRO1FBRC9DLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDb0IsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUV2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsNENBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDcEIsSUFBSSxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3pDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxrREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUF4QixpQkFJQztRQUhBLElBQUksQ0FBQyxRQUFROzs7UUFBRztZQUNmLEVBQUUsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFBLENBQUM7SUFD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QUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDM0I7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRU8sNkNBQVc7Ozs7SUFBbkI7UUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dCQWpIRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsU0FBUyxFQUFFLENBQUM7NEJBQ1gsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLHVCQUF1Qjs0QkFDcEMsS0FBSyxFQUFFLElBQUk7eUJBQ1gsQ0FBQztpQkFDRjs7O2dCQWhCMEIsVUFBVTtnREE0QmxDLE1BQU0sU0FBQyw2QkFBNkI7OztpQ0FMckMsS0FBSzswQkFtREwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFVaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF3Q2xDLDhCQUFDO0NBQUEsQUFuSEQsSUFtSEM7U0EzR1ksdUJBQXVCOzs7Ozs7SUFFbkMsc0NBQTBCOztJQUMxQiwyQ0FBYzs7SUFDZCx3Q0FBYzs7Ozs7SUFFZCxpREFDZ0Q7Ozs7O0lBRy9DLDBDQUEyQjs7Ozs7SUFDM0IsMkNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFJhbmdlcGlja2VyIGRpcmVjdGl2ZSBmb3IgaW5wdXQgZWxlbWVudHNcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2d2UmFuZ2VwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlcGlja2VyL3JhbmdlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQ2FsZW5kYXJQZXJpb2QgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9kZWZhdWx0cyc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW3NndlJhbmdlcGlja2VyXScsXHJcblx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcblx0XHR1c2VFeGlzdGluZzogU2d2UmFuZ2VwaWNrZXJEaXJlY3RpdmUsXHJcblx0XHRtdWx0aTogdHJ1ZSxcclxuXHR9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNndlJhbmdlcGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG5cdHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcblx0b25DaGFuZ2U6IGFueTtcclxuXHR2YWx1ZTogc3RyaW5nO1xyXG5cclxuXHRASW5wdXQoKVxyXG5cdHByaXZhdGUgc2d2UmFuZ2VwaWNrZXI6IFNndlJhbmdlcGlja2VyQ29tcG9uZW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZixcclxuXHRcdEBJbmplY3QoU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UpIHByaXZhdGUgZGVmYXVsdHNcclxuXHQpIHtcclxuXHRcdHRoaXMud2luZG93Q2xpY2sgPSB0aGlzLndpbmRvd0NsaWNrLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuXHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMub25DaGFuZ2UgPSAoKSA9PiB7XHJcblx0XHRcdGZuKHRoaXMudmFsdWUpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKF9mbjogYW55KTogdm9pZCB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHR0aGlzLnByb2Nlc3NDaGFuZ2UodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xyXG5cdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5pbml0KCk7XHJcblxyXG5cdFx0dGhpcy5zdWIgPSB0aGlzLnNndlJhbmdlcGlja2VyLmRhdGVzQ2hhbmdlZC5zdWJzY3JpYmUoKHBlcmlvZDogQ2FsZW5kYXJQZXJpb2QpID0+IHtcclxuXHRcdFx0Y29uc3Qgc3RhcnQgPSBOdW1iZXIocGVyaW9kLnN0YXJ0KTtcclxuXHRcdFx0Y29uc3QgZW5kID0gTnVtYmVyKHBlcmlvZC5lbmQpO1xyXG5cdFx0XHR0aGlzLndyaXRlVmFsdWUoXHJcblx0XHRcdFx0bW9tZW50KHN0YXJ0KS5mb3JtYXQodGhpcy5kZWZhdWx0cy5mb3JtYXQpICsgJyAtICcgKyBtb21lbnQoZW5kKS5mb3JtYXQodGhpcy5kZWZhdWx0cy5mb3JtYXQpXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMub25DaGFuZ2UoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMud2luZG93Q2xpY2spO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy53aW5kb3dDbGljayk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTaG93IHBpY2tlclxyXG5cdCAqL1xyXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuXHRwdWJsaWMgb25jbGljayhlKTogdm9pZCB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5zaG93KCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQaWNrIGRhdGVzIG9uIGlucHV0IGNoYW5nZXNcclxuXHQgKiBAcGFyYW0gZXZlbnQgLSBpbnB1dCBldmVudFxyXG5cdCAqL1xyXG5cdEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcclxuXHRwdWJsaWMgb25JbnB1dChldmVudCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblx0XHR0aGlzLnByb2Nlc3NDaGFuZ2UodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUHJvY2VzcyBjaGFuZ2VzIG9mIGlucHV0IGVsZW1lbnQsIHNldCByYW5nZXBpY2tlciBtb2RlbFxyXG5cdCAqIEBwYXJhbSB2YWx1ZSAtIGlucHV0IHN0cmluZ1xyXG5cdCAqL1xyXG5cdHByaXZhdGUgcHJvY2Vzc0NoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRsZXQgdmFsaWQ6IGJvb2xlYW47XHJcblxyXG5cdFx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0XHR2YWxpZCA9IHRydWU7XHJcblx0XHRcdHRoaXMuc2d2UmFuZ2VwaWNrZXIucGVyaW9kID0ge307XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBkYXRlcyA9IHZhbHVlLnNwbGl0KCcgLSAnKTtcclxuXHJcblx0XHRcdGNvbnN0IHN0YXJ0ID0gbW9tZW50KGRhdGVzWzBdLCB0aGlzLmRlZmF1bHRzLmZvcm1hdCk7XHJcblx0XHRcdGNvbnN0IGVuZCA9ICBtb21lbnQoZGF0ZXNbMV0sIHRoaXMuZGVmYXVsdHMuZm9ybWF0KTtcclxuXHJcblx0XHRcdHZhbGlkID0gc3RhcnQuaXNWYWxpZCgpICYmIGVuZC5pc1ZhbGlkKCkgJiYgc3RhcnQudmFsdWVPZigpIDw9IGVuZC52YWx1ZU9mKCk7XHJcblxyXG5cdFx0XHRpZiAodmFsaWQpIHtcclxuXHRcdFx0XHR0aGlzLnNndlJhbmdlcGlja2VyLnBlcmlvZCA9IHtcclxuXHRcdFx0XHRcdHN0YXJ0OiBzdGFydC52YWx1ZU9mKCksXHJcblx0XHRcdFx0XHRlbmQ6IGVuZC52YWx1ZU9mKClcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc2d2UmFuZ2VwaWNrZXIucGVyaW9kID0ge307XHJcblx0XHRcdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgd2luZG93Q2xpY2soKSB7XHJcblx0XHR0aGlzLnNndlJhbmdlcGlja2VyLmhpZGUoKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==