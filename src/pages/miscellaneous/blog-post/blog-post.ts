import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { BlogService } from './blog-service';


@IonicPage()
@Component({
  selector: 'page-blog-post',
  templateUrl: 'blog-post.html'
})
export class BlogPostPage {

  posts: any;
  constructor(public navCtrl: NavController, public blogService: BlogService) {
  this.posts = '';
  }

ionViewDidLoad() {
        this.blogService.getPosts().subscribe(posts  => {
	console.log(posts);
      this.posts = posts._body;
    });

  }

}
