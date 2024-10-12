import { Component, Input } from '@angular/core';
import { ColumnInterface } from './column';
import { TICKET_STATUS } from '../../ticket';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css',
})
export class ColumnComponent {
  @Input() column: Column;
  constructor(column: Column) {
    this.column = column;
  }
}

export class Column implements ColumnInterface {
  position: number = 1;
  name: string = '';
  opacity: number = 100;
  primaryColor: string = 'purple';
  hoveredTicketStatus: TICKET_STATUS = TICKET_STATUS.DEFAULT;

  constructor(position: number, name: string) {
    this.position = position;
    this.name = name;
  }
}

export const columnArray: Column[] = [
  new Column(1, 'Tickets'),
  new Column(2, 'TODOS'),
];
