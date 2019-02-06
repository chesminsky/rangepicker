import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SgvRangepickerModule } from '@sgv/rangepicker';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		SgvRangepickerModule.forRoot({
			// color: 'red'
		})
	],
	providers: [ { provide: LOCALE_ID, useValue: 'ru' } ],
	bootstrap: [AppComponent]
})
export class AppModule { }
