import { ref, Ref } from 'vue'
import { listen, create } from '@/firebase/database/lists';

type List = {
  uid: string;
  name: string;
  type: string;
  headers: string[];
}

interface UseUserListsReturn {
  lists: Ref<List[]>;
  create: typeof create
}

export default function useUserLists(): UseUserListsReturn {
  const lists = ref([] as List[]);

  listen((data) => { lists.value = data || [] });

  return {
    lists,
    create,
  }
}
