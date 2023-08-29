import {Component, OnInit} from '@angular/core';

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

  posts = [
    this.post,
    this.post,
    this.post,
    this.post,
    this.post,
    this.post,
  ]


  ngOnInit(): void {
    console.log(this.posts)
  }
}
