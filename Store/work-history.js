// store/work-history.js
export const state = () => ({
  workHistory: [],
});

export const mutations = {
  addWorkHistory(state, workHistory) {
    state.workHistory.push(workHistory);
  },
};

export const actions = {
  addWorkHistory({ commit }, workHistory) {
    commit('addWorkHistory', workHistory);
  },
};
