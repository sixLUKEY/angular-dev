import { BORDER_STYLE } from '../../enums/enums';
import { TICKET_STATUS } from '../../ticket';

export interface ColumnInterface {
  position: number;
  name: string;
  hoveredTicketStatus: TICKET_STATUS;
  style?: ColumnStyle;
}

export interface ColumnStyle {
  primaryColor: string;
  opacity: number;
  borderStyle: BORDER_STYLE;
  backgroundColor: string;
}
