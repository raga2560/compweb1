import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-training-badge',
  templateUrl: 'training-badge.html'
})
export class TrainingBadgePage {
  cards = [
    {
      imageUrl: 'assets/img/training/Bitcoin-prog.png',
      title: 'Bitcoin Programming, 20000Rs, 2 days',
      description: 'Bitcoin programming, with mobile and web integration, comprising P2SH, P2PKH, ionic 3, node.js.',
      albums: 9,
      followers: '260k'
    },
    {
      imageUrl: 'assets/img/card/badu-live.png',
      title: 'Ionic 3 mobile app, 30000Rs, 2 days ',
      description: 'Ionic 2 mobile app development, comprising angular 2, node.js training.',
      albums: 4,
      followers: '120k'
    },
    {
      imageUrl: 'assets/img/training/Bitcoin-prog.png',
      title: 'Bitcoin basic programming, 20000Rs',
      description: 'Bitcoin programming, comprising P2SH, P2PKH, ionic 3, bitcoinjs-lib.',
      albums: 38,
      followers: '30mi'
    }
    ,];

  constructor(public navCtrl: NavController) {

  }

  cardTapped(card) {
    alert(card.title + ' was tapped.');
  }

  followersTapped(card) {
    alert(card.title + ' followers tapped.');
  }

  albumsTapped(card) {
    alert(card.title + ' albums tapped.');
  }
}
