import {
  ref, onValue, child,
} from 'firebase/database';

import database from '@/firebase/database';
import auth from '@/firebase/auth';

const listsRef = ref(database, 'lists');

interface List {
  id: string;
  name: string;
  type: string;
  headerId: string
}

// eslint-disable-next-line import/prefer-default-export
export const listen = (callback: (data: List[] | []) => void): void => {
  if (!auth.currentUser) throw new Error('Unauthenticated');

  onValue(child(listsRef, auth.currentUser.uid), (snapshot) => {
    const data = snapshot.val() || [];
    const parsedData = Object.entries<Omit<List, 'id'>>(
      data,
    ).map(
      ([id, list]) => ({ ...list, id }),
    )
    callback(parsedData);
  })
};
