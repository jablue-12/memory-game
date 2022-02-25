const state = {
    numberCards: [],
    pictureCards: []
};

const getters = {
    numberCards: (state) => {
        return state.numberCards;
    },

    pictureCards: (state) => {
        return state.pictureCards;
    }

};

const mutations = {
    numberCards: (state,payload) => {
        state.numberCards = payload;
    },

    pictureCards: (state,payload) => {
        state.pictureCards = payload;
    }

};

const actions = {
    //TODO: API call

    //=======
    //Card logic
    generateNumberCards({commit},payload){
        const pairs = (payload.dimension * payload.dimension) / 2;
        let createdMatrix = [];
        //instantiate the matrix
        for(let i = 0; i < payload.dimension; i++){
            createdMatrix[i] = new Array(payload.dimension);
        }

        let index = 0;
        for(let i = 0; i < createdMatrix.length; i++){
            for(let j = 0; j < createdMatrix[i].length; j++){
                let item = {id: index, name: "Card " + index%pairs, isFrontSide: false, hasPair: false}
                createdMatrix[i][j]= item;
                index++;
            }//end nested for
        }//end for

        commit('numberCards',createdMatrix);
    }

};

export default {
    state,
    getters,
    mutations,
    actions
}