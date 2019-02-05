import { NgModule } from '@angular/core';
import { SgvDatepickerDirective } from './rangepicker.directive';
import { SgvCalendarComponent } from './calendar/calendar.component';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SgvDatepickerDirective,
		SgvCalendarComponent,
		SgvRangepickerComponent,
	],
	exports: [
		SgvDatepickerDirective,
		SgvRangepickerComponent
	]
})
export class SgvRangepickerModule { }
