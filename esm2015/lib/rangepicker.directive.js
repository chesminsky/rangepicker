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
const moment = moment_;
import { SgvRangepickerDefaultsService } from './defaults';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class SgvRangepickerDirective {
    /**
     * @param {?} elemRef
     * @param {?} defaults
     */
    constructor(elemRef, defaults) {
        this.elemRef = elemRef;
        this.defaults = defaults;
        this.windowClick = this.windowClick.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.value = value;
            this.elemRef.nativeElement.value = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = (/**
         * @return {?}
         */
        () => {
            fn(this.value);
        });
    }
    /**
     * @param {?} _fn
     * @return {?}
     */
    registerOnTouched(_fn) {
        return;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.processChange(this.elemRef.nativeElement.value);
        this.sgvRangepicker.init();
        this.sub = this.sgvRangepicker.datesChanged.subscribe((/**
         * @param {?} period
         * @return {?}
         */
        (period) => {
            /** @type {?} */
            const start = Number(period.start);
            /** @type {?} */
            const end = Number(period.end);
            this.writeValue(moment(start).format(this.defaults.format) + ' - ' + moment(end).format(this.defaults.format));
            this.onChange();
        }));
        window.addEventListener('click', this.windowClick);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        window.removeEventListener('click', this.windowClick);
    }
    /**
     * Show picker
     * @param {?} e
     * @return {?}
     */
    onclick(e) {
        e.stopPropagation();
        this.sgvRangepicker.show();
    }
    /**
     * Pick dates on input changes
     * @param {?} event - input event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const value = event.target.value;
        this.processChange(value);
    }
    /**
     * Process changes of input element, set rangepicker model
     * @private
     * @param {?} value - input string
     * @return {?}
     */
    processChange(value) {
        /** @type {?} */
        let valid;
        if (!value) {
            valid = true;
            this.sgvRangepicker.period = {};
        }
        else {
            /** @type {?} */
            const dates = value.split(' - ');
            /** @type {?} */
            const start = moment(dates[0], this.defaults.format);
            /** @type {?} */
            const end = moment(dates[1], this.defaults.format);
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
    }
    /**
     * @private
     * @return {?}
     */
    windowClick() {
        this.sgvRangepicker.hide();
    }
}
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
SgvRangepickerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [SgvRangepickerDefaultsService,] }] }
];
SgvRangepickerDirective.propDecorators = {
    sgvRangepicker: [{ type: Input }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBVSxZQUFZLEVBQTRCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7TUFHNUIsTUFBTSxHQUFHLE9BQU87QUFDdEIsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQVV6RSxNQUFNOzs7OztJQVNMLFlBQ1MsT0FBbUIsRUFDb0IsUUFBUTtRQUQvQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ29CLGFBQVEsR0FBUixRQUFRLENBQUE7UUFFdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ3BCLElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN6QztJQUNGLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsUUFBUTs7O1FBQUcsR0FBRyxFQUFFO1lBQ3BCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFBLENBQUM7SUFDSCxDQUFDOzs7OztJ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QztJQUM1QixDQUFDOzs7WUFqSEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFNBQVMsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3BDLEtBQUssRUFBRSxJQUFJO3FCQUNYLENBQUM7YUFDRjs7O1lBaEIwQixVQUFVOzRDQTRCbEMsTUFBTSxTQUFDLDZCQUE2Qjs7OzZCQUxyQyxLQUFLO3NCQW1ETCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQVVoQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBakVqQyxzQ0FBMEI7O0lBQzFCLDJDQUFjOztJQUNkLHdDQUFjOzs7OztJQUVkLGlEQUNnRDs7Ozs7SUFHL0MsMENBQTJCOzs7OztJQUMzQiwyQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUmFuZ2VwaWNrZXIgZGlyZWN0aXZlIGZvciBpbnB1dCBlbGVtZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZ3ZSYW5nZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2VwaWNrZXIvcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBDYWxlbmRhclBlcmlvZCB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuaW1wb3J0IHsgU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuL2RlZmF1bHRzJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbc2d2UmFuZ2VwaWNrZXJdJyxcclxuXHRwcm92aWRlcnM6IFt7XHJcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuXHRcdHVzZUV4aXN0aW5nOiBTZ3ZSYW5nZXBpY2tlckRpcmVjdGl2ZSxcclxuXHRcdG11bHRpOiB0cnVlLFxyXG5cdH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2d2UmFuZ2VwaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcblx0cHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuXHRvbkNoYW5nZTogYW55O1xyXG5cdHZhbHVlOiBzdHJpbmc7XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0cHJpdmF0ZSBzZ3ZSYW5nZXBpY2tlcjogU2d2UmFuZ2VwaWNrZXJDb21wb25lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmLFxyXG5cdFx0QEluamVjdChTZ3ZSYW5nZXBpY2tlckRlZmF1bHRzU2VydmljZSkgcHJpdmF0ZSBkZWZhdWx0c1xyXG5cdCkge1xyXG5cdFx0dGhpcy53aW5kb3dDbGljayA9IHRoaXMud2luZG93Q2xpY2suYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5vbkNoYW5nZSA9ICgpID0+IHtcclxuXHRcdFx0Zm4odGhpcy52YWx1ZSk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cmVnaXN0ZXJPblRvdWNoZWQoX2ZuOiBhbnkpOiB2b2lkIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdHRoaXMucHJvY2Vzc0NoYW5nZSh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC52YWx1ZSk7XHJcblx0XHR0aGlzLnNndlJhbmdlcGlja2VyLmluaXQoKTtcclxuXHJcblx0XHR0aGlzLnN1YiA9IHRoaXMuc2d2UmFuZ2VwaWNrZXIuZGF0ZXNDaGFuZ2VkLnN1YnNjcmliZSgocGVyaW9kOiBDYWxlbmRhclBlcmlvZCkgPT4ge1xyXG5cdFx0XHRjb25zdCBzdGFydCA9IE51bWJlcihwZXJpb2Quc3RhcnQpO1xyXG5cdFx0XHRjb25zdCBlbmQgPSBOdW1iZXIocGVyaW9kLmVuZCk7XHJcblx0XHRcdHRoaXMud3JpdGVWYWx1ZShcclxuXHRcdFx0XHRtb21lbnQoc3RhcnQpLmZvcm1hdCh0aGlzLmRlZmF1bHRzLmZvcm1hdCkgKyAnIC0gJyArIG1vbWVudChlbmQpLmZvcm1hdCh0aGlzLmRlZmF1bHRzLmZvcm1hdClcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5vbkNoYW5nZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy53aW5kb3dDbGljayk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLndpbmRvd0NsaWNrKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNob3cgcGlja2VyXHJcblx0ICovXHJcblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG5cdHB1YmxpYyBvbmNsaWNrKGUpOiB2b2lkIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR0aGlzLnNndlJhbmdlcGlja2VyLnNob3coKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBpY2sgZGF0ZXMgb24gaW5wdXQgY2hhbmdlc1xyXG5cdCAqIEBwYXJhbSBldmVudCAtIGlucHV0IGV2ZW50XHJcblx0ICovXHJcblx0QEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxyXG5cdHB1YmxpYyBvbklucHV0KGV2ZW50KTogdm9pZCB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdHRoaXMucHJvY2Vzc0NoYW5nZSh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQcm9jZXNzIGNoYW5nZXMgb2YgaW5wdXQgZWxlbWVudCwgc2V0IHJhbmdlcGlja2VyIG1vZGVsXHJcblx0ICogQHBhcmFtIHZhbHVlIC0gaW5wdXQgc3RyaW5nXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwcm9jZXNzQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGxldCB2YWxpZDogYm9vbGVhbjtcclxuXHJcblx0XHRpZiAoIXZhbHVlKSB7XHJcblx0XHRcdHZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5wZXJpb2QgPSB7fTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IGRhdGVzID0gdmFsdWUuc3BsaXQoJyAtICcpO1xyXG5cclxuXHRcdFx0Y29uc3Qgc3RhcnQgPSBtb21lbnQoZGF0ZXNbMF0sIHRoaXMuZGVmYXVsdHMuZm9ybWF0KTtcclxuXHRcdFx0Y29uc3QgZW5kID0gIG1vbWVudChkYXRlc1sxXSwgdGhpcy5kZWZhdWx0cy5mb3JtYXQpO1xyXG5cclxuXHRcdFx0dmFsaWQgPSBzdGFydC5pc1ZhbGlkKCkgJiYgZW5kLmlzVmFsaWQoKSAmJiBzdGFydC52YWx1ZU9mKCkgPD0gZW5kLnZhbHVlT2YoKTtcclxuXHJcblx0XHRcdGlmICh2YWxpZCkge1xyXG5cdFx0XHRcdHRoaXMuc2d2UmFuZ2VwaWNrZXIucGVyaW9kID0ge1xyXG5cdFx0XHRcdFx0c3RhcnQ6IHN0YXJ0LnZhbHVlT2YoKSxcclxuXHRcdFx0XHRcdGVuZDogZW5kLnZhbHVlT2YoKVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5wZXJpb2QgPSB7fTtcclxuXHRcdFx0XHR0aGlzLnNndlJhbmdlcGlja2VyLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSB3aW5kb3dDbGljaygpIHtcclxuXHRcdHRoaXMuc2d2UmFuZ2VwaWNrZXIuaGlkZSgpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19