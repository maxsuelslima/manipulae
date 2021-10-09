import styled from "styled-components"

export const ListContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
height: calc(100vh - 81px);
width: calc(100%-252px);
overflow-y: scroll;

.track-handler{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex: 0 0 10%;
    padding-top: 2rem;
}
.img-album{
    height: 8rem;
}
`