import styled from "styled-components";

export const Container=styled.div`
height: 80px;
background: var(--color-light-grey-50);
position: fixed;
left: 0;
bottom: 0;
color:black;
width: calc(100% - 40px);
outline: 1px solid var(--color-light-grey-300);
padding-left:24px;
display: flex;
justify-content: space-between;
`
export const PlayerContainer=styled.ul`
width: 128px;
height: 80px;
display:flex;
justify-content: center;

`
export const ButaoPlayer=styled.button`
    width: 48px;
    height: 48px;
    margin-left:10px;
    align-self: center;
    border:none;
    background: none;
    transition: 0.25s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:first-child{
        width: 32px;
        height: 32px;
        border-radius: 2rem;
    }
    &:last-child{
        width: 32px;
        height: 32px;
        border-radius: 2rem;
    }
    &:hover{
    
        border-radius: 2rem;
        background: var(--color-light-grey-600);
    }
`
export const ImgPlayer=styled.img`
    width:16px;
    height:16px;
    :hover{
        
    }
`
export const ListButton=styled.button`
color: black;

`
export const BigContainer=styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
`