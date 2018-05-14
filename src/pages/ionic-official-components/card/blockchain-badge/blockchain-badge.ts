import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-blockchain-badge',
  templateUrl: 'blockchain-badge.html'
})
export class BlockchainBadgePage {
  cards = [
    {
    imageUrl: 'assets/img/blockchain/bitcoin-game.png',
      title: 'Bitcoin custom contracts for games, 2000$+ ',
      description: 'Bitcoin custom contracts for gaming operations, comprising samples that can be used to control rewards in games on blockchain.',
      albums: 9,
      followers: '260k'
    },
    {
      imageUrl: 'assets/img/blockchain/bitcoin-wallet.png',
      title: 'Bitcoin custom contracts for wallet operation, 2000$+ ',
      description: 'Bitcoin custom contracts for financial and wallet operation on blockchain.',
      albums: 4,
      followers: '120k'
    },
 {
      imageUrl: 'assets/img/blockchain/bitcoin-wallet-solution.png',
      title: 'Bitcoin wallet, contact for price. ',
      description: 'Wallet management solution, to issue and manage multiple wallets.',
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
