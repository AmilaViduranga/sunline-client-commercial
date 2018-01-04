import { Component, OnInit }      from '@angular/core';
import { TeledramaService }       from './teledrama.service';
import TeledramaModal             from './teledrama.modal';

@Component({
  selector: 'app-teledrama',
  templateUrl: './teledrama.component.html',
  styleUrls: ['./teledrama.component.css']
})
export class TeledramaComponent implements OnInit {
  teledramaList: Array<TeledramaModal>;
  page: number = 1;
  showmore: boolean = false;
  show_less: String = "Show More";

  constructor(private service: TeledramaService) { 
    this.teledramaList = new Array<TeledramaModal>();
  }

  ngOnInit() {
    this.service.getAllTeledramas().then(result => {
      this.teledramaList = result['data'];
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
