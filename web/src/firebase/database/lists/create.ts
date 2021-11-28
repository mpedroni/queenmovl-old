import {
  ref, push, child,
} from 'firebase/database';

import database from '@/firebase/database';
import auth from '@/firebase/auth';

const listsRef = ref(database, 'lists');

interface List {
  name: string;
  type: string;
  headers: string[];
}

// eslint-disable-next-line import/prefer-default-export
export const create = async ({ headers, name, type }: List): Promise<void> => {
  if (!auth.currentUser) throw new Error('Unauthenticated');

  const headersRef = await push(ref(database, 'list_headers'), headers);

  const userList = child(listsRef, auth.currentUser.uid)
  await push(userList, { name, type, headersId: headersRef.key });
}
