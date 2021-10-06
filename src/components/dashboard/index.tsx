import { Conteudo } from "../conteudo";
import { Rodape } from "../rodape";

import {Sidebar} from "../sidebar";
import {Container} from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Sidebar/>
            <Conteudo/>
            <Rodape/>
        </Container>
    )
}