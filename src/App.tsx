import React from 'react';
import { CursorifyProvider } from '@cursorify/react';
import EmojiCursor from './components/EmojiCursor';
import Home from './pages/Home';

export default function App() {
  return (
    <CursorifyProvider cursor={<EmojiCursor />}>
      <Home />
    </CursorifyProvider>
  );
}

