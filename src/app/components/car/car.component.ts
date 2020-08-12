import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];

  constructor() { }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 552;
    this.model = 'RS8';
    this.colors = {
      car: 'red',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ["ABS", "autopilot", "Parking"];
  }
  carSelect(carName) {
    if(carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 688;
      this.model = 'M5';
      this.colors = {
        car: 'yellow',
        salon: 'btown',
        wheels: 'black'
      };
      this.options = ["масаж", "автопилот", "парктроник",];
    } else if(carName == 'mer') {
      this.name = 'Mercedes';
      this.speed = 323;
      this.model = 'C180';
      this.colors = {
        car: 'green',
        salon: 'white',
        wheels: 'red'
      };
      this.options = ["АБС", "просмотр фильмов", "Parking"];
    } else {
      this.name = 'Audi';
      this.speed = 552;
      this.model = 'RS8';
      this.colors = {
        car: 'red',
        salon: 'black',
        wheels: 'silver'
    };
    this.options = ["видеорегистратор", "автопилот", "просмотр фильмов", "масаж"];
    }
    
  }
}

interface Colors {
  car: string,
  salon: string,
  wheels: string
}
