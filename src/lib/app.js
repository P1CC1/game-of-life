import React, {useState} from "react";
import Grid from "../components/grid";

const SIZE = 20;

function createGameState(size) {
  const gameState = Array(size)
  for (let i = 0; i < size; i++)
    gameState[i] = Array(size).fill(false)
  return gameState
}

function copyGameState(size, gameState) {
  const newGameState = createGameState(size)
  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++)
      newGameState[i][j] = gameState[i][j]
  return newGameState
}

const App = () => {
  const [gameState, setGameState] = useState(createGameState(SIZE))

  const changeCellState = (i, j, state) => {
    const newGameState = copyGameState(SIZE, gameState)
    newGameState[i][j] = state
    setGameState(newGameState)
  }

  const step = () => {
    const newGameState = copyGameState(SIZE, gameState)
    // TODO implement "game of life" here
    newGameState[0][0] = !newGameState[0][0]
    


    setGameState(newGameState)
  }

  return (
    <div>
      <Grid size={SIZE} gameState={gameState} changeCellState={changeCellState} />
      <button onClick={step}>next step</button>
    </div>
  )
}

export default App





