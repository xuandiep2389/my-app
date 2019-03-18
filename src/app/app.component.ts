import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = [
    new Hero(1, 'thor'),
    new Hero(2, 'cap'),
    new Hero(3, 'iron'),
    new Hero(4,"hulk")
  ];

  title: string;
  myHero = this.heroes[0];

  constructor() {
    this.title = "Tour of hero"
  }



}
