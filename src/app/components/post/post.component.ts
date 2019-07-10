import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BlogDataService } from "../../services/blog-data.service";
import { LoginService } from "../../services/login.service";
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent {

  post: any;
  postAuthor: any;
  commentsPost: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private blogService: BlogDataService,
    private loginService: LoginService,
    private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.post = this.blogService.getPosts().subscribe((res: any) => {
        res.map((element) => {
          if (element.title === (params['id'])) {
            return this.post = element;
          }
        })
      })
    })

    this.loginService.getUsers().subscribe((res: any) => {
      res.map((element) => {
        if (element.id === this.post.author) {
          this.postAuthor = element;
        }
      })
    })

    this.postService.getComentsPost().subscribe((res: any) => {
      res.map((element) => {
        if (element.postId === this.post.author) {
          this.commentsPost.push(element);
        }
      })
    })
  }

}



