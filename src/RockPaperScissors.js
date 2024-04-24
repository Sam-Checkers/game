import React, { useState } from 'react';
import { generateRandomNumber } from './random'; // Import the generateRandomNumber function

const RockPaperScissors = () => {
  const [playerMoves, setPlayerMoves] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [outcome, setOutcome] = useState('');

  const determineOutcome = (playerMove, computerMove) => {
    let roundOutcome = '';
    if (playerMove === 'Rock') {
      if (computerMove === 'Scissors') {
        roundOutcome = 'Rock CRUSHES Scissors! Player Victory!';
        setPlayerScore(playerScore + 1);
      } else if (computerMove === 'Paper') {
        roundOutcome = 'Paper COVERS Rock! Computer Victory!';
        setComputerScore(computerScore + 1);
      } else {
        roundOutcome = 'Tie';
      }
    } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
        roundOutcome = 'Paper COVERS Rock! Player Victory!';
        setPlayerScore(playerScore + 1);
      } else if (computerMove === 'Scissors') {
        roundOutcome = 'Scissors CUT Paper! Computer Victory!';
        setComputerScore(computerScore + 1);
      } else {
        roundOutcome = 'Tie';
      }
    } else if (playerMove === 'Scissors') {
      if (computerMove === 'Paper') {
        roundOutcome = 'Scissors CUT Paper! Player Victory!';
        setPlayerScore(playerScore + 1);
      } else if (computerMove === 'Rock') {
        roundOutcome = 'Rock CRUSHES Scissors! Computer Victory!';
        setComputerScore(computerScore + 1);
      } else {
        roundOutcome = 'Tie';
      }
    }
    setOutcome(roundOutcome);
  };

  const handlePlayerMove = (move) => {
    const random_number = generateRandomNumber(1, 3);
    let computerMove = '';
    if (random_number === 1) {
      computerMove = 'Rock';
    } else if (random_number === 2) {
      computerMove = 'Paper';
    } else if (random_number === 3) {
      computerMove = 'Scissors';
    }
    setPlayerMoves([...playerMoves, move]);
    determineOutcome(move, computerMove);
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={() => handlePlayerMove('Rock')}>Rock</button>
        <button onClick={() => handlePlayerMove('Paper')}>Paper</button>
        <button onClick={() => handlePlayerMove('Scissors')}>Scissors</button>
      </div>
      <div>
        <p>Player Score: {playerScore}</p>
        <p>Computer Score: {computerScore}</p>
      </div>
      <div>
        <p>{outcome}</p>
      </div>
    </div>
  );
};

export default RockPaperScissors;