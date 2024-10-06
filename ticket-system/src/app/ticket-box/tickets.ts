import { Ticket, TICKET_STATUS, Todo } from '../ticket';

export class BoxTicket implements Ticket {
  ticket: Ticket;
  id: string;
  name: string;
  todos: Todo[];
  status: TICKET_STATUS;
  description: string;

  constructor(ticket: Ticket) {
    this.ticket = ticket;
    this.id = ticket.id;
    this.name = ticket.name;
    this.todos = ticket.todos;
    this.status = ticket.status;
    this.description = ticket.description;
  }

  updateName(name: string): void {
    this.name = name;
  }

  updateDescription(description: string): void {
    this.description = description;
  }

  updateTicket(): void {
    validTickets.push(this);
  }

  static createTicket(ticket: Ticket): Ticket {
    return new BoxTicket(ticket);
  }
}

export const validTickets: BoxTicket[] = [];
