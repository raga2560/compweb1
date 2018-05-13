import { Component , ViewChild} from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('slider') slider: Slides;
  rootPage: any;
  items: Array<{ title: string, page: any }>;
  //slider: Slides;
  

 slides = [
    {
      title: '',
   imageUrl: 'assets/img/block1/on_the_road.png',
      songs: 2,
      private: false
    },
    {
      title: '',
      imageUrl: 'assets/img/block1/taking_off.png',
      songs: 4,
      private: false
    },
    {
      title: '',
      imageUrl: 'assets/img/block1/taking_off_rocket.png',
      songs: 5,
      private: true
    }
  ];
  

  constructor(public navCtrl: NavController) {
    this.rootPage = HomePage;
    this.items = [
      // {
      //   title: 'Carousel',
      //   page: 'SlideCarouselPage'
      // },
      
      {
        title: 'Login',
        page: 'LoginSliderPage'
      },
	  {
        title: 'Insurances',
        page: 'InsurancesPage'
      },
      {
        title: 'Status',
        page: 'StatusPage'
      }
      // {
      //   title: 'Photo Gallery (not working)',
      //   page: 'SlidePhotoGalleryPage'
      // },
    ];
	 /*for (let i = 0; i < 20; i++) {
      this.slides.push(this.slides[i % 4]);
    } */
  }

   onSlideChanged() {
    const currentIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', currentIndex);
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
