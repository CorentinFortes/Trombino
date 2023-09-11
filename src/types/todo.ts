export type TodoType = {
  id: string;
  userId: number;
  done: boolean;
  title: string;
  description: string;
  type: 'urgent' | 'important' | 'normal';
};
