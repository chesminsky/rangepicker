import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public date;

	setModel() {
		this.date = moment().startOf('isoWeek').startOf('day').format('DD.MM.YYYY') + ' - ' + moment().endOf('day').format('DD.MM.YYYY');
	}
}
