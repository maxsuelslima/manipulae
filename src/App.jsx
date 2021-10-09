

import { Dashboard } from "./components/dashboard";
import { ListModal } from "./components/listModal";
import { Rodape } from "./components/rodape";
import { Top } from "./components/top-bar";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <>
      <GlobalStyle/>
      <Dashboard/>
      <Rodape/>
      <Top/>
      <ListModal/>
    </>
  );
}

