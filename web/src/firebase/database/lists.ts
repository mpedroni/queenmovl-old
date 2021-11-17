import { ref, onValue } from 'firebase/database';

import database from '@/firebase/database';
import snapshotToArray from '@/firebase/utils/snapshotToArray';

const listsRef = ref(database, 'lists');

const list = (): void => {
  onValue(listsRef, (snapshot) => {
    console.log(snapshotToArray(snapshot.val()));
  })
}

export default list;
