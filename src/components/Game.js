import React, { Component } from 'react';

import TurnController from './TurnController';
import Board from './Board';


class Game extends Component {
    constructor() {
        super();
        this.state = {
            isRedCurrent: true,
            isBoardFill: false,
            isWin: false
        }
    }

    changePlayer = () => {
        this.setState({isRedCurrent: !this.state.isRedCurrent})
    }

    fillHandler = (columns) => {
        let cells = columns[0].concat(columns[1],columns[2],columns[3],columns[4],columns[5],columns[6])
        let isFill = (cells.indexOf('cell') === -1) ? true : false
        this.setState({isBoardFill: isFill})
    }

    checkRow = (columns) => {
        for (let i = 0; i < columns.length-3; i++) {
            for (let j = 0; j < columns[i].length; j++) {
                if (columns[i][j] === columns[i+1][j] &&
                    columns[i][j] === columns[i+2][j] &&
                    columns[i][j] === columns[i+3][j] &&
                    columns[i][j] !== 'cell') {
                        this.setState({isWin: true})
                }
            }
        }
    }

    checkCol = (columns) => {
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j < columns[i].length; j++) {
                if (columns[i][j] === columns[i][j+1] &&
                    columns[i][j] === columns[i][j+2] &&
                    columns[i][j] === columns[i][j+3] &&
                    columns[i][j] !== 'cell') {
                        this.setState({isWin: true})
                }
            }
        }
    }

    checkDia = (columns) => {
        for (let i = 0; i < columns.length-4; i++) {
            for (let j = 0; j < columns[i].length-3; j++) {
                if (columns[i][j] === columns[i+1][j+1] &&
                    columns[i][j] === columns[i+2][j+2] &&
                    columns[i][j] === columns[i+3][j+3] &&
                    columns[i][j] !== 'cell') {
                        this.setState({isWin: true})
                }
            }
        }

        for (let i = 0; i < columns.length-4; i++) {
            for (let j = 3; j < columns[i].length; j++) {
                if (columns[i][j] === columns[i+1][j-1] &&
                    columns[i][j] === columns[i+2][j-2] &&
                    columns[i][j] === columns[i+3][j-3] &&
                    columns[i][j] !== 'cell') {
                        this.setState({isWin: true})
                }
            }
        }
    }

    checkWin = (columns) => {
        this.checkRow(columns)
        this.checkCol(columns)
        this.checkDia(columns)
    }


    render() {

        return (
            <div className="game">
                <TurnController isWin={this.state.isWin} isBoardFill={this.state.isBoardFill} currentPlayer={this.state.isRedCurrent}/>
                <Board checkWin={this.checkWin} changePlayer={this.changePlayer} fillHandler={this.fillHandler} currentPlayer={this.state.isRedCurrent}/>
            </div> 
        )
    }
}

export default Game