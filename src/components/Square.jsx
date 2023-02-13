import React from 'react'

export default function Square({ children, updateBoard, index }) {

    const handleClick = () => {
        updateBoard(index)
    }

  return (
    <div onClick={handleClick} className='square'>
        {children}
    </div>
  )
}
