import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  hotels: Hotel[];

  hotel: Hotel;
  selectedHotel: Hotel;


  constructor(public hotelService: HotelService, private router: Router ) { }
  getHotels(): void {
    this.hotelService.getHotels()
        .subscribe(hotels => this.hotels = hotels);
  }
  getHotel(hotel: Hotel): void {
    console.log(hotel.name);
    this.hotelService.selectedHotel = hotel;
    this.router.navigate(['/details']);
  }


  ngOnInit() {
    this.getHotels();
  }

}
