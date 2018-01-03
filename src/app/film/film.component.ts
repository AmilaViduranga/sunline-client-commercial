import { Component, OnInit }     from '@angular/core';
import { FilmService  }          from './film.service';
import FilmModal                 from './film.modal';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  filmList: Array<FilmModal>;
  page: number;
  showmore: boolean = false;
  show_less: String = "Show More";

  constructor(private filmService: FilmService) {
    this.filmList = new Array<FilmModal>();
    this.page = 1;
  }

  ngOnInit() {
    this.filmService.getAllFilmsInfo().then(result => {
      this.filmList = result['data'];
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
