import React from 'react';
import Square from './Square';

const GameBoard = ({ current, handleClick }) => {
  return (
    <div className="game-board">
      <div className="board-row">
        <Square index={0} value={current.squares[0]} onClick={(i) => handleClick(i)} />
        <Square index={1} value={current.squares[1]} onClick={(i) => handleClick(i)} />
        <Square index={2} value={current.squares[2]} onClick={(i) => handleClick(i)} />
      </div>
      <div className="board-row">
        <Square index={3} value={current.squares[3]} onClick={(i) => handleClick(i)} />
        <Square index={4} value={current.squares[4]} onClick={(i) => handleClick(i)} />
        <Square index={5} value={current.squares[5]} onClick={(i) => handleClick(i)} />
      </div>
      <div className="board-row">
        <Square index={6} value={current.squares[6]} onClick={(i) => handleClick(i)} />
        <Square index={7} value={current.squares[7]} onClick={(i) => handleClick(i)} />
        <Square index={8} value={current.squares[8]} onClick={(i) => handleClick(i)} />
      </div>

    </div>
  );
};

export default GameBoard;
