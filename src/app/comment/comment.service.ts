import { Injectable }     from '@angular/core';
import { BaseService }    from '../base.service';

@Injectable()
export class CommentService {

  constructor(private base: BaseService) { }

  /*
   * add comments
   * */
  addNewFeedback(data) {
    return new Promise((resolve, reject) => {
      this.base.post('comment',data).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })
  }

  /*
   * get all comments
   * */
  getAllComments() {
    return new Promise((resolve, reject) => {
      this.base.get('comment', null).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
