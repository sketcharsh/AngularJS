import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appProduct]'
})
export class ProductDirective {

  @Input() clickColor;

  @HostBinding('style.backgroundColor') bgColor;

  @HostListener('click') myClick(){
    this.bgColor = this.clickColor;
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.bgColor = 'red'
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.bgColor = 'yellow'
  }

  constructor() { }

}
