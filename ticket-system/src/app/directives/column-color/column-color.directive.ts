import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { Column } from '../../ticket-box/column/column.component';

@Directive({
  selector: '[appColumnColor]',
  standalone: true,
})
export class ColumnColorDirective implements OnInit {
  private el: HTMLElement = inject(ElementRef).nativeElement;
  @Input() appColumnColor!: Column;
  ngOnInit(): void {
    this.el.style.backgroundColor = `${this.appColumnColor.primaryColor + this.appColumnColor.opacity}`;
    this.el.style.border = this.appColumnColor.primaryColor;
    this.el.style.borderWidth = '2px';
    this.el.style.borderStyle = 'dotted';
  }
}
