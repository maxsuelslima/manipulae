
import { Testando, Titulo,ArrowDiv,ButaoArrow, AlbumContainer,AlbumHandler,ImgHandler,ImgCover, AlbumLink} from "./styles";
import {ReactComponent as ArrowEsquerda } from '../assets/iconmonstr-arrow-26.svg'
import {ReactComponent as Play } from '../assets/iconmonstr-play-thin.svg'
import {ReactComponent as Heart } from '../assets/iconmonstr-heart-thin.svg'
import {ReactComponent as More } from '../assets/iconmonstr-plus-2.svg'
import { fetchData } from "../../actions/pegarApi";
import {ActionTypes} from '../../constants/action-types'
import {useCallback, useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import { addMusicaLista } from "../../store/module/lista/action";
import lista from "../../store/module/lista/reducer";
import { ILista, Musica,Artista,Album } from "../../store/module/lista/tipos";

export function Conteudo(){
        let idCatcher=[];
        const dispatch=useDispatch();
        console.log(idCatcher)
        const [maxsuel,setMaxsuel]=useState([])
        useEffect(()=>{
            fetchData().then(teste=>{
                setMaxsuel(teste.payload)
            });
        },[])
        console.log(maxsuel)
        const handdleAddProductLista=useCallback((lista)=>{
        (dispatch(addMusicaLista(lista)))
        },[dispatch]);
        
        function preventDuplicate(lista){
            if(idCatcher.indexOf(lista.id)===-1){
                idCatcher.push(lista.id)
                handdleAddProductLista(lista);
            }
            else{}
        }
        return(
        
        <Testando>
            <Titulo>
            As mais escutadas
                <ArrowDiv>
                    <ButaoArrow>
                        <ArrowEsquerda className="ArrowComponentEspecial"/>
                    </ButaoArrow>
                    <ButaoArrow>
                        <ArrowEsquerda className="ArrowComponent"/>
                    </ButaoArrow>
                </ArrowDiv>
            </Titulo>
            <AlbumContainer>
                {
                maxsuel.map(lista=>(
                <AlbumHandler>
                <ImgHandler>
                <ImgCover src={lista.album.cover_medium} aling-self="center"/>
                <Play  className="butaoPlay"/>
                <Heart   className="butaoCora"/>
                <More onClick={()=>preventDuplicate(lista)} className="butaoMore" />
                <AlbumLink ></AlbumLink>
            
                </ImgHandler>
                </AlbumHandler> 

                ))}
                  
            </AlbumContainer>
            <Titulo>
            Top Album
                <ArrowDiv>
                    <ButaoArrow type="button" >
                        <ArrowEsquerda className="ArrowComponentEspecial"/>
                    </ButaoArrow>
                    <ButaoArrow type="button">
                        <ArrowEsquerda className="ArrowComponent"/>
                    </ButaoArrow>
                </ArrowDiv>
            </Titulo>
            <AlbumContainer>
                
            </AlbumContainer>
        </Testando>
        )
}
