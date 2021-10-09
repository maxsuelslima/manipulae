import { createStore } from "redux";
import produce from 'immer';
const INITIAL_STATE={
    items:[]
};

export function store(state=INITIAL_STATE, action){
    return produce(state, draft=>{
        
    switch(action.type){
        case 'ADD_MUSICA_LISTA':{
            console.log(draft.items)
            draft.items.push(action.payload)
            break;
            }
            
        case 'REMOVE_MUSICA_LISTA':{
            draft.items.filter(item => item.id !== action.payload.id)
            const x=draft.items.filter(item => item.id !== action.payload.id)
            console.log(x)
        }
        default:{

            return state;

        }

}})}


            



