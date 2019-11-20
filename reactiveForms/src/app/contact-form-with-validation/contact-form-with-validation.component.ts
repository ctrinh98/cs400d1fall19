import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form-with-validation',
  templateUrl: './contact-form-with-validation.component.html',
  styleUrls: ['./contact-form-with-validation.component.css']
})
export class ContactFormWithValidationComponent implements OnInit {

  constructor() { }
  contactFormGroup = new FormGroup(
    {
      name:       new FormControl('', [Validators.required, Validators.maxLength(3)]),
      department: new FormControl(''),
      UID:        new FormControl(''),
    }
  );

  ngOnInit() {
  }

  onSubmit() {
    console.log(`Sending ${this.contactFormGroup.value}`);
  }


}

