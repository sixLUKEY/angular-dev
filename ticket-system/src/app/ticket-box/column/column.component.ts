import { Component, Input } from '@angular/core';
import { ColumnInterface, ColumnStyle, defaultColumnStyle } from './column';
import { ColumnColorDirective } from '../../directives/column-color/column-color.directive';
import { existingTickets, Ticket, TICKET_STATUS } from '../ticket/ticket';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [ColumnColorDirective, TicketComponent],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css',
})
export class ColumnComponent {
  @Input() column!: Column;
  // tickets: Ticket[];

  constructor() {
    // this.tickets = this.initTickets(this.column.ticketIds);
    // console.log(this);
    // console.log(this.initTickets(this.column.ticketIds));
  }

  initTickets(ticketIds?: string[]): Ticket[] {
    let tickets: Ticket[] = [];

    if (!ticketIds || ticketIds.length < 1) return tickets;

    return (tickets = ticketIds
      .map((t) => {
        return existingTickets.find((ticket) => ticket.id === t);
      })
      .filter((t) => t !== undefined));
  }
}

export class Column implements ColumnInterface {
  position: number;
  name: string;
  hoveredTicketStatus: TICKET_STATUS = TICKET_STATUS.DEFAULT;
  style?: ColumnStyle;
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
  }
}
