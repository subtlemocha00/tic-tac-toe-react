import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(""),
			isXTurn: true,
		};
	}
	handleClick = (index) => {
		const squares = this.state.squares;
		if (squares[index]) return;
		squares[index] = this.state.isXTurn ? "X" : "O";
		this.setState({
			squares: squares,
			isXTurn: !this.state.isXTurn,
		});
		console.log("Now it's ", this.state.squares[index], "'s TURN!");
	};
	render() {
		return (
			<div className="container border border-dark p-5">
				{this.state.squares.map((square, index) => {
					return (
						<Square
							key={index}
							index={index}
							handleClick={this.handleClick}
							status={square}
						/>
					);
				})}
			</div>
		);
	}
}

class Square extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button
				onClick={() => this.props.handleClick(this.props.index)}
				className="btn col-4 border border-danger fs-1"
			>
				{this.props.status}
			</button>
		);
	}
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Tic-Tac-Toe</p>
			</header>
			<Board />
		</div>
	);
}

export default App;
