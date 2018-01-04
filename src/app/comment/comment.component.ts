import { Component, OnInit }    from '@angular/core';
import { CommentService }       from './comment.service';
import CommentModel             from './comment.modal';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentList: Array<CommentModel>;
  newComment: CommentModel;
  page: number = 1;

  constructor(private service: CommentService) {
    this.newComment = new CommentModel();
    this.commentList = new Array<CommentModel>();
  }

  ngOnInit() {
    this.getAllComments().then(result => {
      this.commentList = result['data'];
    }).catch(err => {
      console.log(err);
    })
  }

  /*
   * add new feedback
   * */
  insertNewFeedback() {
    if(this.newComment.owner !== "" && this.newComment.comment !== "") {
      this.service.addNewFeedback(this.newComment).then(result => {
        this.getAllComments().then(results => {
          this.commentList = results['data'];
        })
      }).catch(err => {
        console.log(err);
      })
    }
  }

  /*
   * get all comments
   * */
  getAllComments() {
    return new Promise((resolve, reject) => {
      this.service.getAllComments().then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })
  }

}
