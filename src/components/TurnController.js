import React from 'react';

function TurnController(props) {
    if (props.isWin) {
        if (props.currentPlayer) {
            return (<h2>Yellow player win!!!</h2>)
        }
        return (<h2>Red player win!!!</h2>)
    }
    if (!props.isBoardFill) {
        let player = "RED"
        if (!props.currentPlayer)
            { player = "YELLOW" }
        return (
        <h2>{player} Player turn</h2>
    )
    }
    return (<h2>Game over! Board is fill!</h2>)
}

export default TurnController