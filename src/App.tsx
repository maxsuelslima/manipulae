

import { Dashboard } from "./components/dashboard";
import { Rodape } from "./components/rodape";
import { Top } from "./components/top-bar";



import { GlobalStyle } from "./styles/global";
import { Component } from "react";

export function App() {
  return (
    <>
      <GlobalStyle/>
      <Dashboard/>
      <Rodape/>
      <Top/>
    </>
  );
}

