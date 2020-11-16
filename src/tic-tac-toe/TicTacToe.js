import React, { useState, useEffect } from "react";
import Board from "./Board";
import { Message, Dimmer, Loader } from "semantic-ui-react";
import WinnerModal from "./WinnerModel";
import useNewGame, { useNextMove } from "./TicTacToeAPI";

function TicTacToe() {
  const initialGame = { size: 5, board: [] };

  const [
    { game, isLoadingNewGame, isErrorNewGame },
    setGame,
    setStartNew,
  ] = useNewGame(initialGame);

  const [
    { isOver, isLoadingNextMove, isErrorNextMove },
    setMove,
    setIsOver,
  ] = useNextMove({});

  const [player, setPlayer] = useState(1);

  const [isLoading, setIsLoading] = useState(
    isLoadingNewGame || isLoadingNextMove
  );

  const [isError, setIsError] = useState(isErrorNewGame || isErrorNextMove);

  useEffect(() => {
    if (isErrorNewGame || isErrorNextMove) {
      setIsError(true);
    }
    if (!isErrorNewGame || !isErrorNextMove) {
      setIsError(false);
    }
    if (isLoadingNewGame || isLoadingNextMove) {
      setIsLoading(true);
    }
    if (!isLoadingNewGame || !isLoadingNextMove) {
      setIsLoading(false);
    }
  }, [isErrorNewGame, isErrorNextMove, isLoadingNewGame, isLoadingNextMove]);

  function handleClick(id) {
    const row = (id / game.size) >> 0;
    const col = id % game.size;

    const newMove = {
      row: row,
      col: col,
      player: player,
    };

    setMove(newMove);

    let newGame = game;

    newGame.board[id] = player === 1 ? "x" : "o";

    setGame(newGame);
    setPlayer(player === 1 ? 2 : 1);
  }

  function handleModalClose() {
    setIsOver(false);
  }

  function handleModalNewGame() {
    setIsOver(false);
    setStartNew(true);
    setPlayer(1);
  }

  function handleDismiss() {
    setIsError(false);
  }

  return (
    <div>
      {isOver && (
        <WinnerModal
          open={isOver}
          onClose={handleModalClose}
          onNewGame={handleModalNewGame}
        />
      )}

      {isError && (
        <Message
          onDismiss={handleDismiss}
          header="Error"
          content="There is something wrong."
        />
      )}

      {
        isLoading && (
          //<Dimmer active>
          <Loader active>Loading</Loader>
        )
        //</Dimmer>
      }

      <Board game={game} onClick={(id) => handleClick(id)} />
    </div>
  );
}

export default TicTacToe;
