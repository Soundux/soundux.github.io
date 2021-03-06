import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { OperatingSystem } from '~/types';

export const state = () => ({
  selectedOS: null as OperatingSystem | null,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  selectedOS: state => state.selectedOS,
};

export const mutations: MutationTree<RootState> = {
  setSelectedOS: (state, newValue: OperatingSystem) => (state.selectedOS = newValue),
};

export const actions: ActionTree<RootState, RootState> = {};
