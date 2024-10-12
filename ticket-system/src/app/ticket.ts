export interface Ticket {
  id: string;
  name: string;
  description: string;
  todos: Todo[];
  status: TICKET_STATUS;
}

export interface Todo {
  task: string;
  completed: boolean;
  time: Date;
}

export enum TICKET_STATUS {
  IN_PROGRESS,
  COMPLETED,
  ON_HOLD,
  DEFAULT,
}
