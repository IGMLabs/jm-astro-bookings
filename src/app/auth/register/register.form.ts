import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Register } from 'src/app/auth/api/register.interface';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm extends FormBase implements OnInit {

  @Output() public save = new EventEmitter<Register>();

  constructor(formBuilder: FormBuilder, fvs: FormValidationsService, fms: FormMessagesService) {
    super(fms)
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      acceptTerms: new FormControl(true),
    }, {
      validators: [fvs.passwordMatch]
    });
  }

  public onSave() {
    const {name, email, password} = this.form.value;
    const register: Register = {name, email: email.email, password};
    console.log("Form:" + register.name + register.email + register.password);
    this.save.emit(register);
  }


  ngOnInit(): void {
  }
}

