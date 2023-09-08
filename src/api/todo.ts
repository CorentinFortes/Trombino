import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { EmployeeDetail } from './api';

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
