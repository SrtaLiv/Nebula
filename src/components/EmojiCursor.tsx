import { useCursorify } from '@cursorify/react'
import React from 'react';
const EmojiCursor = () => {
  const { mouseState, style } = useCursorify()
  const disabled = false;

  return (
    <div
      style={{
        width: 40,
        height: 40,
        fontSize: 30,
      }}
    >
      {(() => {
        if (disabled) return '🖐️'
        if (mouseState === 'mouseDown') return '✊'
        if (style === 'pointer') return '👆'
        return '🖐️'
      })()}
    </div>
  )
}

export default EmojiCursor