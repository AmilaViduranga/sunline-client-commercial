import { Component, OnInit }      from '@angular/core';
import MusicVideo                 from './music-video.modal';
import { MusicVideoService }      from './music-video.service';

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.component.html',
  styleUrls: ['./music-video.component.css']
})
export class MusicVideoComponent implements OnInit {

  musicList: Array<MusicVideo>;
  page: number;
  showmore: boolean = false;
  show_less: String = "Show More";

  constructor(private musicService: MusicVideoService ) { 
    this.musicList = new Array<MusicVideo>();
  }

  ngOnInit() {
    this.musicService.getAllTheMusicVideos().then(result => {
      console.log(result['data']);
      this.musicList = result['data'];
    }).catch(err => {
      console.log(err);
    })
  }

  /*
   * view more / view less information
   **/
  viewInformation(commercialInstance) {
    if(this.showmore == false) {
      this.show_less = "Show Less"
      this.showmore = true;
    } else {
      this.show_less = "Show More"
      this.showmore = false;
    }
  } 

}
