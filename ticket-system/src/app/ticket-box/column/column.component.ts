import { Component, Input } from '@angular/core';
import { ColumnInterface, ColumnStyle } from './column';
import { ColumnColorDirective } from '../../directives/column-color/column-color.directive';
import { BORDER_STYLE } from '../../enums/enums';
import { existingTickets, Ticket, TICKET_STATUS } from '../ticket/ticket';

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
  tickets: Ticket[];
  ticketIds: string[] = [];

  constructor(
    position: number,
    name: string,
    ticketIds?: string[],
    style?: ColumnStyle,
  ) {
    this.position = position;
    this.name = name;
    this.style = style || defaultColumnStyle;
    this.ticketIds = this.ticketIds || ticketIds;
    this.tickets = this.initTickets(ticketIds);
  }

  initTickets(ticketIds?: string[]): Ticket[] {
    let tickets: Ticket[] = [];

    if (!ticketIds || ticketIds.length < 1) return tickets;

    return (tickets = ticketIds
      .map((t) => {
        existingTickets.find((ticket) => ticket.id === t);
      })
      .filter((t) => t !== undefined));
  }
}

const defaultColumnStyle: ColumnStyle = {
  primaryColor: '#C7392C',
  opacity: 100,
  borderStyle: BORDER_STYLE.none,
  backgroundColor: '#E9E9E9',
};

export const columnInfo = [
  {
    position: 1,
    name: 'default',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    style: defaultColumnStyle,
    ticketIds: ['123', '1234'],
  },
  {
    position: 2,
    name: 'TICKETS',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    style: defaultColumnStyle,
    ticketIds: [],
  },
  {
    position: 3,
    name: 'TODOS',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    style: defaultColumnStyle,
    ticketIds: ['12345'],
  },
  {
    position: 4,
    name: 'ARCHIVE',
    hoveredTicketStatus: TICKET_STATUS.DEFAULT,
    style: defaultColumnStyle,
    ticketIds: ['123456'],
  },
];
