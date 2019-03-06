import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:FormGroup
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['username', [Validators.required]],
      password: ['username', [Validators.required]]
    });
  }

  submitForm():void {
    if(this.checkForm()){
      console.log('Valid');
    }else{
      console.log('Not valid');
    }
  }
  checkForm():boolean{
    this.form.controls.name.markAsTouched();
    this.form.controls.password.markAsTouched();
    let usernameLength = this.form.controls.name.value;
    let passLength = this.form.controls.password.value;

    let isValid: boolean = false;
    if(this.form.valid && usernameLength.length > 4 && usernameLength.length <
      20 && passLength.length > 4 && passLength.length < 20)
      {
        this.router.navigate(['user']);
        return isValid = true;
      }

      return isValid;
  }

}
