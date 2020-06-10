import React from "react";
import cn  from "classnames"

function upTo(size, block) {
  return Array(size)
    .fill()
    .map((_, i) => block(i + 1))
}

const Cell = ({ x, y, gameState, changeCellState }) => {
  const state = gameState[x][y]
  return <div className={cn("cell", {alive: state, dead: !state})} onClick={() => changeCellState(x, y, !state)}></div>;
}

const Row = ({ index, size, gameState, changeCellState }) => {
  return (
    <div className={"row"}>
      {upTo(size, (i) => <Cell key={`cell-${index}.${i}`} gameState={gameState} x={index - 1} y={i - 1} changeCellState={changeCellState}/>)}
    </div>
  );
};

const Grid = ({ size, gameState, changeCellState }) => {
  return (
    <div className={"grid"}>
      {upTo(size, (i) => <Row  key={`row-${i}`} index={i} size={size} gameState={gameState}  changeCellState={changeCellState} />)}
    </div>
  );
};

export default Grid;
