import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  lat: number = 6.854823199999999;
  lng: number = 79.89573240000004;
  constructor() { }

  ngOnInit() {
  }

}
