import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/auth/api/login.interface';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormBase } from 'src/app/core/forms/form.base';



@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm extends FormBase implements OnInit {

  @Output() public save = new EventEmitter<Login>();

  constructor(formBuilder: FormBuilder, fms: FormMessagesService) {
    super(fms);
    this.form = formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onSave() {
    const {email, password} = this.form.value;
    const login: Login = {email: email.email, password};
    this.save.emit(login);
  }


  ngOnInit(): void {
  }

}
