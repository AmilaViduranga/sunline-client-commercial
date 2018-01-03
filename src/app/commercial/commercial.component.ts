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
  constructor(private commercialService: CommercialService) {
    this.commercialList = new Array<CommercialModal>();
  }

  ngOnInit() {
    this.commercialService.getAllCommercials().then(results => {
      this.commercialList = results["data"];
    })
  }

}
