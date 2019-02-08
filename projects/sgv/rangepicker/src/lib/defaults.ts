import { Injectable, Optional, Inject } from '@angular/core';
import { SgvRangepickerOptions } from './options';
import { RangepickerConfig } from './types';

@Injectable()
export class SgvRangepickerDefaultsService {
	constructor(@Inject(SgvRangepickerOptions) @Optional() private options: RangepickerConfig) {

		const defaults = {
			color: '#3f51b5',
			format: 'DD.MM.YYYY'
		};

		Object.assign(this, defaults);

		if (options) {
			Object.assign(this, options);
		}
	}
}
