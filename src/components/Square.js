import React from "react";

function Square(props) {
  return (
    <td className="square" id={props.id} onClick={props.onClick}>
      {props.value}
    </td>
  );
}

export default Square;
