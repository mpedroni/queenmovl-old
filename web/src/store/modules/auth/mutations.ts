import { MutationTree } from 'vuex';

import UserCredential from '@/types/UserCredential';

import { State } from './state';

export interface Mutations<S = State> {
  setAuth(state: S, payload: UserCredential): void;
}

export const mutations: MutationTree<State> & Mutations = {
  setAuth(state: State, auth: UserCredential) {
    const { operationType, providerId, user } = auth;
    state.operationType = operationType;
    state.providerId = providerId;
    state.user = user;
  },
};
