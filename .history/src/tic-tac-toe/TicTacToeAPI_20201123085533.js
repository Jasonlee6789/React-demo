import { usePostAPI } from "../common/APIUtil";
import axios from "axios";
// export default function useNewGame(initialGame)
export function useNewGame(newGame) {
  const url = "http://localhost:5000/api/tictactoe/newgame";
  const [state, setBody] = usePostAPI(url, newGame);
  return [state, setBody];
  // const [game, setGame] = useState(initialGame);
  // const [startNew, setStartNew] = useState(false);
  // const [isLoadingNewGame, setIsLoading] = useState(false);
  // const [isErrorNewGame, setIsError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsError(false);
  //     setIsLoading(true);

  //     try {
  //       const response = await axios.post(url, game);
  //       console.log(response);
  //       setGame(response.data);
  //     } catch (error) {
  //       console.log(error);
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [game.size, startNew]);

  // return [{ game, isLoadingNewGame, isErrorNewGame }, setGame, setStartNew];
}

export function useNextMove(newMove) {
  // const didMountRef = useRef(false);
  const url = "http://localhost:5000/api/tictactoe/move";
  const [state, setBody] = usePostAPI(url, newMove);
  return [state, setBody];
  // const [move, setMove] = useState(newMove);
  // const [isOver, setIsOver] = useState(false);
  // const [isLoadingNextMove, setIsLoading] = useState(false);
  // const [isErrorNextMove, setIsError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsError(false);
  //     setIsLoading(true);

  //     try {
  //       const response = await axios.post(url, move);
  //       console.log(response);
  //       if (response.data === 1 || response.data === 2) {
  //         setIsOver(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   if (didMountRef.current) {
  //     fetchData();
  //   } else {
  //     didMountRef.current = true;
  //   }
  // }, [move]);

  // return [{ isOver, isLoadingNextMove, isErrorNextMove }, setMove, setIsOver];
}
