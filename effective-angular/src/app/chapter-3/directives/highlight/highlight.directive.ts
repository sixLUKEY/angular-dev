import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[btLibsUiHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  private el: HTMLElement = inject(ElementRef).nativeElement;
  constructor() {}
  ngOnInit(): void {
    this.el.style.backgroundColor = 'blue';
  }
}
