import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name = new FormControl();
  city: any;

  // hobby: any = 'hey now';
  // aName: any;
  // aAddress: any;
  // aPhone: any;
  constructor() { }

  ngOnInit() {
  }

  submitName() {
    console.log(`Submitting ${this.name.value}`);
  }
}
