export interface Ticket {
  id: string;
  name: string;
  description: string;
  todos: Todo[];
  status: TICKET_STATUS;
  commitHash: string;
}

export interface Todo {
  tasks: Task[];
  // completed: boolean;
  // time: any;
}

export interface Task {
  id: string;
  description: string;
  status: TASK_STATUS;
  time: string;
}

export enum TICKET_STATUS {
  IN_PROGRESS,
  COMPLETED,
  ON_HOLD,
  DEFAULT,
}

export enum TASK_STATUS {
  DEFAULT,
  COMPLETE,
  ON_HOLD,
  WONT_COMPLETE,
}

export const existingTickets: Ticket[] = [
  {
    id: '123',
    name: 'ticket-1',
    description: 'ticket-1 description',
    todos: [],
    status: TICKET_STATUS.DEFAULT,
    commitHash: '586eb9cd',
  },
  {
    id: '1234',
    name: 'ticket-1',
    description: 'ticket-1 description',
    todos: [],
    status: TICKET_STATUS.DEFAULT,
    commitHash: '586eb9cd',
  },
  {
    id: '12345',
    name: 'ticket-1',
    description: 'ticket-1 description',
    todos: [],
    status: TICKET_STATUS.DEFAULT,
    commitHash: '586eb9cd',
  },
  {
    id: '123456',
    name: 'ticket-1',
    description: 'ticket-1 description',
    todos: [],
    status: TICKET_STATUS.DEFAULT,
    commitHash: '586eb9cd',
  },
];
