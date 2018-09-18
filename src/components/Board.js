import React, {Component} from 'react';

import Column from './Column';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state={
            globalCells: new Array(42).fill('cell')
        }
    }

    makeTurn = (index) => {
        let currentPlayer = this.props.currentPlayer ? "cell red" : "cell yellow"
        let cells = this.state.globalCells
        cells.splice(index, 1, currentPlayer)
        this.setState({globalCells: cells})
        this.props.changePlayer()
        this.props.fillHandler(cells)

    }

    render() {
        let cells = this.state.globalCells
        let objCells = cells.map((item,index) => {
            return {index: index, status: item}
        })
        function chunk() {
            let tmp = [];
            for (let i=0; i < objCells.length; i+=6)
              tmp.push(objCells.slice(i,i+6));
            return tmp;
          }
        let columns = chunk()
        let renderColumns = columns.map((item, num) => {
            return <Column makeTurn={this.makeTurn} propCells={item} changePlayer={this.props.changePlayer} index={num} key={num}/>
          })

        return (
            <div className="board">
                {renderColumns}
            </div>
        )
    }
}
export default Board