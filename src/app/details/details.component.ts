import { Component, OnInit, Renderer2 } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-details',
  template: `<style>
              .jumbotron {

                  border: 1px solid #777;
                  height: 87.746vh;
                  margin-bottom:0rem;
                  background-repeat: no-repeat;
                  background-size: cover;
                }
              </style>
              <div class="jumbotron" id="bg" >
                <app-panel></app-panel>
              </div>`
})
export class DetailsComponent implements OnInit {
  selectedHotel: Hotel;
  constructor(private renderer: Renderer2) { }
  change() {
    const parent: HTMLElement = document.getElementById('bg');
    this.renderer.setStyle(parent, 'background-image', 'url(' + this.selectedHotel.link + ')');
  }


  getSelectedHotel(): void {
    this.selectedHotel = JSON.parse(sessionStorage.getItem('currentHotel'));
  }



  ngOnInit() {
    this.getSelectedHotel();
    this.change();
  }

}
