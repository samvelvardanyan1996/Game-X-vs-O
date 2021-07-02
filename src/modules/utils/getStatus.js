const getStatus = (winner, nextPlayer) => {
  if(winner){
    status = "Winner: " + winner;
  }
  else{
    status = "Next player: " + (nextPlayer ? "X" : "O");
  }

  return status;
}

export default getStatus;