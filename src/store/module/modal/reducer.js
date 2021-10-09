import { createStore } from "redux";

const INITIAL_STATE={
    modalState:[false]
};

export function handleModal(state=INITIAL_STATE, action){
    switch(action.type){
        case 'MODAL_HADLER':      
        return {
            ...state,modalState:!state.modalState
          };
        
        default:{
            return state;
        }

}}  
            



