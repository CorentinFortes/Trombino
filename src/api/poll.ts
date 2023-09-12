import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { Poll } from '../types/poll';
import { EmployeeDetail } from './api';

export const getPolls = async (
  setPolls: React.Dispatch<React.SetStateAction<Poll[]>>,
  profile: EmployeeDetail,
) => {
  const q = query(
    collection(FIRESTORE_DB, 'poll'),
    where('userId', 'in', [profile.id]),
  );
  const snapshot = await getDocs(q);
  const tmpPolls: Poll[] = [];
  snapshot.forEach((doc) => {
    tmpPolls.push({
      id: doc.id,
      title: doc.data().title,
      option1: doc.data().option1,
      option2: doc.data().option2,
      optionName1: doc.data().optionName1,
      optionName2: doc.data().optionName2,
      timestamp: doc.data().timestamp,
      closed: doc.data().closed,
    });
  });
  setPolls(tmpPolls);
};

export const votePoll = async (
  id: string,
  option: 'option1' | 'option2',
  poll: Poll,
) => {
  if (option === 'option1') {
    updateDoc(doc(FIRESTORE_DB, 'poll', id), {
      option1: poll.option1 + 1,
    });
  }
  if (option === 'option2') {
    updateDoc(doc(FIRESTORE_DB, 'poll', id), {
      option2: poll.option2 + 1,
    });
  }
};
