import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BlogDataService } from "../../services/blog-data.service";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent {

  post: any;
  postAuthor: any;

  constructor(private activatedRoute: ActivatedRoute,
    private blogService: BlogDataService,
    private loginService: LoginService) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.post = this.blogService.getPosts().subscribe((res: any) => {
        res.map((element) => {
          if (element.title === (params['id'])) {
            console.log(element);
            return this.post = element;
          }
        })
        // this.post = res.;
        // console.log(this.tenPosts);
      })
    })

    this.loginService.getUsers().subscribe((res:any) => {
      res.map((element) => {
        if(element.id === this.post.author){
          this.postAuthor = element;
          console.log(this.postAuthor);
        }
      })
      
    })
  }
}



