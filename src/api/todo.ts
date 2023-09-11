import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { EmployeeDetail } from './api';
import { TodoType } from '../types/todo';

export const addTodo = async (
  profile: EmployeeDetail,
  title: string,
  description: string,
  type: 'urgent' | 'important' | 'normal',
) => {
  if (profile) {
    addDoc(collection(FIRESTORE_DB, 'todo'), {
      userId: profile.id,
      title: title,
      description: description,
      done: false,
      type: type,
    });
  }
};

export const removeTodo = async (id: string) => {
  deleteDoc(doc(FIRESTORE_DB, 'todo', id));
};

export const updateDoneTask = async (id: string, done: boolean) => {
  updateDoc(doc(FIRESTORE_DB, 'todo', id), {
    done: done,
  });
};

export const getTodo = async (
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>,
  profile: EmployeeDetail,
) => {
  const q = query(
    collection(FIRESTORE_DB, 'todo'),
    where('userId', 'in', [profile.id]),
  );
  const snapshot = await getDocs(q);
  const tmpTodos: TodoType[] = [];
  snapshot.forEach((doc) => {
    tmpTodos.push({
      id: doc.id,
      userId: doc.data().userId,
      done: doc.data().done,
      title: doc.data().title,
      description: doc.data().description,
      type: doc.data().type,
    });
  });
  setTodos(tmpTodos);
};
