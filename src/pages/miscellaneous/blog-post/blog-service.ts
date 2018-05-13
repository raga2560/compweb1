import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class BlogService {
  constructor(public http: Http) {}
/*

  getPosts(): Promise<FeedPostModel[]> {
    return this.http.get('./assets/html/blog-post.html')
               .toPromise()
               .then(response => response.json().feed as FeedPostModel[])
               .catch(this.handleError);
  }
*/
  getPosts(): any {
    return this.http.get('./assets/html/blog-post.html').map(res =>  res);


 }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

