import { Component, OnInit }  from '@angular/core';

@Component({
  selector: 'app-foundation-home',
  templateUrl: './foundation-home.component.html',
  styleUrls: ['./foundation-home.component.css']
})
export class FoundationHomeComponent implements OnInit {
  teamMemebers: Array<any>;

  constructor() { 
    this.teamMemebers = new Array<any>();
    this.teamMemebers = [
      {
        name: "A.M.J.Amarakon",
        image: "managing_director.jpg",
        possition: "President"
      },
      {
        name: "Ven Watinapaha Somananda Thero",
        image: "chief_advisor.jpg",
        possition: "Chief Advisor"
      },
      {
        name: "Ven Watinapaha Somananda Thero",
        image: "sumana_thero.jpg",
        possition: "Cultural Afairs Chief"
      },
      {
        name: "Mr James Kim",
        image: "main_international_sponser.jpg",
        possition: "Main International Sponsor"
      },
      {
        name: "Mrs Jammeela Hameed",
        image: "Jameela.jpg",
        possition: "Charity Development Director"
      },
      {
        name: "Mr T.H.Chandane De Silva",
        image: "Chandana-de-silva.jpg",
        possition: "New Project Director, International"
      },
      {
        name: "Mrs A.M.S.Nayomi Welagedara",
        image: "Niromy.jpg",
        possition: "Coordinating Director- Japan"
      },
      {
        name: "Anusha Damayanthi",
        image: "Anusha-Damayanthi.jpg",
        possition: "Local & International Cordinator for Srilankan Artiste"
      },
      {
        name: "Mrs Dhammika K. Fernando",
        image: "Dhammika-Fernando1.jpg",
        possition:"Malaysia Project Director - International"
      }, 
      {
        name: "Mr Harsha B Abekoon",
        image: "HA.jpg",
        possition:"Coordinator of the media"
      },
      {
        name: "Mr Thilak Hathurusinghe",
        image: "Hathurusinghe.jpg",
        possition:"Medical Analyst of the awardes"
      },
      {
        name: "Mr Muthubanda",
        image: "Muthubanda.jpg",
        possition:"Vedda's Cultural Afairs Director"
      },
      {
        name: "Mr Gamini Maligapse",
        image: "Maligaspe.jpg",
        possition:"General Secretary"
      },
      {
        name: "Mr Kapila Prasanna",
        image: "KP.jpg",
        possition: "Media Coordinator"
      },
      {
        name: "Mr Waruuna Gallage",
        image: "Waruna-Gallage.jpg",
        possition: "Director - Funds Development "
      },
      {
        name: "Mr Obinamuni Gamini De Silva",
        image: "Gamini.jpg",
        possition: "Coordinating Director of human affairs"
      },
      {
        name: "Mr B.M.Henry Perera",
        image: "HP.jpg",
        possition: "Director Social Activities"
      }
    ]
  }

  ngOnInit() {
  }

  
  
}
