import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import { TURNS } from './constans/constans'

function App() {
  //tablero
  const [board, setBoard] = useState(Array(9).fill(null))
  //turnos
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    //actualizacion del tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //actualizacion del turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
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
        <Square>{TURNS.X}</Square>
        <Square>{TURNS.O}</Square>
      </section>

    </main>
  )
}

export default App
