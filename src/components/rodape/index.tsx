import { ButaoPlayer, Container, ImgPlayer, PlayerContainer } from "./styles";
import play from '../assets/iconmonstr-play-thin.svg'
import ant from '../assets/iconmonstr-previous-thin.svg'
import next from '../assets/iconmonstr-next-thin.svg'
export function Rodape() {
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
        </Container>
    )
}