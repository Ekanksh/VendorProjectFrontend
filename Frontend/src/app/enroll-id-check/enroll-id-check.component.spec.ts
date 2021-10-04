import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollIdCheckComponent } from './enroll-id-check.component';

describe('EnrollIdCheckComponent', () => {
  let component: EnrollIdCheckComponent;
  let fixture: ComponentFixture<EnrollIdCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollIdCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollIdCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
