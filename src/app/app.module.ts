import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatFormFieldModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SgvRangepickerModule } from '@sgv/rangepicker';
import { SgvRangepickerOptions } from '@sgv/rangepicker';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
		SgvRangepickerModule
	],
	providers: [
		// { provide: LOCALE_ID, useValue: 'ru' },
		// { provide: SgvRangepickerOptions, useValue: { color: 'red' }}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
