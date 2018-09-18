import React, { Component } from 'react';

import TurnController from './TurnController';
import Board from './Board';


class Game extends Component {
    constructor() {
        super();
        this.state = {
            isRedCurrent: true,
        }
    }

    changePlayer = () => {
        this.setState({isRedCurrent: !this.state.isRedCurrent})
    }

    render() {

        return (
            <div className="game">
                <TurnController currentPlayer={this.state.isRedCurrent}/>
                <Board changePlayer={this.changePlayer} currentPlayer={this.state.isRedCurrent}/>
            </div> 
        )
    }
}

export default Game