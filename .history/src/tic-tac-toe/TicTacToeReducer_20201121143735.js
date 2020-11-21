export default function TicTacToeReducer(state, action) {
  switch (action.type) {
    case "GAME_SIZE":
      return {
        ...state,
        size: action.payload.size,
      };
    case "GAME_MOVE":
      return {
        ...state,
        board: action.payload.board,
        player: action.payload.player,
      };
    case "GAME_INIT":
      return {
        ...state,
        isOver: false,
        isStart: true,
        board: new Array(state.size * state.size),
        player: 1,
      };
    case "GAME_OVER":
      return {
        ...state,
        isOver: true,
        isStart: false,
      };
    case "GAME_NOPE":
      return {
        ...state,
        isOver: false,
        isStart: false,
      };
    case "GAME_ERROR":
      return {
        ...state,
        isError: true,
      };
    default:
  }
}
