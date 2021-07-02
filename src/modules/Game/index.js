import React, { useState } from 'react';
import calculateWinner from 'modules/utils/calculateWinner';
import getStatus from 'modules/utils/getStatus';
import GameBoard from './Board';
import GameInfo from './Info';

import 'modules/styles/App.css';


const Game = () => {
  const [state, setState] = useState({
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true
  });

  function handleClick(i) {
    const arrayHistory = state.history.slice(0, state.stepNumber + 1);
    const current = arrayHistory[state.history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      ...state, history: [...state.history, {squares: squares}],
      stepNumber: state.history.length,
      xIsNext: (state.history.length % 2) === 0
    });
  }

  function jumpTo(step) {
    setState({
      ...state,
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  console.log( "object state", { ...state } );
  console.log( "object state.stepNumber", state.stepNumber );

  const current = state.history[state.stepNumber];
  console.log( "object current", current );
  const winner = calculateWinner(current.squares);
  let nextPlayer = state.xIsNext;
  let status = getStatus(winner, nextPlayer);


  return (
    <div className="game">
      <GameBoard current={current} handleClick={handleClick} />
      <GameInfo status={status} history={state.history} jumpTo={jumpTo} />
    </div>
  );
}

export default Game;