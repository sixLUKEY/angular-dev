import { Component, Input } from '@angular/core';
import { ColumnInterface, ColumnStyle } from './column';
import { TICKET_STATUS } from '../../ticket';
import { ColumnColorDirective } from '../../directives/column-color/column-color.directive';
import { BORDER_STYLE } from '../../enums/enums';

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
  hoveredTicketStatus: TICKET_STATUS = TICKET_STATUS.DEFAULT;
  style?: ColumnStyle;

  constructor(position: number, name: string, style?: ColumnStyle) {
    this.position = position;
    this.name = name;
    this.style = style || defaultColumnStyle;
  }
}

const defaultColumnStyle: ColumnStyle = {
  primaryColor: '#C7392C',
  opacity: 100,
  borderStyle: BORDER_STYLE.none,
  backgroundColor: '#E9E9E9',
};

export const columnArray: Column[] = [
  {
    position: 1,
    name: 'default',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    style: defaultColumnStyle,
  },
  {
    position: 2,
    name: 'TICKETS',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    style: defaultColumnStyle,
  },
  {
    position: 3,
    name: 'TODOS',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    style: defaultColumnStyle,
  },
  {
    position: 4,
    name: 'ARCHIVE',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    style: defaultColumnStyle,
  },
];
