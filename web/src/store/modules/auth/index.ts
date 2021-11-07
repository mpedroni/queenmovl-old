/* eslint-disable import/no-cycle */
import { Module, Store as VuexStore, CommitOptions } from 'vuex'

import { RootState } from '@/store';

import { state, State } from './state';
import { mutations, Mutations } from './mutations';

export type { State };

export type AuthModule<S = State> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
}

export const store: Module<State, RootState> = {
  namespaced: true,
  state,
  mutations,
}
