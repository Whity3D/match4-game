import React from 'react';

function TurnController(props) {
    let player = "RED"
    if (!props.currentPlayer)
       { player = "YELLOW" }
    return (
        <h2>{player} Player turn</h2>
    );
}

export default TurnController