/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import { SgvRangepickerOptions } from './options';
export class SgvRangepickerDefaultsService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
        /** @type {?} */
        const defaults = {
            color: '#3f51b5',
            format: 'DD.MM.YYYY'
        };
        Object.assign(this, defaults);
        if (options) {
            Object.assign(this, options);
        }
    }
}
SgvRangepickerDefaultsService.decorators = [
    { type: Injectable }
];
SgvRangepickerDefaultsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [SgvRangepickerOptions,] }, { type: Optional }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SgvRangepickerDefaultsService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2d2L3JhbmdlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBSWxELE1BQU07Ozs7SUFDTCxZQUErRCxPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjs7Y0FFbEYsUUFBUSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE1BQU0sRUFBRSxZQUFZO1NBQ3BCO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFOUIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7OztZQWRELFVBQVU7Ozs0Q0FFRyxNQUFNLFNBQUMscUJBQXFCLGNBQUcsUUFBUTs7Ozs7OztJQUF4QyxnREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IFJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZ3ZSYW5nZXBpY2tlckRlZmF1bHRzU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChTZ3ZSYW5nZXBpY2tlck9wdGlvbnMpIEBPcHRpb25hbCgpIHByaXZhdGUgb3B0aW9uczogUmFuZ2VwaWNrZXJDb25maWcpIHtcclxuXHJcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcclxuXHRcdFx0Y29sb3I6ICcjM2Y1MWI1JyxcclxuXHRcdFx0Zm9ybWF0OiAnREQuTU0uWVlZWSdcclxuXHRcdH07XHJcblxyXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cyk7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMpIHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19