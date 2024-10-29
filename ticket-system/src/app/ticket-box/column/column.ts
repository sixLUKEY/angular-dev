import { BORDER_STYLE } from '../../enums/enums';
import { TICKET_STATUS } from '../ticket/ticket';
import { Column, columnInfo } from './column.component';

export interface ColumnInterface {
  position: number;
  name: string;
  hoveredTicketStatus: TICKET_STATUS;
  ticketIds: string[];
  style?: ColumnStyle;
}

export interface ColumnStyle {
  primaryColor: string;
  opacity: number;
  borderStyle: BORDER_STYLE;
  backgroundColor: string;
}

export const existingColumns: Column[] = columnInfo.map((c) => {
  return new Column(c.position, c.name, c.ticketIds);
});
