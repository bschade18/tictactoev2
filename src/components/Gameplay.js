import React from "react";

function Gameplay(props) {
  return (
    <div className="gameplay">
      <p>How would you like to play?</p>
      <button className="gameplay-btn" onClick={props.setSingleMode}>
        One Player
      </button>
      <button className="gameplay-btn" onClick={props.setDoubleMode}>
        Two Player
      </button>
    </div>
  );
}

export default Gameplay;
