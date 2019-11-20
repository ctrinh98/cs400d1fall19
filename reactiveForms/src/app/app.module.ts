import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormGroupComponent } from './contact-form-group/contact-form-group.component';
import { ContactFormWithValidationComponent } from './contact-form-with-validation/contact-form-with-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactFormGroupComponent,
    ContactFormWithValidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
