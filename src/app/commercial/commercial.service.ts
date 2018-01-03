import { Injectable }       from '@angular/core';
import { BaseService }      from '../base.service';

@Injectable()
export class CommercialService {

  constructor(private base: BaseService) {
    
  }

  /*
   * get all the commercials available
   * */
  getAllCommercials() {
    return new Promise((resolve, reject) => {
      this.base.get('commercial', null).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })
  }

}
