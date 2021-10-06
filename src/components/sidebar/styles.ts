import styled from "styled-components";

export const Teste=styled.div`
    background: var(--color-light-grey-50);
    width: 239px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: left;
    margin-right: -1;
    border-right: 1px solid var(--color-light-grey-300);
    padding-left:12px;
`
export const Lista=styled.ul`
    width: 251px;
    font: 18px;
    display: flex;
    flex-direction: column;
`
export const LiContainer=styled.a`
    margin: 0px 0px 16px;
    padding: 0px 12px;
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    border:none;
    cursor: pointer;
    &:hover{
        color: var(--color-coral-500);
        .icon {
            fill: var(--color-coral-500);
        }
        

        }

`
export const Sidelink=styled.span`
    margin-left: 12px;

`
export const LogoContainer=styled.div`

    width: 100%;
    height: 220px;
`