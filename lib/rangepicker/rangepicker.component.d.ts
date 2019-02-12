import * as moment_ from 'moment';
import { CalendarPeriod, RangepickerPreset } from '../types';
import { EventEmitter } from '@angular/core';
export declare class SgvRangepickerComponent {
    defaults: any;
    period: CalendarPeriod;
    hoveredDate: moment_.Moment;
    presets: Array<RangepickerPreset>;
    tab: number;
    chunkSize: number;
    datesChanged: EventEmitter<CalendarPeriod>;
    /**
     * Event bus
     * TODO - ref to observables
     */
    events: {
        topics: {};
        on(topic: any, listener: any): void;
        send(topic: any, info: any): void;
    };
    visible: boolean;
    constructor(defaults: any);
    show(): void;
    hide(): void;
    /**
     * Initialize rangepicker
     */
    init(): void;
    /**
     * Prevent bubbling to input
     */
    onClick(e: any): void;
    /**
     * Set period from presets
     */
    setPeriod(code: string): void;
    /**
     * Get date in ms from preset
     * @param code - preset code
     * @param key - end or start
     */
    private getPresetValueByCode;
}
