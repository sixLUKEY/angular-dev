import { BORDER_STYLE } from '../../enums/enums';
import { TICKET_STATUS } from '../ticket/ticket';
import { Column } from './column.component';

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

export const defaultColumnStyle: ColumnStyle = {
  primaryColor: '#C7392C',
  opacity: 100,
  borderStyle: BORDER_STYLE.none,
  backgroundColor: '#E9E9E9',
};

export const columnList: Column[] = [
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
