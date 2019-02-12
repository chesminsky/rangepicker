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
export class SgvRangepickerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBcUIzRCxNQUFNOzs7WUFuQkwsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixnQkFBZ0I7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLDZCQUE2QjtvQkFDN0IsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7aUJBQ3RDO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTE9DQUxFX0lELCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9yYW5nZXBpY2tlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTZ3ZDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2d2UmFuZ2VwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlcGlja2VyL3JhbmdlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNndlRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuL2RlZmF1bHRzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFNndlJhbmdlcGlja2VyRGlyZWN0aXZlLFxyXG5cdFx0U2d2Q2FsZW5kYXJDb21wb25lbnQsXHJcblx0XHRTZ3ZSYW5nZXBpY2tlckNvbXBvbmVudCxcclxuXHRcdFNndlRyYW5zbGF0ZVBpcGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdFNndlJhbmdlcGlja2VyRGlyZWN0aXZlLFxyXG5cdFx0U2d2UmFuZ2VwaWNrZXJDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0U2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UsXHJcblx0XHR7IHByb3ZpZGU6IExPQ0FMRV9JRCwgdXNlVmFsdWU6ICdlbicgfVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNndlJhbmdlcGlja2VyTW9kdWxlIHt9XHJcbiJdfQ==