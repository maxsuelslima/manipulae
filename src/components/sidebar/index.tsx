import { LiContainer, Lista, LogoContainer, Sidelink, Teste } from "./styles";
import Logo from '../assets/logoimg2.png'
import {ReactComponent as Heart } from '../assets/iconmonstr-favorite-6.svg'
import {ReactComponent as Mic } from '../assets/iconmonstr-microphone-5.svg'
import {ReactComponent as Explorar } from '../assets/lupa.svg'
import {ReactComponent as Radio } from "../assets/iconmonstr-radio-10.svg"
import {ReactComponent as Play } from '../assets/iconmonstr-play-thin.svg'

export function Sidebar(){
    return(
    <Teste>
            <LogoContainer>
                <img src={Logo} alt="logo" />
            </LogoContainer>   
        <Lista>
            <LiContainer>
                <Play className='icon'/>
                <Sidelink>
                    Música
                </Sidelink>
            </LiContainer>
            <LiContainer>
                <Mic className='icon'/>
                <Sidelink>
                    Podcast
                </Sidelink>
            </LiContainer>
            <LiContainer>
                <Radio className='icon'/>
                <Sidelink>
                    Rádio
                </Sidelink>
            </LiContainer>
            <LiContainer>
                <Explorar className='icon'/>
                <Sidelink>
                    Explorar
                </Sidelink>
            </LiContainer>
            <LiContainer>
                <Heart className='icon'/>
                <Sidelink>
                    Favoritos
                </Sidelink>
            </LiContainer>
        </Lista>
    </Teste>
    )
}