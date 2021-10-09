import { ButaoPlayer, Container, ImgPlayer, ListButton, PlayerContainer } from "./styles";
import play from '../assets/iconmonstr-play-thin.svg'
import ant from '../assets/iconmonstr-previous-thin.svg'
import next from '../assets/iconmonstr-next-thin.svg'
import { useDispatch, useSelector } from "react-redux";
import { useState,useCallback, useEffect } from "react";
import Modal from 'react-modal';
import { modalHadler } from "../../store/module/modal/actions";
//import { lista } from "../../store/module/lista/reducer";

export function Rodape() {
    const dispatch=useDispatch();

    const handleModal=useCallback((teste)=>{dispatch(modalHadler(teste))},[dispatch])



    
    return(
    <Container>
            <PlayerContainer>
                <ButaoPlayer>
                <   ImgPlayer src={ant} alt='ant'/>
                </ButaoPlayer>
                <ButaoPlayer>
                    <ImgPlayer className="playbutton" src={play} alt='play'/>
                </ButaoPlayer>
                <ButaoPlayer>
                    <ImgPlayer src={next} alt='next'/>
                </ButaoPlayer>
            </PlayerContainer>
            <ListButton onClick={handleModal}>
                minha lista
            </ListButton>

        </Container>
        
  
    )
}