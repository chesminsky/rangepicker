/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, Inject, LOCALE_ID } from '@angular/core';
import { translations } from './translations';
var SgvTranslatePipe = /** @class */ (function () {
    function SgvTranslatePipe(locale) {
        this.locale = locale;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SgvTranslatePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return translations[value][this.locale] || value;
    };
    SgvTranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate'
                },] }
    ];
    SgvTranslatePipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return SgvTranslatePipe;
}());
export { SgvTranslatePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SgvTranslatePipe.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2d2L3JhbmdlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQUtDLDBCQUM0QixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN0QyxDQUFDOzs7OztJQUVMLG9DQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3RCLE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUM7SUFDbEQsQ0FBQzs7Z0JBWEQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxXQUFXO2lCQUNqQjs7OzZDQUlFLE1BQU0sU0FBQyxTQUFTOztJQU1uQix1QkFBQztDQUFBLEFBWkQsSUFZQztTQVRZLGdCQUFnQjs7Ozs7O0lBRzNCLGtDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlLCBJbmplY3QsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGlvbnMgfSBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3RyYW5zbGF0ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNndlRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZ1xyXG5cdCkgeyB9XHJcblxyXG5cdHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0cmFuc2xhdGlvbnNbdmFsdWVdW3RoaXMubG9jYWxlXSB8fCB2YWx1ZTtcclxuXHR9XHJcbn1cclxuIl19