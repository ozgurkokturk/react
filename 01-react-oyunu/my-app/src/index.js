import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//ilk

<<<<<<< HEAD
=======
var durum = true;

>>>>>>> 34bf0a33535e2f3f67d56f9a5fe1f03a071c8492

function calculateWinner(squares) {
  var donguSquare = JSON.stringify(squares);
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



    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {

      // console.log(squares[a], squares[b], squares[c]);

      // Kazanan: true yazmasını istemiyorsan  return true yerine aşağıdakini return et :)
      return squares[a];
    }
  }



  if (durum == true) {
    // console.log(donguSquare);
  }
  durum = !durum;

  return null;
}





/* Square Fonksiyonu */
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
/* --- Square Fonksiyonu --- */




class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
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



<<<<<<< HEAD
  class Board extends React.Component {
    renderSquare(i) {
      return (
            <Square
              value = {this.props.squares[i]}
              onClick = {() => this.props.onClick(i)}
            />
        );
    }
  
    render() {
      return (
        <div>
          <div className="status">{this.props.status}</div>
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
=======
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  };

  jumpTo(sirasi){
    this.setState({
      stepNumber: sirasi,
      xIsNext: (sirasi % 2) === 0,
    });
  }

  handleClick(i) {


    const history = this.state.history.slice(0, this.state.stepNumber + 1 );
    // console.log(history);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // console.log(current  );
    // console.log("squares: " + squares);

    // squares[i] = null olarak  geliyor. Eğer seçtiğimiz bir kareyi tekrar seçersek bu sefer dolu geliyor
    if (calculateWinner(squares) || squares[i]) {
      return;
>>>>>>> 34bf0a33535e2f3f67d56f9a5fe1f03a071c8492
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
<<<<<<< HEAD
  


  class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
          xIsNext: true,
      };
  };

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

=======

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
>>>>>>> 34bf0a33535e2f3f67d56f9a5fe1f03a071c8492

    console.log("stepNumber: " + this.state.stepNumber + "       xIsNext: " + this.state.xIsNext);

<<<<<<< HEAD
    render() {
      const history = this.state.history;
      const current = history[history.length -1];
      console.log(current.squares);
      const winner = calculateWinner(current.squares);
      let status;
      if(winner){
        status = "Kazanan: " + winner;
      }else{
        status = "Sıradaki Oyuncu: " + (this.setState.xIsNext ? 'X' : 'O');
      }


      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares = {current.squares}
              onClick = {(i) => this.handleClick(i)}
             />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
=======
    // history arrayi içinde dönmek için map kullanıyoruz
    const moves = history.map((step, sirasi) => {
      const desc = sirasi ? "Git " + sirasi : "Oyuna Başla";
      return(
        <li key={sirasi}>
          <button onClick={() => this.jumpTo(sirasi)}>{desc}</button>
        </li>
>>>>>>> 34bf0a33535e2f3f67d56f9a5fe1f03a071c8492
      );
    });




    let status;
    if (winner) {
      status = 'Kazanan: ' + winner;
    } else {
      status = 'Sıradaki Oyuncu: ' + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
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
