import { Component, OnInit } from '@angular/core';
import { TravelsService, Itravel } from '../travels.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  travelsList: Itravel;
  constructor(public travel: TravelsService) { }

  async ngOnInit() {
    await this.travel.init()
    
    this.travel.all().then((data: Itravel) => {
      this.travelsList = data
    })
  }

}
