import { Injectable }     from '@angular/core';
import { BaseService }    from '../base.service';

@Injectable()
export class FilmService {

  constructor(private base: BaseService) { }

  /*
   * get film details
   * */
  getAllFilmsInfo() {
    return new Promise((resolve, reject) => {
      this.base.get('film', null).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })
  }

}
