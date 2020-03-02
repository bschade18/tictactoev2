import React from "react";

import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      turn: 0
    };
  }

  resetGame() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: !this.state.xIsNext,
      turn: 0
    });
  }

  handleClick(i) {
    let squares = this.state.squares;
    if (checkWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      turn: this.state.turn + 1
    });
  }

  renderSquare(i, number) {
    return (
      <Square
        id={number}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    let player = this.state.xIsNext ? "O" : "X";
    let winner = checkWinner(this.state.squares, player);
    let turn = this.state.turn;
    let status;
    if (winner) {
      status = winner + " wins!";
      setTimeout(() => this.resetGame(), 1500);
    } else if (turn === 9) {
      status = (this.state.xIsNext ? "X" : "O") + "'s turn!";
      setTimeout(() => this.resetGame(), 1500);
    } else {
      status = (this.state.xIsNext ? "X" : "O") + "'s turn!";
    }

    return (
      <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0, "zero")}
          {this.renderSquare(1, "one")}
          {this.renderSquare(2, "two")}
        </div>
        <div className="board-row">
          {this.renderSquare(3, "three")}
          {this.renderSquare(4, "four")}
          {this.renderSquare(5, "five")}
        </div>
        <div className="board-row">
          {this.renderSquare(6, "six")}
          {this.renderSquare(7, "seven")}
          {this.renderSquare(8, "eight")}
        </div>
        <h1>Tic-Tac-Toe</h1>
      </div>
    );
  }
}

export default Board;

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
