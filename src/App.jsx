import React, { Component } from "react";
import "./App.css";

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(""),
		};
	}
	componentDidMount() {}
	handleClick = (square) => {
		console.log(square);
		// this.setState()
	};
	render() {
		return (
			<div>
				{this.state.squares.forEach((square) => {
					{
						/* console.log(square); */
					}
					<Square handleClick={this.handleClick} status={square} />;
				})}
			</div>
		);
	}
}

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = { props };
	}
	componentDidMount() {
		console.log("mounted");
		console.log(this.state);
	}
	render() {
		return <button>{this.props.status}</button>;
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
