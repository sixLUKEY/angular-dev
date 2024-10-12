import { Component, Input } from '@angular/core';
import { BoxTicket, validTickets } from './tickets';
import { Ticket } from '../ticket';
import { columnArray, ColumnComponent } from './column/column.component';

@Component({
  selector: 'app-ticket-box',
  standalone: true,
  imports: [ColumnComponent],
  templateUrl: './ticket-box.component.html',
  styleUrl: './ticket-box.component.css',
})
export class TicketBoxComponent {
  @Input() boxTickets: BoxTicket[] = validTickets;
  backlog: Ticket[] = [];
  inProgress: Ticket[] = [];
  archive: Ticket[] = [];
  columnArray = columnArray;
}
