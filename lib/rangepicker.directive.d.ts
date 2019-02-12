/**
 * Rangepicker directive for input elements
 */
import { ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class SgvRangepickerDirective implements AfterViewInit, OnDestroy, ControlValueAccessor {
    private elemRef;
    private defaults;
    private sub;
    onChange: any;
    value: string;
    private sgvRangepicker;
    constructor(elemRef: ElementRef, defaults: any);
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Show picker
     */
    onclick(e: any): void;
    /**
     * Pick dates on input changes
     * @param event - input event
     */
    onInput(event: any): void;
    /**
     * Process changes of input element, set rangepicker model
     * @param value - input string
     */
    private processChange;
    private windowClick;
}
