import styled from "styled-components";

export const Container=styled.div`
height: 56px;
width:calc(100% - 317px);
background: var(--color-light-grey-50);
position: fixed;
left: 253px;
top: 0;
outline: 1px solid var(--color-light-grey-300);
display:flex;
align-items: center;
flex-direction: row;
padding:0px 24px;
`
export const SearchBar=styled.input`
height: 32px;
padding:0px 14px;
border:none;
width: 55%;
background: var(--color-light-grey-50);
`