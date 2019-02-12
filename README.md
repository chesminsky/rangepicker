## Installation
This library is based on moment js, so install it alongside
```bash
$ npm install @sgv/rangepicker moment@2.x
```

## Usage

```typescript
import { SgvRangepickerModule } from '@sgv/rangepicker';

@NgModule({
  imports: [
    SgvRangepickerModule
  ]
})
```
Example with material text input (material ui is optional)
```html
<mat-form-field>
    <input matInput [sgvRangepicker]="myDatepicker" placeholder="Choose a date">
    <sgv-rangepicker #myDatepicker></sgv-rangepicker>
</mat-form-field>
```

Also you can use it with reactive or template driven forms.

## Options
You can provide map of options.
Custom color and date format available at this moment
```typescript
import { SgvRangepickerOptions } from '@sgv/rangepicker';

@NgModule({
	providers: [
		{
		    provide: SgvRangepickerOptions,
		    useValue: {
		        color: 'red',  // default is '#3f51b5'
		        format: 'DD.MM.YY' // default is 'DD.MM.YYYY'
		    }
		}
	],
})
```

## Events
SgvRangepickerComponent emits datesChanged event when interval is changed.

## Internationalization
English is the default language.
Russian is also available at this moment if you provide
```typescript
@NgModule({
	providers: [
		{ provide: LOCALE_ID, useValue: 'ru' },
	],
})
```
## Demo
[Click here!](https://chesminsky.github.io/rangepicker).