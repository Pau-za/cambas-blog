import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(private http: HttpClient, 
    private blogServ: BlogDataService) {
    
  }

  getPosts(){
    return this.http.get('https://cors-anywhere.herokuapp.com/http://3.14.129.214:3000/posts');
  }
}
