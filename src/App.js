import React from "react";
import { Container } from "semantic-ui-react";
import AppMenu from "./common/AppMenu";
import TicTacToe from "./tic-tac-toe/TicTacToe";

function App() {
  return (
    <div>
      <AppMenu />
      <TicTacToe />
    </div>
  );
}

export default App;
