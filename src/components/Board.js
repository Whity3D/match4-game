import React, { Component } from 'react';

import Column from './Column';

function Board() {
    const colNums = 7;
    const cols = []
    for (let i = 0;i < colNums;i++) {
       
       cols.push(<Column index={i} key={i}/>)
    }
    return (
        <div className="board">
            {cols}
        </div>
        )
}

export default Board