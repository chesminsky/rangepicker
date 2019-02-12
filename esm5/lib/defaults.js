/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import { SgvRangepickerOptions } from './options';
var SgvRangepickerDefaultsService = /** @class */ (function () {
    function SgvRangepickerDefaultsService(options) {
        this.options = options;
        /** @type {?} */
        var defaults = {
            color: '#3f51b5',
            format: 'DD.MM.YYYY'
        };
        Object.assign(this, defaults);
        if (options) {
            Object.assign(this, options);
        }
    }
    SgvRangepickerDefaultsService.decorators = [
        { type: Injectable }
    ];
    SgvRangepickerDefaultsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [SgvRangepickerOptions,] }, { type: Optional }] }
    ]; };
    return SgvRangepickerDefaultsService;
}());
export { SgvRangepickerDefaultsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SgvRangepickerDefaultsService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2d2L3JhbmdlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR2xEO0lBRUMsdUNBQStELE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1COztZQUVsRixRQUFRLEdBQUc7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsTUFBTSxFQUFFLFlBQVk7U0FDcEI7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU5QixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQzs7Z0JBZEQsVUFBVTs7O2dEQUVHLE1BQU0sU0FBQyxxQkFBcUIsY0FBRyxRQUFROztJQWFyRCxvQ0FBQztDQUFBLEFBZkQsSUFlQztTQWRZLDZCQUE2Qjs7Ozs7O0lBQzdCLGdEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2d2UmFuZ2VwaWNrZXJPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHsgUmFuZ2VwaWNrZXJDb25maWcgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFNndlJhbmdlcGlja2VyT3B0aW9ucykgQE9wdGlvbmFsKCkgcHJpdmF0ZSBvcHRpb25zOiBSYW5nZXBpY2tlckNvbmZpZykge1xyXG5cclxuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xyXG5cdFx0XHRjb2xvcjogJyMzZjUxYjUnLFxyXG5cdFx0XHRmb3JtYXQ6ICdERC5NTS5ZWVlZJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzKTtcclxuXHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=