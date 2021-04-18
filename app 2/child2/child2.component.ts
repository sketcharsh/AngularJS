import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() abc:EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  onClick(){
    this.abc.emit("Message from Child.");
  }

  ngOnInit() {
  }

}
