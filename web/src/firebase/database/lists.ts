import {
  ref, onValue, DataSnapshot, push, child,
} from 'firebase/database';

import database from '@/firebase/database';
import auth from '@/firebase/auth';

const listsRef = ref(database, 'lists');

interface ListenCallbackArgType {
  uid: string;
  name: string;
  type: string;
  headers: string[]
}
export const listen = (callback: (data: ListenCallbackArgType[] | null) => void): void => {
  onValue(child(listsRef, auth.currentUser?.uid || ''), (snapshot) => {
    const data = snapshot.val() ? Object.entries<Omit<ListenCallbackArgType, 'uid'>>(snapshot.val()).map(([uid, list]) => ({ ...list, uid })) : null
    callback(data);
  })
};

interface CreateListParams {
  name: string;
  type: string;
  headers: string[];
}
export const create = async ({ headers, name, type }: CreateListParams): Promise<void> => {
  if (!auth.currentUser) throw new Error('Unauthenticated');

  const headersRef = await push(ref(database, 'list_headers'), headers);

  const userList = child(listsRef, auth.currentUser.uid)
  await push(userList, { name, type, headersId: headersRef.key });
}
