import React, { Component } from "react";
import "./App.css";

import Board from "./components/Board";
import Gameplay from "./components/Gameplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      isOnePLayer: null,
      isPlayerTurn: null,
      turn: 0
    };
  }

  resetGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      turn: 0
    });
  };

  handleClick = i => {
    let squares = this.state.squares;
    if (
      checkWinner(squares) ||
      squares[i] ||
      this.state.isPlayerTurn === false
    ) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      turn: this.state.turn + 1
    });

    if (this.state.isOnePLayer) {
      this.setState({
        isPlayerTurn: false
      });
      setTimeout(() => this.cpuPlay(), 1500);
    }
  };

  cpuPlay = () => {
    let availSpots = this.emptySquares();
    let squares = this.state.squares.slice();

    let randomIndex = availSpots[Math.floor(Math.random() * availSpots.length)];

    squares[randomIndex] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      turn: this.state.turn + 1,
      isPlayerTurn: true
    });
  };

  emptySquares() {
    let squares = this.state.squares.slice();
    let emptyIndeces = [];
    for (var i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        emptyIndeces.push(i);
      }
    }

    return emptyIndeces;
  }

  setSingleMode = () => {
    this.setState({
      isOnePLayer: true
    });
  };

  setDoubleMode = () => {
    this.setState({
      isOnePLayer: false
    });
  };

  render() {
    let player = this.state.xIsNext ? "O" : "X";
    let winner = checkWinner(this.state.squares, player);
    let turn = this.state.turn;
    let status;
    if (winner) {
      status = winner + " wins!";
      setTimeout(() => this.resetGame(), 1500);
    } else if (turn === 9) {
      status = "DRAW!";
      setTimeout(() => this.resetGame(), 1500);
    } else {
      status = (this.state.xIsNext ? "X" : "O") + "'s turn!";
    }
    return (
      <div className="App">
        {this.state.isOnePLayer === null ? (
          <Gameplay
            setSingleMode={this.setSingleMode}
            setDoubleMode={this.setDoubleMode}
          />
        ) : (
          <div>
            <div className="status">{status}</div>
            <Board
              xIsNext={this.state.xIsNext}
              squares={this.state.squares}
              turn={this.state.turn}
              resetGame={this.resetGame}
              renderSquare={this.renderSquare}
              handleClick={i => this.handleClick(i)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;

function checkWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
