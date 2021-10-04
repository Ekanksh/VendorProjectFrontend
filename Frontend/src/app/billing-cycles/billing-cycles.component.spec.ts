import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCyclesComponent } from './billing-cycles.component';

describe('BillingCyclesComponent', () => {
  let component: BillingCyclesComponent;
  let fixture: ComponentFixture<BillingCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingCyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
