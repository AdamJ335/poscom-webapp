import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = {
    title: "OMG Harry Styles' hair",
    description: "his new hair is insane",
    points: 23,
    comments: [
      "yeah youre right",
      "no thats just bad like you"
    ],
    tags: [
      "harry styles",
      "one direction",
      "hair"
    ]
  }

  posts = {
    post1: this.post,
    post2: this.post,
    post3: this.post,
    post4: this.post,
    post5: this.post,
    post6: this.post,
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.posts)
  }
}
