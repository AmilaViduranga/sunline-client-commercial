import { Component, OnInit }        from '@angular/core';
import { FoundationFounderService } from './foundation-founder.service';
import FoundationFounder            from './foundation-founder.modal';

@Component({
  selector: 'app-foundation-founder',
  templateUrl: './foundation-founder.component.html',
  styleUrls: ['./foundation-founder.component.css']
})
export class FoundationFounderComponent implements OnInit {

  founderList: Array<FoundationFounder>;
  page: number;

  constructor(private founderService: FoundationFounderService) {
    this.founderList = new Array<FoundationFounder>();
    this.page = 1;
  }

  ngOnInit() {
    this.founderService.getAllFounderInfo().then(result => {
      this.founderList = result['data'];
    }).catch(err => {
      console.log(err);
    })
  }
}
