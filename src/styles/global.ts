import { createGlobalStyle } from "styled-components"

export const GlobalStyle=createGlobalStyle`
:root {
    --cor--preta:#000000
    --color-coral-900: #b12424;
    --color-coral-800: #be2730;
    --color-coral-700: #ca2a36;
    --color-coral-600: #db343d;
    --color-coral-500: #ef5466;
    --color-coral-400: #e45156;
    --color-coral-300: #db7176;
    --color-coral-200: #e7999c;
    --color-coral-100: #f7ccd3;
    --color-dark-grey-900: #121216;
    --color-dark-grey-800: #191919;
    --color-dark-grey-700: #191922;
    --color-dark-grey-600: #23232d;
    --color-dark-grey-500: #32323d;
    --color-dark-grey-400: #42424c;
    --color-dark-grey-300: #52525d;
    --color-dark-grey-200: #60606c;
    --color-green-900: #008a1a;
    --color-green-800: #009927;
    --color-green-700: #00a22f;
    --color-green-600: #00ab37;
    --color-green-500: #00b23d;
    --color-green-400: #26be5a;
    --color-green-300: #4dc977;
    --color-green-200: #80d99e;
    --color-green-100: #b3e8c5;
    --color-green-50: #e0f6e8;
    --color-light-grey-900: #72727d;
    --color-light-grey-800: #92929d;
    --color-light-grey-700: #a2a2ad;
    --color-light-grey-600: #bebec7;
    --color-light-grey-500: #d1d1d6;
    --color-light-grey-400: #dfdfe0;
    --color-light-grey-300: #eaeaea;
    --color-light-grey-200: #f2f2f2;
    --color-light-grey-100: #f4f4f4;
    --color-light-grey-50: #f8f8f9;
    --color-red-900: #ca1a1a;
    --color-red-800: #d22727;
    --color-red-700: #d72e2e;
    --color-red-600: #db3636;
    --color-red-500: #df3c3c;
    --color-red-400: #e45959;
    --color-red-300: #e97777;
    --color-red-200: #ef9e9e;
    --color-red-100: #f5c5c5;
    --color-red-50: #fbe8e8;
    --color-white: #fff;
    --color-black: #000;
    --color-success: #00b23d;
    --color-error: #df3c3c;
    --background-primary: var(--color-white);
    --background-intermediate: var(--color-light-grey-100);
    --background-secondary: var(--color-white);
    --background-contrast: var(--color-light-grey-300);
    --background-elevation: var(--color-light-grey-700);
    --background-accent: var(--color-coral-500);
    --background-selectable-contrast: var(--color-light-grey-900);
    --text-primary: var(--color-dark-grey-800);
    --text-intermediate: var(--color-dark-grey-300);
    --text-secondary: var(--color-light-grey-900);
    --divider-primary: var(--color-light-grey-300);
    --divider-secondary: var(--color-light-grey-500);
    --sidebar-background-color: var(--background-primary);
    --label-album-color: var(--text-secondary);
    --label-album-background-color: #efeff2;
    --label-new-color: #ff8000;
    --label-new-background-color: rgba(255,128,0,0.1);
    --label-explicit-background-color: #191922;
    --label-explicit-color: #c2c2ca;
    --shadow-border-color: var(--background-primary);
    --lyrics-gradient-color: 255,255,255;
    --popper-shadow: 0 4px 20px 0 rgba(25,25,34,0.24);
    --elevation-shadow: hsla(0,0%,51.4%,0.35);
    --marquee-gradient-transparent-color: hsla(0,0%,100%,0);
    --scroller-shadow-color: rgba(25,25,34,0.12);
    --modal-shadow-color: rgba(10,10,22,0.3);
    --modal-special-offers-primary-color: rgba(0,127,235,0.9);
    --modal-special-offers-primary-hover-color: rgba(11,102,205,0.9);
    --modal-sharebox-friend-hover-color: rgba(0,127,235,0.5);
    --onboarding-header-shadow-color: rgba(0,0,0,0.2);
    --onboarding-footer-shadow-color: rgba(0,0,0,0.2);
}
:root, [data-theme=dark] {
    --text-inverse: var(--background-primary);
    --text-accent: var(--color-coral-500);
    --divider-accent: var(--color-coral-500);
    --color-accent: var(--color-coral-500);
    --color-accent-hover: var(--color-coral-700);
    --premium-color: #1daaa2;
    --orange-color: #f60;
    --download-color: #00d000;
    --family-color: #fe447d;
}
body{
    background-color:var(--background);
    -webkit-font-smoothing:antialiased;
    width: 100%;
    background: var(--background-primary);
    overflow: hidden;
}
body,input,textarea,button{
    font-family: 'Open Sans', sans-serif;
    font-weight:300;
}
h1,h2,h3,h4,h5,h6,strong{
    font-weight:700;
}
html{
    @media(max-width:1080px){
        font-size: 93.75%;
    }
    @media(max-width:720px){
        font-size: 87.5%    ;
    }
}
*{  
    margin: 0;
    padding: 0;
}
*:focus {
    outline: none;
}
.react-modal-overlay{
    background-color: rgba(255,255,255,1);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;

    width: calc(100% - 252px);
    height:calc(100vh - 81px);
    display: flex;
    align-items:center;
    justify-content: center;


    ::-webkit-scrollbar{
        display: none;
    }
}
.react-moda-content{
    width: calc(100% - 252px);
    height:calc(100vh - 81px);

    background: white;
    padding:3rem;
    position: relative;
}

`