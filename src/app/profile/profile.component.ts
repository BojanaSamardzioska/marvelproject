import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { Data }    from '../data';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private router : Router){}

  genders = ['Male', 'Female'];


  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  model = new Data('John Doe',
                         'username',
                         'johndoe.com', '', 'johndoe@instascape.com', '070555555', this.genders[0]);


  newData(): Data {
    let myDetails =  new Data('John Doe',
                           'username',
                           'johndoe.com', '', 'johndoe@instascape.com', '070555555', this.genders[0]);
    console.log('My hero is called ' + myDetails.name);
    return myDetails;
  }

  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value;
  }

  favHeroes() {
      this.router.navigate(['fav-heroes']);
    }

}
