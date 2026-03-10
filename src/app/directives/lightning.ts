import { Directive, ElementRef, HostListener, Input } from '@angular/core';
const DEFAULT_HIGHLIGHT_COLOR = 'yellow';

@Directive({
  selector: '[appLightning]',
})
export class Lightning {
  @Input() highlightColor: string = DEFAULT_HIGHLIGHT_COLOR;
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor);
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }
  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
