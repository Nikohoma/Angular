import { Directive, Renderer2,ElementRef, HostListener } from '@angular/core';


@Directive({   // Tells angular this class is a directive
  selector: "[appHighlight]",  // tells where to use this directive (wherever appHighlight is mentioned)
  standalone: true  // tells this directive can be imported directly, not to declare in app module
})

export class HighlightDirective {
  // ElementRef is a wrapper that gives direct access to a DOM element
  constructor(private e1: ElementRef, private renderer: Renderer2) { } 

  @HostListener('mouseenter')
  onEnter() { this.renderer.setStyle(this.e1.nativeElement, 'background-color', 'red') }

  @HostListener('mouseleave')
  onLeave() { this.renderer.removeStyle(this.e1.nativeElement, 'background-color'); }

}
