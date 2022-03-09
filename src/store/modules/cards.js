import {NUMBER,PICTURE} from "@/common/types.js"
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
    },

    updateNumberCard: (state,payload) => {
        //payload.card
        for(let i = 0; i < state.numberCards.length; i++){
            for(let j = 0; j < state.numberCards[i].length; j++){
                let currCard = state.numberCards[i][j];
                if(currCard.id === payload.card.id){
                    state.numberCards[i].splice(j,1,payload.card);
                }
            }//end nested for
        }//end for

    },

};

const actions = {
    //TODO: API call
    //Generic Card logic
    shuffleCards({commit},payload){
        const cardType = payload.cardType; //either number or picture
        let shuffleCards = [];

        if(cardType === NUMBER){
            commit('numberCards',shuffleCards);
        }else if(cardType === PICTURE){
            //TODO: change to picture
            commit('numberCards',shuffleCards);
        }//end if-elseif

    },//end shuffleCards

    /*Number Card logic*/
    generateNumberCards({commit},payload){
        //generates the numbers for the number matrix
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
    },

    updateNumberCard({commit},payload){
        commit('updateNumberCard',payload);
    },

};

export default {
    state,
    getters,
    mutations,
    actions
}