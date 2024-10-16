import { Component, Input } from '@angular/core';
import { ColumnInterface } from './column';
import { TICKET_STATUS } from '../../ticket';
import { ColumnColorDirective } from '../../directives/column-color/column-color.directive';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [ColumnColorDirective],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css',
})
export class ColumnComponent {
  @Input() column!: Column;
}

export class Column implements ColumnInterface {
  position: number;
  name: string;
  opacity: number = 100;
  primaryColor: string = 'purple';
  hoveredTicketStatus: TICKET_STATUS = TICKET_STATUS.DEFAULT;

  constructor(position: number, name: string) {
    this.position = position;
    this.name = name;
  }
}

export const columnArray: Column[] = [
  {
    position: 1,
    name: 'default',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    primaryColor: '#ff0000',
    opacity: 50,
  },
  {
    position: 2,
    name: 'TICKETS',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    primaryColor: '#00ff00',
    opacity: 50,
  },
  {
    position: 3,
    name: 'TODOS',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    primaryColor: '#0000ff',
    opacity: 50,
  },
  {
    position: 4,
    name: 'ARCHIVE',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    primaryColor: '#ff00ff',
    opacity: 50,
  },
];
