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
        const current = {username: "Jablue", scores: [7,8]};
        commit('current',{current: current});
    },

    all({commit}){
        const all = [
            {username: "Jablue", scores: [7,8]},
            {username: "Gabokski", scores: [3,2]},
            {username: "Arvayne", scores: [4]},
            {username: "ThePinoy23", scores: [7]},
            {username: "TryHardTran", scores: [4]},
            {username: "Bart", scores: [2]},
            {username: "Ardeen", scores: [5]}
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