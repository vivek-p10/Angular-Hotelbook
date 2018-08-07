import { Component, OnInit } from '@angular/core';
import { HOTELS } from '../hotel-list';
import { Hotel } from '../hotel';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  hotels = HOTELS;
  hotel = Hotel;


  constructor() { }

  ngOnInit() {
  }

}
