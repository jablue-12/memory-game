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
        const current = {username: "Jablue", scores: [{difficulty: "easy", value: 7},{difficulty: "hard", value: 3}]};
        commit('current',{current: current});
    },

    all({commit}){
        const all = [
            {username: "Jablue", scores: [{difficulty: "easy", value: 7},{difficulty: "hard", value: 3}]},
            {username: "Gabokski", scores: [{difficulty: "easy", value: 7},{difficulty: "hard", value: 3}]},
            {username: "Arvayne", scores: [{difficulty: "easy", value: 7},{difficulty: "hard", value: 3}]},
            {username: "ThePinoy23", scores: [{difficulty: "easy", value: 7},{difficulty: "hard", value: 3}]},
            {username: "TryHardTran", scores: [{difficulty: "easy", value: 7},{difficulty: "hard", value: 3}]},
            {username: "Bart", scores: [{difficulty: "easy", value: 7},{difficulty: "hard", value: 3}]},
            {username: "Ardeen", scores: [{difficulty: "easy", value: 7},{difficulty: "hard", value: 3}]}
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