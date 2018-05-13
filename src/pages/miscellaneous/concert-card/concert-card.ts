import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-concert-card',
  templateUrl: 'concert-card.html',
})
export class ConcertCardPage {

  concerts = [
    {
      name: 'Bitcoin Training 2018',
      artistName: 'Belavadi N Ramesh ',
      artistImage: 'assets/img/misc/kanye_west.png',
      color: '#f73e53'
    },
    {
      name: 'Bitcoin Workshop 2018',
      artistName: 'Belavadi N Ramesh ',
      artistImage: 'assets/img/misc/kanye_west.png',
      color: '#0be3ff'
    },
    {
      name: 'Bitcoin Basics 2018',
      artistName: 'Belavadi N Ramesh ',
      artistImage: 'assets/img/misc/kanye_west.png',
      color: '#fdd427'
    },
  ];

  constructor(public navCtrl: NavController) { }
}
