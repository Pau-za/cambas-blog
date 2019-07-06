import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  posts: any[] = [];
  constructor(private http: HttpClient, private blogServ: BlogDataService) {
    
  }

  getPosts(){
    this.http.get('http://3.14.129.214:3000/posts').subscribe((resp: any) => {
      this.posts = resp;
      console.log(this.posts);
    })
  }
}
