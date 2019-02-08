import { PipeTransform } from '@angular/core';
export declare class SgvTranslatePipe implements PipeTransform {
    private locale;
    constructor(locale: string);
    transform(value: string): string;
}
