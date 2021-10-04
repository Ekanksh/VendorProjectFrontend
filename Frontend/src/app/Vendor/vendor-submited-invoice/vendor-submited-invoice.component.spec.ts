import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSubmitedInvoiceComponent } from './vendor-submited-invoice.component';

describe('VendorSubmitedInvoiceComponent', () => {
  let component: VendorSubmitedInvoiceComponent;
  let fixture: ComponentFixture<VendorSubmitedInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSubmitedInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSubmitedInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
