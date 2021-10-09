import { type } from "os";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function addMusicaLista(lista){
    console.log(lista)
    return{
        type:'ADD_MUSICA_LISTA',
        payload:{
            lista,
        },
    };
};

export function removeMusicaLista(lista){
    return{type:'REMOVE_MUSICA_LISTA',
    payload:{
        lista,
    },
};
};