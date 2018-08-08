import { Injectable } from '@angular/core';
import { Hotel } from './hotel';


@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  hotel: Hotel;
  constructor() { }
}
