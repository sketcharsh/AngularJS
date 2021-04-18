import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() demo:{type:String,name:String}
  constructor() { }

  ngOnInit() {
  }

}
// ng g c child --spec false