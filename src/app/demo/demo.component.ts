import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  names:Array<any>= ["jon", "sarah", "alex", "drew"]

blah:string = "Look, it looks like im yelling"

theDateVar: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
