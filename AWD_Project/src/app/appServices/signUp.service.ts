import {Injectable} from '@angular/core';

@Injectable()
export class SignUpService {
  signUp = false;

  // tslint:disable-next-line:typedef
  setSignUp(){
    this.signUp = true;
}

  isSignUp(): boolean{
    return this.signUp;

  }
}
