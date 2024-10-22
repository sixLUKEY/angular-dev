import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { Column } from '../../ticket-box/column/column.component';

@Directive({
  selector: '[appColumnColor]',
  standalone: true,
})
export class ColumnColorDirective implements OnInit {
  private el: HTMLElement = inject(ElementRef).nativeElement;
  @Input('appColumnColor') column!: Column;
  ngOnInit(): void {
    this.el.style.backgroundColor = `${this.column.primaryColor + this.column.opacity}`;
    this.el.style.border = this.column.primaryColor;
    this.el.style.borderWidth = '2px';
    this.el.style.borderStyle = 'dotted';
  }
}
