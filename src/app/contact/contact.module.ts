import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactForm } from './contact.form';
import { ContactPage } from './contact.page';


@NgModule({
  declarations: [
    ContactForm,
    ContactPage
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
