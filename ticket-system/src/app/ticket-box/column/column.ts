import { TICKET_STATUS } from '../../ticket';

export interface ColumnInterface {
  position: number;
  primaryColor: string;
  opacity: number;
  name: string;
  hoveredTicketStatus: TICKET_STATUS;
}
