import { NgModule, LOCALE_ID, ModuleWithProviders } from '@angular/core';
import { SgvRangepickerDirective } from './rangepicker.directive';
import { SgvCalendarComponent } from './calendar/calendar.component';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import { CommonModule } from '@angular/common';
import { SgvTranslatePipe } from './translate.pipe';
import { SgvRangepickerDefaultsService } from './defaults';

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
	providers: [
		SgvRangepickerDefaultsService
	]
})
export class SgvRangepickerModule {}
