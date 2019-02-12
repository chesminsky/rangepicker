/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, LOCALE_ID } from '@angular/core';
import { SgvRangepickerDirective } from './rangepicker.directive';
import { SgvCalendarComponent } from './calendar/calendar.component';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import { CommonModule } from '@angular/common';
import { SgvTranslatePipe } from './translate.pipe';
import { SgvRangepickerDefaultsService } from './defaults';
var SgvRangepickerModule = /** @class */ (function () {
    function SgvRangepickerModule() {
    }
    SgvRangepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SgvRangepickerDirective,
                        SgvCalendarComponent,
                        SgvRangepickerComponent,
                        SgvTranslatePipe
                    ],
                    exports: [
                        SgvRangepickerDirective,
                        SgvRangepickerComponent
                    ],
                    providers: [
                        SgvRangepickerDefaultsService,
                        { provide: LOCALE_ID, useValue: 'en' }
                    ]
                },] }
    ];
    return SgvRangepickerModule;
}());
export { SgvRangepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTNEO0lBQUE7SUFtQm1DLENBQUM7O2dCQW5CbkMsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDYix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3dCQUN2QixnQkFBZ0I7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUix1QkFBdUI7d0JBQ3ZCLHVCQUF1QjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLDZCQUE2Qjt3QkFDN0IsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7cUJBQ3RDO2lCQUNEOztJQUNrQywyQkFBQztDQUFBLEFBbkJwQyxJQW1Cb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIExPQ0FMRV9JRCwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZ3ZSYW5nZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vcmFuZ2VwaWNrZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU2d2Q2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZXBpY2tlci9yYW5nZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTZ3ZUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9kZWZhdWx0cyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRTZ3ZSYW5nZXBpY2tlckRpcmVjdGl2ZSxcclxuXHRcdFNndkNhbGVuZGFyQ29tcG9uZW50LFxyXG5cdFx0U2d2UmFuZ2VwaWNrZXJDb21wb25lbnQsXHJcblx0XHRTZ3ZUcmFuc2xhdGVQaXBlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRTZ3ZSYW5nZXBpY2tlckRpcmVjdGl2ZSxcclxuXHRcdFNndlJhbmdlcGlja2VyQ29tcG9uZW50XHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFNndlJhbmdlcGlja2VyRGVmYXVsdHNTZXJ2aWNlLFxyXG5cdFx0eyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiAnZW4nIH1cclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZ3ZSYW5nZXBpY2tlck1vZHVsZSB7fVxyXG4iXX0=