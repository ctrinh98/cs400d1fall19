import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormWithValidationComponent } from './contact-form-with-validation.component';

describe('ContactFormWithValidationComponent', () => {
  let component: ContactFormWithValidationComponent;
  let fixture: ComponentFixture<ContactFormWithValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormWithValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormWithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
