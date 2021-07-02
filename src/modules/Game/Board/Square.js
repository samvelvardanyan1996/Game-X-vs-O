import React from 'react';

const Square = ({index, value, onClick}) => {
  return (
    <button className="square" onClick={() => onClick(index)}>
      {value}
    </button>
  );
}

export default Square;