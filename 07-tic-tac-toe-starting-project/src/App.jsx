import Player from "./components/Player.jsx";
import Gameboard from "./components/GameBoard.jsx";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 1" symbol="O" />
        </ol>
        <Gameboard />
      </div>
      LOG
    </main>
  )
}

export default App
