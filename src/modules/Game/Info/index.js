import React from 'react';
import GetMoves from './GetMoves';

const GameInfo = ({ status, history, jumpTo }) => {
  return (
    <div className="game-info">
      <div>{status}</div>
      <ol>
        <GetMoves history={history} jumpTo={jumpTo} />
      </ol>
    </div>
  );
};

export default GameInfo;