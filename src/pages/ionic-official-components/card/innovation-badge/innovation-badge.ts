import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-innovation-badge',
  templateUrl: 'innovation-badge.html'
})
export class InnovationBadgePage {
  cards = [
    {
    imageUrl: 'assets/img/innovation/game.png',
      title: 'Gaming improvement using blockchain, 2000$/month ',
      description: 'Innovate and improve gaming industry using bitcoin blockchain. Submit problems, get solution. ',
      albums: 9,
      followers: '260k'
    },
    {
    imageUrl: 'assets/img/innovation/financial.png',
      title: 'Financial domain improvement using blockchain, 2000$/month ',
      description: 'Bitcoin custom contracts for financial and wallet operation on blockchain.',
      albums: 4,
      followers: '120k'
    },
    {
    imageUrl: 'assets/img/innovation/security.png',
      title: 'Security domain improvement using blockchain, 2000$/month ',
      description: 'Apply blockchain to improve security in web, mobile, transaction.',
      albums: 4,
      followers: '120k'
    },
 {
    imageUrl: 'assets/img/innovation/asset.png',
      title: 'Asset, token, coupon management innovation. 2000$/month ',
      description: 'Provide innovative solution for assets, token and coupon industry.',
      albums: 4,
      followers: '120k'
    },];

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
