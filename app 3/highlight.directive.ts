import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  constructor(private renderer:Renderer2,private elRef:ElementRef) { }
  ngOnInit()
  {
    //  this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow')
  }
  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow')
    this.backgroundColor = "#15FFF7";
  }
  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','skyblue')
    this.backgroundColor = "yellow";
  }

  @HostBinding('style.backgroundColor') backgroundColor: string='transparent';
}
