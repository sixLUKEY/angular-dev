import { Component } from '@angular/core';
import { ColumnComponent } from './column/column.component';
import { Ticket } from './ticket/ticket';
import { existingColumns } from './column/column';

@Component({
  selector: 'app-ticket-box',
  standalone: true,
  imports: [ColumnComponent],
  templateUrl: './ticket-box.component.html',
  styleUrl: './ticket-box.component.css',
})
export class TicketBoxComponent {
  // @Input() boxTickets: BoxTicket[] = validTickets;
  backlog: Ticket[] = [];
  inProgress: Ticket[] = [];
  archive: Ticket[] = [];
  columnArray = existingColumns;
}
