import { Component, OnInit }        from '@angular/core';
import { CommercialService }        from './commercial.service';
import CommercialModal              from './commercial.modal';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  commercialList: Array<CommercialModal>;
  page: number;
  showmore: boolean = false;
  show_less: String = "Show More";

  constructor(private commercialService: CommercialService) {
    this.commercialList = new Array<CommercialModal>();
    this.page = 1;
  }

  ngOnInit() {
    this.commercialService.getAllCommercials().then(results => {
      this.commercialList = results["data"];
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
