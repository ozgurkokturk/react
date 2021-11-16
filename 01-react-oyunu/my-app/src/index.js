import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function calculateWinner(squares) {
  console.log(squares);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    console.log('\n' + 'square A: ' + squares[a]);
    console.log('square B: ' + squares[b]);
    console.log('square C: ' + squares[c]);

    if (squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


  /* Square Fonksiyonu */
  function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
  }
  /* --- Square Fonksiyonu --- */



  class Board extends React.Component {

    handleClick(i){
        const squares = this.state.squares.slice();

        if(calculateWinner(squares) || squares[i]){
          return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    

    renderSquare(i) {
      return (
            <Square
              value = {this.props.squares[i]}
              onClick = {() => this.props.onClick(i)}
            />
        );
    }

    
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner){
        status = 'Kazanan: ' + winner;
      } else{
        status = 'Sıradaki Oyuncu: ' + (this.state.xIsNext ? "X" : "O");
      }

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
      };
  };



    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  