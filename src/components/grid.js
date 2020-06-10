import React from "react";
import cn  from "classnames"

function upTo(size, block) {
  return Array(size)
    .fill()
    .map((_, i) => block(i + 1))
}

const Cell = ({ x, y, state }) => <div className={cn("cell", {alive: state, dead: !state})}></div>;

const Row = ({ index, size }) => {
  return (
    <div className={"row"}>
      {upTo(size, (i) => <Cell key={`cell-${index}.${i}`} state={((index + i) % 2) > 0} />)}
    </div>
  );
};

const Grid = ({ size }) => {
  return (
    <div className={"grid"}>
      {upTo(size, (i) => <Row  key={`row-${i}`} index={i} size={size} />)}
    </div>
  );
};
export default Grid;
