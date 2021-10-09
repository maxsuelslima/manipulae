import { modalHadler } from "../../store/module/modal/actions";
import { useEffect, useState,useCallback } from "react";
import { useSelector,useDispatch } from "react-redux";
import Modal from 'react-modal';
import { ListContainer } from "./styles";
import { removeMusicaLista } from "../../store/module/lista/action";


export function ListModal(){
    const dispatch=useDispatch();
    const [modalState,setModal]=useState(false);

    const modalEstado=useSelector((state)=>state.handleModal)
    const handleModal=useCallback((teste)=>{dispatch(modalHadler(teste))},[dispatch])
  
    useEffect(()=>{setModal(modalEstado.modalState)},[modalEstado.modalState])
    const maxsuel=useSelector((state)=>state.store.items) 

    const handdleRemoveProductLista=useCallback((lista)=>{
        (dispatch(removeMusicaLista(lista)))
        },[dispatch]);

    

    console.log(maxsuel)
    return(
        <Modal isOpen={!modalState} 
        onRequestClose={handleModal}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-content">
            <ListContainer>
            {
                maxsuel.map(
                    teste=>(
                        <div className="track-handler">
                            <img src={teste.lista.album.cover_medium} alt="teste" />
                            <p>{teste.lista.title}</p>
                            <p>{teste.lista.album.title}</p>
                            <p>{teste.lista.artist.name}</p>
                            <button onClick={()=>handdleRemoveProductLista(teste.lista)}>remove</button>
                        </div>
                        )
                    )
                }
            </ListContainer>
        </Modal>
    )
}
