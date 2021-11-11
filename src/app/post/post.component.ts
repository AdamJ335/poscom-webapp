import { Component, OnInit } from '@angular/core';
import {Post} from "./post";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
