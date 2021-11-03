import {
  getAuth, GoogleAuthProvider, signInWithPopup, UserCredential,
} from '@firebase/auth';

import app from '@/firebase';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginWithGoogle = async (): Promise<UserCredential> => signInWithPopup(auth, provider);

export default loginWithGoogle;
