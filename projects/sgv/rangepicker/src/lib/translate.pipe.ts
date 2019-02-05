
import { PipeTransform, Pipe, Inject, LOCALE_ID } from '@angular/core';
import { translations } from './translations';

@Pipe({
	name: 'translate'
})
export class SgvTranslatePipe implements PipeTransform {

	constructor(
		@Inject(LOCALE_ID) private locale: string
	) { }

	transform(value: string): string {
		return translations[value][this.locale] || value;
	}
}
