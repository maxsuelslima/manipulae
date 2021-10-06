import { Testando, Titulo,ArrowDiv,ButaoArrow, AlbumContainer,AlbumHandler,ImgHandler,ImgCover} from "./styles";
import {ReactComponent as ArrowEsquerda } from '../assets/iconmonstr-arrow-26.svg'
import {ReactComponent as Play } from '../assets/iconmonstr-play-thin.svg'
import {ReactComponent as Heart } from '../assets/iconmonstr-heart-thin.svg'
import {ReactComponent as More } from '../assets/iconmonstr-plus-2.svg'
import { fetchData } from "../../actions/pegarApi";
import {ActionTypes} from '../../constants/action-types'

export function Conteudo(){
        
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
            <AlbumContainer key='id'>
                <AlbumHandler>
                    <ImgHandler>
                        <ImgCover src='' alt="capa"/>
                        <Play className="butaoPlay"/>
                        <Heart className="butaoCora"/>
                        <More className="butaoMore" />
                        <p></p>
                        <p>album</p>
                    </ImgHandler>
                </AlbumHandler>

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
