import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilitiesService } from 'src/app/core/utils/utilities.service';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css']
})
export class NewTripForm extends FormBase implements OnInit {
  public start_date = 0;
  public agencies = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ];

  constructor(formBuilder: FormBuilder, fvs: FormValidationsService, fms: FormMessagesService, public us: UtilitiesService) {
    super(fms);
    this.form = formBuilder.group({
      agency: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)] ),
      places: new FormControl('', [Validators.required, Validators.min(2), Validators.max(10)] ),
      start_date: new FormControl('', [Validators.required] ),
      end_date: new FormControl('', [Validators.required] ),
      flightPrice: new FormControl('', [Validators.required, Validators.min(1000000), Validators.max(10000000)] ),

    }, {
      validators: [fvs.compareDates]
    });
  }

  public onSubmitClick(){
    const {agency, destination, places, start_date, end_date, flightPrice} = this.form.value;
    const id = this.us.getDashId(agency + "-" + destination);
    const newTripData = {id, agency, destination, places, start_date, end_date, flightPrice};
    console.warn('Send trip data ', newTripData)
  }

  ngOnInit(): void {}
}

