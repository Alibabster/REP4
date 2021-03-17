import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SignUpService} from '../appServices/signUp.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit{

  user: user;
  constructor(public signUpService: SignUpService) {
  }

  // tslint:disable-next-line:typedef
  setSignUp(){
    this.signUpService.setSignUp();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {

    this.user = {
      firstname: 'Name',
      lastname: 'Surname',
      email: 'email@gmail.com',
      password: '123',
    };

  }

  // tslint:disable-next-line:typedef
  onSubmit(userForm: NgForm) {
    console.log(this.user);
  }
}

// tslint:disable-next-line:class-name
export class user {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
