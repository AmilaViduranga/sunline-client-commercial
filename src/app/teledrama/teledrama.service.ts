import { Injectable }     from '@angular/core';
import { BaseService }    from '../base.service';

@Injectable()
export class TeledramaService {

  constructor(private base: BaseService) { }

  /*
   * get all the teledramas
   * */
  getAllTeledramas() {
    return new Promise((resolve, reject) => {
      this.base.get('teledrama', null).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })
  }

}
