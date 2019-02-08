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
import { SgvRangepickerDefaultsService } from './defaults.service';
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
            this.elemRef.nativeElement.value = moment(start).format(this.defaults.format) + ' - ' + moment(end).format(this.defaults.format);
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
                selector: '[sgvRangepicker]'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBVSxZQUFZLEVBQTRCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7TUFHNUIsTUFBTSxHQUFHLE9BQU87QUFDdEIsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLbkUsTUFBTTs7Ozs7SUFPTCxZQUNTLE9BQW1CLEVBQ29CLFFBQVE7UUFEL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNvQixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBRXZELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFzQixFQUFFLEVBQUU7O2tCQUMxRSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2tCQUM1QixHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xJLENBQUMsRUFBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQU1NLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBT00sT0FBTyxDQUFDLEtBQUs7O2NBQ2IsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFNTyxhQUFhLENBQUMsS0FBYTs7WUFDOUIsS0FBYztRQUVsQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNiO2FBQU07O2tCQUNBLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7a0JBRTFCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztrQkFDOUMsR0FBRyxHQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFbkQsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU3RSxJQUFJLEtBQUssRUFBRTtnQkFDVixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRztvQkFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFO2lCQUNsQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzNCO1NBQ0Q7SUFDRixDQUFDOzs7OztJQUVPLFdBQVc7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUFyRkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7YUFDNUI7OztZQVYwQixVQUFVOzRDQW9CbEMsTUFBTSxTQUFDLDZCQUE2Qjs7OzZCQUxyQyxLQUFLO3NCQStCTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQVVoQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBM0NqQyxzQ0FBMEI7Ozs7O0lBRTFCLGlEQUNnRDs7Ozs7SUFHL0MsMENBQTJCOzs7OztJQUMzQiwyQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJhbmdlcGlja2VyIGRpcmVjdGl2ZSBmb3IgaW5wdXQgZWxlbWVudHNcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZXBpY2tlci9yYW5nZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJQZXJpb2QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuY29uc3QgbW9tZW50ID0gbW9tZW50XztcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9kZWZhdWx0cy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3NndlJhbmdlcGlja2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgU2d2UmFuZ2VwaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cblx0QElucHV0KClcblx0cHJpdmF0ZSBzZ3ZSYW5nZXBpY2tlcjogU2d2UmFuZ2VwaWNrZXJDb21wb25lbnQ7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmLFxuXHRcdEBJbmplY3QoU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UpIHByaXZhdGUgZGVmYXVsdHNcblx0KSB7XG5cdFx0dGhpcy53aW5kb3dDbGljayA9IHRoaXMud2luZG93Q2xpY2suYmluZCh0aGlzKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnByb2Nlc3NDaGFuZ2UodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuXHRcdHRoaXMuc2d2UmFuZ2VwaWNrZXIuaW5pdCgpO1xuXG5cdFx0dGhpcy5zdWIgPSB0aGlzLnNndlJhbmdlcGlja2VyLmRhdGVzQ2hhbmdlZC5zdWJzY3JpYmUoKHBlcmlvZDogQ2FsZW5kYXJQZXJpb2QpID0+IHtcblx0XHRcdGNvbnN0IHN0YXJ0ID0gTnVtYmVyKHBlcmlvZC5zdGFydCk7XG5cdFx0XHRjb25zdCBlbmQgPSBOdW1iZXIocGVyaW9kLmVuZCk7XG5cdFx0XHR0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IG1vbWVudChzdGFydCkuZm9ybWF0KHRoaXMuZGVmYXVsdHMuZm9ybWF0KSArICcgLSAnICsgbW9tZW50KGVuZCkuZm9ybWF0KHRoaXMuZGVmYXVsdHMuZm9ybWF0KTtcblx0XHR9KTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMud2luZG93Q2xpY2spO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLndpbmRvd0NsaWNrKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IHBpY2tlclxuXHQgKi9cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25jbGljayhlKTogdm9pZCB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnNndlJhbmdlcGlja2VyLnNob3coKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQaWNrIGRhdGVzIG9uIGlucHV0IGNoYW5nZXNcblx0ICogQHBhcmFtIGV2ZW50IC0gaW5wdXQgZXZlbnRcblx0ICovXG5cdEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uSW5wdXQoZXZlbnQpOiB2b2lkIHtcblx0XHRjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnByb2Nlc3NDaGFuZ2UodmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb2Nlc3MgY2hhbmdlcyBvZiBpbnB1dCBlbGVtZW50LCBzZXQgcmFuZ2VwaWNrZXIgbW9kZWxcblx0ICogQHBhcmFtIHZhbHVlIC0gaW5wdXQgc3RyaW5nXG5cdCAqL1xuXHRwcml2YXRlIHByb2Nlc3NDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGxldCB2YWxpZDogYm9vbGVhbjtcblxuXHRcdGlmICghdmFsdWUpIHtcblx0XHRcdHZhbGlkID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgZGF0ZXMgPSB2YWx1ZS5zcGxpdCgnIC0gJyk7XG5cblx0XHRcdGNvbnN0IHN0YXJ0ID0gbW9tZW50KGRhdGVzWzBdLCB0aGlzLmRlZmF1bHRzLmZvcm1hdCk7XG5cdFx0XHRjb25zdCBlbmQgPSAgbW9tZW50KGRhdGVzWzFdLCB0aGlzLmRlZmF1bHRzLmZvcm1hdCk7XG5cblx0XHRcdHZhbGlkID0gc3RhcnQuaXNWYWxpZCgpICYmIGVuZC5pc1ZhbGlkKCkgJiYgc3RhcnQudmFsdWVPZigpIDw9IGVuZC52YWx1ZU9mKCk7XG5cblx0XHRcdGlmICh2YWxpZCkge1xuXHRcdFx0XHR0aGlzLnNndlJhbmdlcGlja2VyLnBlcmlvZCA9IHtcblx0XHRcdFx0XHRzdGFydDogc3RhcnQudmFsdWVPZigpLFxuXHRcdFx0XHRcdGVuZDogZW5kLnZhbHVlT2YoKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5wZXJpb2QgPSB7fTtcblx0XHRcdFx0dGhpcy5zZ3ZSYW5nZXBpY2tlci5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB3aW5kb3dDbGljaygpIHtcblx0XHR0aGlzLnNndlJhbmdlcGlja2VyLmhpZGUoKTtcblx0fVxuXG59XG4iXX0=