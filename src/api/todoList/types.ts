export interface ITodo {
  userId: Number;
  id: number | String;
  title: String;
  completed: Boolean;
}

export type IListTodo = ITodo[];
