import React from 'react';

import Column from './Column';

function Board(props) {

    const colNums = 7;
    const cols = []
    for (let i = 0;i < colNums;i++) {
       
       cols.push(<Column changePlayer={props.changePlayer} currentPlayer={props.currentPlayer} index={i} key={i}/>)
    }
    return (
        <div className="board">
            {cols}
        </div>
        )
}

export default Board