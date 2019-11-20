import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form-group',
  templateUrl: './contact-form-group.component.html',
  styleUrls: ['./contact-form-group.component.css']
})
export class ContactFormGroupComponent implements OnInit {

  contactFormGroup = new FormGroup(
    {
      name:       new FormControl('', Validators.required),
      department: new FormControl('', [Validators.required, Validators.email]),
      UID:        new FormControl('')
    }
  );
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`Sending ${this.contactFormGroup.value.name}`);
  }
}
