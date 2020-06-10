import React from "react";

function upTo(size, block) {
  return Array(size)
    .fill()
    .map((_, i) => block(i + 1))
}

const Cell = ({ label }) => <td>{label}</td>;

const Row = ({ index, size }) => {
  return (
    <tr>
      {upTo(size, (i) => <Cell label={`${index}.${i}`} />)}
    </tr>
  );
};

const Grid = ({ size }) => {
  return (
    <div>
      <table>
        <tbody>
          {upTo(size, (i) => <Row index={i + 1} size={size} />)}
        </tbody>
      </table>
    </div>
  );
};
export default Grid;
