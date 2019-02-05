import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgvRangepickerComponent } from './sgv-rangepicker.component';

describe('SgvRangepickerComponent', () => {
  let component: SgvRangepickerComponent;
  let fixture: ComponentFixture<SgvRangepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgvRangepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgvRangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
