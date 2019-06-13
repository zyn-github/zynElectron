const state = {
    main: 0,
    visitInfo: {}
}

const mutations = {
    DECREMENT_MAIN_COUNTER (state) {
        state.main--
    },
    INCREMENT_MAIN_COUNTER (state) {
        state.main++
    },
    STE_VISIT_INFO(state, info){
        console.log(info, 'visitInfo');
        state.visitInfo = info;
    }
}

const actions = {
    someAsyncTask ({ commit }) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER')
    }
}

export default {
    state,
    mutations,
    actions
}
