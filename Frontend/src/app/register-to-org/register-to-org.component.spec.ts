import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterToOrgComponent } from './register-to-org.component';

describe('RegisterToOrgComponent', () => {
  let component: RegisterToOrgComponent;
  let fixture: ComponentFixture<RegisterToOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterToOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterToOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
