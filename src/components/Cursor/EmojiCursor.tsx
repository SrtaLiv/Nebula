import { useCursorify } from '@cursorify/react'
import React from 'react';

const EmojiCursor = () => {
  const { mouseState, style } = useCursorify()
  const disabled = false;

  return (
    <div
      style={{
        width: 20,
        height: 20,
        backgroundColor: mouseState === 'mouseDown' ? '#ff6347' : '#4caf50', // Cambia el color según el estado del mouse
        borderRadius: '50%',
        position: 'absolute',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'background-color 0.2s ease',
      }}
    ></div>
  )
}

export default EmojiCursor