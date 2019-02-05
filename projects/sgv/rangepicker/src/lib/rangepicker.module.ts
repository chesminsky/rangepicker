import { NgModule, LOCALE_ID } from '@angular/core';
import { SgvRangepickerDirective } from './rangepicker.directive';
import { SgvCalendarComponent } from './calendar/calendar.component';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import { CommonModule } from '@angular/common';
import { SgvTranslatePipe } from './translate.pipe';

@NgModule({
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
	providers: [ { provide: LOCALE_ID, useValue: 'en' } ],
})
export class SgvRangepickerModule { }
