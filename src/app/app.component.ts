import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public date = new FormControl('20.01.2019 - 25.01.2019');
}
