import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-five',
  templateUrl: 'profile-five.html',
})
export class ProfileFivePage {

  user = {
    name: 'Belavadi N Ramesh',
    profileImage: '',
    coverImage: '',
    occupation: 'Blockchain solution designer',
    location: 'Bangalore, India',
    description: 'Develop blockchain applications in mobile and web environment.',
    address: '91 springboard, MG road, Bangalore, India ',
    phone: '91-9886626090',
    email: 'rbelavad@gmail.com',
    whatsapp: '91-9886626090'
  };

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileFivePage');
  }

}
