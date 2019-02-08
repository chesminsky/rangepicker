import { NgModule, LOCALE_ID, ModuleWithProviders } from '@angular/core';
import { SgvRangepickerDirective } from './rangepicker.directive';
import { SgvCalendarComponent } from './calendar/calendar.component';
import { SgvRangepickerComponent } from './rangepicker/rangepicker.component';
import { CommonModule } from '@angular/common';
import { SgvTranslatePipe } from './translate.pipe';
import { RangepickerConfig } from './types';
import { SgvRangepickerDefaultsService } from './defaults.service';

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
	]
})
export class SgvRangepickerModule {
	static forRoot(config: RangepickerConfig = {}): ModuleWithProviders {
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
