import styled from "styled-components";

export const Testando=styled.div`
    background: var(--color-light-grey-50);
    width: calc(100% - 251px);
    word-wrap: break-word;
    overflow-y: scroll;
    padding-top: 56px;
    padding-bottom: 80px;
    padding-right: 100px;
    padding-left: 100px;
`
export const Titulo=styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    height: 80px;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;

    .ArrowComponent{
        width: 16px;
        height: 16px;

        fill: black;
    }
    .ArrowComponentEspecial{
        width: 16px;
        height: 16px;

        fill: black;
        transform: rotate(180deg)
    }
    
`
export const ArrowDiv=styled.div`
justify-content: flex-end;
`
export const ButaoArrow=styled.button`
border:none;
background: none;
cursor: pointer;
align-items: center;
border-radius: 50%;
height: 40px;
width: 40px;
transition: 0.2s;
align-content: center;
&:last-child{
    margin-left: 22px;
}
&:hover{
    background: var(--color-light-grey-500);
}
`
export const AlbumContainer=styled.div`
width: 100%;
height:337px;

color: var(--color-light-grey-50);
background:var(--color-light-grey-50);

display: flex;
flex-basis: 10%;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
overflow-x: scroll;
::-webkit-scrollbar{
    display: none;
}
`
export const AlbumHandler=styled.div`
    display: flex;
    flex-direction: row;
    color: black;
    flex: 0 0 20%;
    align-items: flex-start;
    padding: 0;
    .butaoPlay{
        border-radius: 50%;
        position: absolute;
        top:70%;
        right:83.5%;
        stroke: black;
        background:#fff;
        cursor: pointer;
        &:hover{
            background:grey;
        }
        
    }
    .butaoCora{
        border-radius: 50%;
        position: absolute;
        
        top:70%;
        right:70.5%;
        background:#fff;
        background-size:auto;
        cursor: pointer;
        color:var(--label-new-color);
        stroke: black;
        &:hover{
            background:grey;

        }
    }
    .butaoMore{
        border-radius: 50%;
        position: absolute;
        top:70%;
        right:55.5%;
        background:#fff;
        stroke: black;
        cursor: pointer;
        &:hover{
            background:grey;
        }
    }
`

export const ImgHandler=styled.li`
   width:100%;
   position: relative;
   list-style-type: none;
   margin-top: 4rem;
   `
export const ImgCover=styled.img`
height: auto;
width: auto;
margin-top: -2rem;
width: 90%;
object-fit: contain;
border-radius: 0.5rem;
cursor: pointer;
transition: 0.25s;


&:hover{
    filter: opacity(0.85);
}
    `