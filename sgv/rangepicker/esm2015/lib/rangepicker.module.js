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
import { SgvRangepickerDefaultsService } from './defaults.service';
export class SgvRangepickerModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: SgvRangepickerModule,
            providers: [
                { provide: LOCALE_ID, useValue: 'en' },
                {
                    provide: SgvRangepickerDefaultsService,
                    useValue: Object.assign({
                        color: '#3f51b5',
                        format: 'DD.MM.YYYY'
                    }, config)
                }
            ]
        };
    }
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
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNndi9yYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9yYW5nZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFpQm5FLE1BQU07Ozs7O0lBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUE0QixFQUFFO1FBQzVDLE9BQU87WUFDTixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFDdEM7b0JBQ0MsT0FBTyxFQUFFLDZCQUE2QjtvQkFDdEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7d0JBQ3ZCLEtBQUssRUFBRSxTQUFTO3dCQUNoQixNQUFNLEVBQUUsWUFBWTtxQkFDcEIsRUFBRSxNQUFNLENBQUM7aUJBQ1Y7YUFFRDtTQUNELENBQUM7SUFDSCxDQUFDOzs7WUEvQkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixnQkFBZ0I7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtpQkFDdkI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBMT0NBTEVfSUQsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNndlJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9yYW5nZXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2d2Q2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZ3ZSYW5nZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2VwaWNrZXIvcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZ3ZUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUucGlwZSc7XG5pbXBvcnQgeyBSYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuL2RlZmF1bHRzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFNndlJhbmdlcGlja2VyRGlyZWN0aXZlLFxuXHRcdFNndkNhbGVuZGFyQ29tcG9uZW50LFxuXHRcdFNndlJhbmdlcGlja2VyQ29tcG9uZW50LFxuXHRcdFNndlRyYW5zbGF0ZVBpcGVcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFNndlJhbmdlcGlja2VyRGlyZWN0aXZlLFxuXHRcdFNndlJhbmdlcGlja2VyQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2d2UmFuZ2VwaWNrZXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdChjb25maWc6IFJhbmdlcGlja2VyQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IFNndlJhbmdlcGlja2VyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogJ2VuJyB9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogU2d2UmFuZ2VwaWNrZXJEZWZhdWx0c1NlcnZpY2UsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0XHRcdFx0Y29sb3I6ICcjM2Y1MWI1Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ0RELk1NLllZWVknXG5cdFx0XHRcdFx0fSwgY29uZmlnKVxuXHRcdFx0XHR9XG5cblx0XHRcdF1cblx0XHR9O1xuXHR9XG59XG4iXX0=