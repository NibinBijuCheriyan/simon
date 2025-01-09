import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SimonGame = () => {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const colors = [
    { name: 'red', bg: 'bg-red-500', hover: 'hover:bg-red-600' },
    { name: 'blue', bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
    { name: 'green', bg: 'bg-green-500', hover: 'hover:bg-green-600' },
    { name: 'yellow', bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600' }
  ];

  const startGame = () => {
    setSequence([Math.floor(Math.random() * 4)]);
    setPlayerSequence([]);
    setIsPlaying(true);
    setGameOver(false);
    setIsShowingSequence(true);
  };

  const playNextRound = () => {
    const newSequence = [...sequence, Math.floor(Math.random() * 4)];
    setSequence(newSequence);
    setPlayerSequence([]);
    setIsShowingSequence(true);
  };

  useEffect(() => {
    if (isShowingSequence && sequence.length > 0) {
      let step = 0;
      const intervalId = setInterval(() => {
        if (step < sequence.length) {
          const button = document.getElementById(`button-${sequence[step]}`);
          button.classList.add('opacity-50');
          setTimeout(() => {
            button.classList.remove('opacity-50');
          }, 500);
          step++;
        } else {
          setIsShowingSequence(false);
          clearInterval(intervalId);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isShowingSequence, sequence]);

  const handleButtonClick = (index) => {
    if (isShowingSequence || gameOver || !isPlaying) return;

    const newPlayerSequence = [...playerSequence, index];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[newPlayerSequence.length - 1] !== sequence[newPlayerSequence.length - 1]) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      setTimeout(() => {
        playNextRound();
      }, 1000);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Simon Says</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {colors.map((color, index) => (
            <button
              key={index}
              id={`button-${index}`}
              className={`h-32 rounded-lg transition-opacity ${color.bg} ${color.hover}`}
              onClick={() => handleButtonClick(index)}
              disabled={isShowingSequence || !isPlaying}
            />
          ))}
        </div>
        
        <div className="text-center space-y-4">
          <div className="text-xl font-bold">
            {gameOver ? (
              <p>Game Over! Score: {sequence.length - 1}</p>
            ) : (
              <p>Score: {sequence.length - 1}</p>
            )}
          </div>
          
          <Button 
            onClick={startGame}
            className="w-full"
            disabled={isShowingSequence}
          >
            {isPlaying ? 'Restart Game' : 'Start Game'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimonGame;
