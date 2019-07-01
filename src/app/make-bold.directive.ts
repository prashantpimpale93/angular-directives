import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMakeBold]'
})
export class MakeBoldDirective {

  constructor(private el?: ElementRef, private renderer?: Renderer) {
    this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', 'bold');
  }

}
