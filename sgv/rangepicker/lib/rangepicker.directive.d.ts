/**
 * Rangepicker directive for input elements
 */
import { ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
export declare class SgvRangepickerDirective implements AfterViewInit, OnDestroy {
    private elemRef;
    private defaults;
    private sub;
    private sgvRangepicker;
    constructor(elemRef: ElementRef, defaults: any);
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
