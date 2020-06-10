import React from "react";
import ReactDOM from "react-dom";

const Cell = ({ label }) => <td>{label}</td>;

const Row = ({ index, size }) => {
  return (
    <tr>
      {Array(size)
        .fill()
        .map((_, i) => (
          <Cell label={`${index}.${i + 1}`} />
        ))}
    </tr>
  );
};

const Grid = ({ size }) => {
  return (
    <div>
      <table>
        <tbody>
          {Array(size)
            .fill()
            .map((_, i) => (
              <Row index={i + 1} size={size} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Grid;
