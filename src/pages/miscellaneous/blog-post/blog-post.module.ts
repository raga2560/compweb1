import { BlogPostPage } from './blog-post';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogService } from './blog-service';

@NgModule({
  declarations: [
    BlogPostPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogPostPage),
  ],
  exports: [
    BlogPostPage
  ],
  providers : [
   BlogService
  ]
})

export class BlogPostPageModule { }
