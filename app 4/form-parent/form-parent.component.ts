import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.css'],
  animations: [
    trigger(
      "divState", [
      state("normal",
        style({
          'background-color': 'red', 'transform': 'translateX(0)'
        })),//state

      state("highlighted",
        style({
          'background-color': 'blue', 'transform': 'translateX(100px)'
        })//style
      ),//state

      transition('normal <=> highlighted', [
        animate('1s')
      ]),//transition
    ]),//trigger

    trigger(
      "listState",
      [state("in",
        style({
          'opacity': 1, 'transform': 'translateX(0)'
        })),//style

      transition('void => *', [
        style({
          transform: 'translateX(-100px)',
          opacity: 1
        }),
        animate(300)
      ]),//transition

      transition('* => void', [
        animate(300),
        style({
          transform: 'translateX(100px)',
          opacity: 1,
        }),//style

      ]),//transition
      ]//state
    ),//trigger

    trigger("shrunkState", [
      state("normal",
        style({
          'background-color': 'red', transform: 'tranlateX(0) scale(1)'
        })),//state

      state("highlighted",
        style({
          'background-color': 'blue', transform: 'translateX(0) scale(1)'
        })),//state

      state("shrunken",
        style({
          'background-color': 'green', transform: 'translateX(0) scale(0.5)'
        })),//state

        transition('normal <=> highlighted', [
          animate(500)
        ]),//transition

        transition('shrunken <=> *', [
          style({
            'background-color':'orange'
          }),//style
          animate(500)
        ]),//transition
    ])//trigger

  ] //animation
})
export class FormParentComponent implements OnInit {

  constructor() { }
  items = ['ann0nym0u$', 'som3', 'w3!!']
  state = "normal"
  shrunkstate = "normal"


  ngOnInit() {
  }
  onAnimate() {
    this.state == "normal" ? this.state = "highlighted" : this.state = "normal"
  }
  onShrink() {
    if (this.shrunkstate == "normal") 
    { 
      this.shrunkstate = "highlighted" 
    }
    else if (this.shrunkstate == "highlighted") 
    {
      this.shrunkstate = "shrunken"
    }
    else
    {
      this.shrunkstate = "highlighted"
    }

  }

  onAdd(item: string) {
    this.items.push(item)
  }
  onDelete(item: string) {
    this.items.splice(this.items.indexOf(item), 1)
  }

}
