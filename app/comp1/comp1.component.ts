import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
@Output() notify:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
onClick()
{
  this.notify.emit("Message from child");
}
}
