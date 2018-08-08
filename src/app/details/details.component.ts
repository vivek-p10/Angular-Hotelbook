import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedHotel: Hotel;
  title = 'Hey';
  constructor(private hotelService: HotelService) { }


  getSelectedHotels(): void {
    this.selectedHotel = this.hotelService.selectedHotel;
    console.log(this.selectedHotel);
  }



  ngOnInit() {
    this.getSelectedHotels();
  }

}
