import { createStore } from "redux";
import produce from "immer";

const INITIAL_STATE = {
  items: [],
};

export function store(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_MUSICA_LISTA": {
        console.log("add");
        draft.items = [...state.items, action.payload];
        break;
      }

      case "REMOVE_MUSICA_LISTA": {
        console.log("remove");
        draft.items = state.items.filter(
          (item) => item.lista.id !== action.payload.lista.id
        );
        break;
      }
      default: {
        return state;
      }
    }
  });
}
