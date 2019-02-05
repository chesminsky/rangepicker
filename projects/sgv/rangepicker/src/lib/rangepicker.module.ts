import { NgModule } from '@angular/core';
import { SgvRangepickerDirective } from './rangepicker.directive';
import { SgvCalendarComponent } from './calendar/calendar.component';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SgvRangepickerDirective,
		SgvCalendarComponent,
		SgvRangepickerComponent,
	],
	exports: [
		SgvRangepickerDirective,
		SgvRangepickerComponent
	]
})
export class SgvRangepickerModule { }
