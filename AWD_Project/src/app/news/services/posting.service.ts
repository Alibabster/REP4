import {Injectable} from '@angular/core';

@Injectable()
export class PostingService {

  // tslint:disable-next-line:typedef
  log(message: string) {
    console.log('Logging.service log message: ',
      message);
  }
}
