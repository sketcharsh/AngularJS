import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chlid1',
  templateUrl: './chlid1.component.html',
  styleUrls: ['./chlid1.component.css']
})
export class Chlid1Component implements OnInit {
  @Input() demo:{tyep:String,name:String};

  constructor() { }

  ngOnInit() {
  }

}
