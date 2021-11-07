/* eslint-disable import/no-cycle */
import { createLogger, createStore } from 'vuex';

import { store as auth, State as AuthState } from './modules/auth';

export interface RootState {
  auth: AuthState
}

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

const store = createStore<RootState>({
  plugins,
  modules: {
    auth,
  },
});

export default store;
