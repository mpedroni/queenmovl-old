import {
  getAuth, GoogleAuthProvider, signInWithPopup, UserCredential, connectAuthEmulator,
} from '@firebase/auth';

import app from '@/firebase';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* eslint-disable no-restricted-globals */
if (location.hostname === 'localhost') {
  connectAuthEmulator(auth, 'http://localhost:9099');
}

const loginWithGoogle = async (): Promise<UserCredential> => signInWithPopup(auth, provider);

export default loginWithGoogle;
