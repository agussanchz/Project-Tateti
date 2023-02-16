import './App.css'
import confetti from 'canvas-confetti'
import { useState } from 'react'

import Square from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './constans/constans'
import { checkEndGame, checkWinner } from './logic/board'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return null
    // Actualizacion del tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Actualizacion del turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tres en linea</h1>
      <section className='game'>
        {board.map((element, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {element}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <button onClick={resetGame}>Resetear el juego</button>

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App
