import { Injectable }     from '@angular/core';
import { BaseService }    from '../base.service';

@Injectable()
export class FoundationFounderService {

  constructor(private base: BaseService) { 

  }

  /*
   * get founder details
   * */
  getAllFounderInfo() {
    return new Promise((resolve, reject) => {
      this.base.get('amarakoon/founder', null).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
