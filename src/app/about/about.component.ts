import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  ngOnInit(): void {
    console.log("This is the about page")
  }
}
