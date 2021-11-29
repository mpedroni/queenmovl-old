import { ref, readonly } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';

import auth from '@/firebase/auth';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useAuth() {
  const user = ref(auth.currentUser);

  onAuthStateChanged(auth, (data) => { user.value = data })

  return {
    user: readonly(user),
  }
}
