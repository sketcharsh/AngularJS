import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor='skyblue';
  }

  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    this.backgroundColor='pink'
  }

  @HostBinding('style.backgroundColor') backgroundColor:string='transparent'

  constructor() { }

}
