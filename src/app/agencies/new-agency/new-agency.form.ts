import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilitiesService } from 'src/app/core/utils/utilities.service';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormBase } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends FormBase implements OnInit {
  public ranges = [
    { id: 'Orbital', name: '🌎 Orbiting around the earth' },
    {
      id: 'Interplanetary',
      name: '🌕 To the moon and other plantes',
    },
    { id: 'Interstellar', name: '💫 Traveling to other stars' },
  ];
  public statuses = ['Active', 'Pending'];

  constructor(formBuilder: FormBuilder, fms: FormMessagesService, private us: UtilitiesService) {
    super(fms);
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),
    });
  }


  public onSubmitClick(){
    const {name, range, status} = this.form.value;
    const id = this.us.getDashId(name);
    const newAgencyData = { id, name, range, status};
    console.warn('Send agency data ', newAgencyData)
  }

  ngOnInit(): void {}
}
