import { Injectable }     from '@angular/core';
import { BaseService }    from '../base.service';

@Injectable()
export class MusicVideoService {

  constructor(private base: BaseService) { }

  /*
   * get all the music videos
   * */
  getAllTheMusicVideos() {
    return new Promise((resolve, reject) => {
      this.base.get('music', null).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })
  }

}
