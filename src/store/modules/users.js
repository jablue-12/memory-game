const state = {
    current: null, //current user
    all: [], //all users
};

const getters = {
    current: (state) => {
        return state.current;
    },

    all: (state) => {
        return state.all;
    }
};

const mutations = {
    current: (state,payload) => {
        state.current = payload.current;
    },
    all: (state,payload) => {
        state.all = payload.all;
    }
};

const actions = {
    //TODO: API CALL (include async)
    
    current({commit}){
        const current = {username: "Jablue", score: 7};
        commit('current',{current: current});
    },

    all({commit}){
        //TODO: add difficulty level 
        //scores: [{difficulty: "easy", value: 7},{difficulty: "hard", value: 3}]
        const all = [
            {username: "Jablue", time: 20, score: 10},
            {username: "Gabokski", time: 20, score: 7},
            {username: "Arvayne", time: 20, score: 3},
            {username: "ThePinoy23", time: 20, score: 5},
            {username: "TryHardTran", time: 20, score: 6},
            {username: "Bart", time: 20, score: 9},
            {username: "Ardeen", time: 20, score: 9}
        ];
        commit('all',{all: all});
    },

    //TODO: do we need to update the current's user score?
    // appendScoreToCurrent({commit}){
        
    //     console.log("users/actions");
    // }

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}