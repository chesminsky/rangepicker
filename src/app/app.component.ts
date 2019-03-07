import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public form: FormGroup;

	constructor(
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.form = this.fb.group({
			date: this.fb.control('', Validators.required)
		});
	}

	setModel() {
		const value = moment().startOf('isoWeek').startOf('day').format('DD.MM.YYYY') + ' - ' + moment().endOf('day').format('DD.MM.YYYY');
		this.form.get('date').setValue(value);
	}
}
