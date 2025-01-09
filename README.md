# Simon Says Game

A modern implementation of the classic Simon Says memory game built with React, Tailwind CSS, and shadcn/ui components. Players must remember and repeat increasingly complex sequences of colored buttons.

## Features

- Interactive colored buttons with visual feedback
- Progressive difficulty as sequences get longer
- Score tracking
- Clean, modern UI using shadcn/ui components
- Responsive design that works on both desktop and mobile
- Clear game states (playing, showing sequence, game over)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.0 or higher)
- npm or yarn package manager
- A React project with Tailwind CSS configured

## Installation

1. First, ensure you have the required shadcn/ui components installed:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

2. Create a new file called `SimonGame.jsx` in your components directory and copy the game component code into it.

3. Import the required React hooks and components:

```javascript
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
```

## Usage

Import and use the SimonGame component in your application:

```javascript
import SimonGame from './components/SimonGame';

function App() {
  return (
    <div className="p-4">
      <SimonGame />
    </div>
  );
}
```

## How to Play

1. Click the "Start Game" button to begin
2. Watch carefully as the game shows a sequence of colored buttons
3. After the sequence finishes playing, click the buttons in the same order
4. If you succeed, the game will add one more color to the sequence
5. If you make a mistake, the game ends and displays your score
6. Click "Restart Game" to try again

## Component Structure

The game consists of several key parts:

- State Management:
  - `sequence`: Array storing the current game sequence
  - `playerSequence`: Array storing the player's input sequence
  - `isPlaying`: Boolean indicating if a game is in progress
  - `isShowingSequence`: Boolean indicating if the game is showing the sequence
  - `gameOver`: Boolean indicating if the game has ended

- Main Functions:
  - `startGame()`: Initializes a new game
  - `playNextRound()`: Adds a new color to the sequence
  - `handleButtonClick()`: Processes player input
  - Sequence playback using useEffect hook

## Customization

### Changing Colors

Modify the colors array to change the button colors:

```javascript
const colors = [
  { name: 'red', bg: 'bg-red-500', hover: 'hover:bg-red-600' },
  { name: 'blue', bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
  { name: 'green', bg: 'bg-green-500', hover: 'hover:bg-green-600' },
  { name: 'yellow', bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600' }
];
```

### Adjusting Timing

Modify these values to change game timing:
- Sequence display interval: 1000ms (1 second)
- Button flash duration: 500ms
- Next round delay: 1000ms

## Contributing

Feel free to submit issues and enhancement requests. Here are some potential improvements:

1. Add sound effects for button clicks and sequence playback
2. Implement different difficulty levels
3. Add animations for sequence playback
4. Include a high score system
5. Add visual effects for correct/incorrect sequences

## License

This project is available under the MIT License. Feel free to use and modify it for your own projects.
