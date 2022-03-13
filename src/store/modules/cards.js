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
    shuffleCards({getters},payload){
        const cardType = payload.cardType; //either number or picture
        const dimension = payload.dimension;
        let shuffleCards = [];


        if(cardType === NUMBER){
            shuffleCards = getters.numberCards;
            // commit('numberCards',shuffleCards);
        }else if(cardType === PICTURE){
            //TODO: change to picture
            shuffleCards = getters.numberCards;
            // commit('numberCards',shuffleCards);
        }//end if-elseif

        let randomX,randomY; //random positions

        for(let x = 0; x < shuffleCards.length; x++){
            for(let y = 0; y < shuffleCards[x].length; y++){
    
                randomX = Math.floor(Math.random() * dimension);
                randomY = Math.floor(Math.random() * dimension);

                //swap two cards' positions
                let currCard = shuffleCards[x][y];
                let randomCard = shuffleCards[randomX][randomY]; 

                shuffleCards[x].splice(y,1,randomCard);
                shuffleCards[randomX].splice(randomY,1,currCard);

            }//end nested for 
        }//end for

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