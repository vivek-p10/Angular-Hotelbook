import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  hotels: Hotel[];

  hotel: Hotel;


  constructor(private hotelService: HotelService) { }
  getHotels(): void {
    this.hotelService.getHotels()
        .subscribe(hotels => this.hotels = hotels);
  }



  ngOnInit() {
    this.getHotels();
  }

}
