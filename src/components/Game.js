import React, { Component } from 'react';

import TurnController from './TurnController';
import Board from './Board';


class Game extends Component {
    constructor() {
        super();
        this.state = {
            isRedCurrent: true,
            isBoardFill: false,
        }
    }

    changePlayer = () => {
        this.setState({isRedCurrent: !this.state.isRedCurrent})
    }

    fillHandler = (cells) => {
        let isFill = cells.every((item) => {
           return item !== 'cell'? true : false
        })
        this.setState({isBoardFill: isFill})
    }

    render() {

        return (
            <div className="game">
                <TurnController isBoardFill={this.state.isBoardFill} currentPlayer={this.state.isRedCurrent}/>
                <Board changePlayer={this.changePlayer} fillHandler={this.fillHandler} currentPlayer={this.state.isRedCurrent}/>
            </div> 
        )
    }
}

export default Game