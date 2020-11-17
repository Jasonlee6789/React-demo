import React, { useEffect, useRef, useReducer } from "react";
import Board from "./Board";
import { Input, Button, Message, Container } from "semantic-ui-react";
import WinnerModal from "./WinnerModal";
import { useNewGame, useNextMove } from "./TicTacToeAPI";
import TicTacToeReducer from "./TicTacToeReducer";
function TicTacToe() {
  // // const initialGame = { size: 5, board: [] };
  // const [size, setSize] = useState(5);

  // // const [
  // //   { game, isLoadingNewGame, isErrorNewGame },
  // //   setGame,
  // //   setStartNew,
  // // ] = useNewGame(initialGame);
  // const [isStart, setIsStart] = useState(false);

  // // const [
  // //   { isOver, isLoadingNextMove, isErrorNextMove },
  // //   setMove,
  // //   setIsOver,
  // // ] = useNextMove({});
  // const [isOver, setIsOver] = useState(false);

  // const [player, setPlayer] = useState(1);

  // const [board, setBoard] = useState(new Array(size * size));

  const [state, dispatch] = useReducer(TicTacToeReducer, {
    player: 1,
    size: 5,
    board: new Array(25),
    isStart: false,
    isOver: false,
    isError: false,
    isLoading: false,
  });

  const [game, setGame] = useNewGame(null);

  const [move, setMove] = useNextMove(null);

  // const [isLoading, setIsLoading] = useState(
  //   isLoadingNewGame || isLoadingNextMove
  // );
  // const [isLoading, setIsLoading] = useState(game.isLoading || move.isLoading);

  // const [isError, setIsError] = useState(
  //   isErrorNewGame || isErrorNextMove);
  // const [isError, setIsError] = useState(game.isError || move.isError);

  const inputSize = useRef(null);

  useEffect(() => {
    if (game.isError || move.isError) {
      //   setIsError(true);
      // }
      // if (!game.isError || !move.isError) {
      //   setIsError(false);
      // }
      // if (game.isLoading || move.isLoading) {
      //   setIsLoading(true);
      // }
      // if (!game.isLoading || !move.isLoading) {
      //   setIsLoading(false);
      dispatch({ type: "GAME_ERROR" });
    }
    if (move.data === 1 || move.data === 2) {
      //setIsOver(true);
      dispatch({ type: "GAME_OVER" });
      move.data = 0;
    }
  }, [game, move, state.size]);

  function handleClick(id) {
    let newBoard = state.board.slice();
    if (newBoard[id] === "x" || newBoard[id] === "o") {
      return;
    }

    newBoard[id] = state.player === 1 ? "x" : "o";

    placeNewMove(id);

    // setBoard(newBoard);
    // setPlayer(player === 1 ? 2 : 1);
    dispatch({
      type: "GAME_MOVE",
      payload: {
        player: state.Player === 1 ? 2 : 1,
        board: newBoard,
      },
    });
  }

  function placeNewMove(id) {
    const row = (id / state.size) >> 0;
    const col = id % state.size;

    const newMove = {
      row: row,
      col: col,
      player: state.player,
    };

    setMove(newMove);
  }

  function handleModalClose() {
    // setIsOver(false);
    dispatch({ type: "GAME_NOPE" });
  }

  function handleModalNewGame() {
    setGame({ size: state.size, board: [] });
    dispatch({ type: "GAME_INIT" });
    // setBoard(new Array(size * size));
    // setIsOver(false);
    // setIsStart(true);
    // setPlayer(1);
  }

  function handleDismiss() {
    // setIsError(false);
    dispatch({ type: "" });
  }

  function handleSizeChange(e, { value }) {
    // setSize(value);
    const size = parseInt(value, 10);
    if (!size) {
      return;
    }
    dispatch({ type: "GAME_SIZE", payload: { size: size } });
  }

  function handleStartGame() {
    setGame({ size: state.size, board: [] });
    dispatch({ type: "GAME_INIT" });
    // setBoard(new Array(size * size));
    // setIsOver(false);
    // setIsStart(true);
    // setPlayer(1);
  }

  return (
    <div>
      {state.isOver && (
        <WinnerModal
          open={state.isOver}
          onClose={handleModalClose}
          onNewGame={handleModalNewGame}
        />
      )}

      {state.isError && (
        <Message
          onDismiss={handleDismiss}
          header="Error"
          content="There is something wrong."
        />
      )}

      {/* {
        isLoading && (
          //<Dimmer active>
          <Loader active>Loading</Loader>
        )
        //</Dimmer>
      } */}

      {state.isStart && (
        <div>
          <Container textAlign="center">
            Current Player: {state.player}
          </Container>
          <Board
            board={state.board}
            size={state.size}
            onClick={(id) => handleClick(id)}
          />
        </div>
      )}

      {!state.isStart && (
        <Container textAlign="center">
          <Input
            ref={inputSize}
            type="text"
            placeholder="Board Size ..."
            action
            default={state.size}
            onChange={handleSizeChange}
          >
            <input />
            <Button type="submit" onClick={handleStartGame}>
              let's play!!!
            </Button>
          </Input>
        </Container>
      )}
    </div>
  );
}

export default TicTacToe;
