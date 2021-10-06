import { Container, SearchBar } from "./styles";
import {ReactComponent as Lupa} from '../assets/lupa.svg'
export function Top(){
    return(
        <Container>
            <Lupa width="16px" height="16px"></Lupa>
            <SearchBar type='text' placeholder="Buscar"></SearchBar>
        </Container>
    )
}