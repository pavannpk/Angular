import { Component, OnInit } from '@angular/core';
/*import '../../../assets/images';*/
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public imgOne: string = '../../../assets/images/GOLD LOGO.jpg';
  public imgTwo: string = '../../../assets/images/DHONI.jpg';
  public imgThree: string = '../../../assets/images/CSK.jpg';
  public imgFr: string = '../../../assets/images/India flag.jpg';

  public names:string[] = ['NPK Logo', 'DHONI', 'CSK', 'INDIA' ];
  constructor() { }

  ngOnInit(): void {
  }

}
