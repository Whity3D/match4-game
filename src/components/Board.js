import React, {Component} from 'react';

import Column from './Column';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state= {
            cellsColumns: []
            
        }
    }

    componentDidMount() {
        function chunk() {
            let cells = new Array(42).fill('cell')
            let tmp = [];
            for (let i=0; i < cells.length; i+=6)
              tmp.push(cells.slice(i,i+6));
            return tmp;
        }
        let columns = chunk()
        this.setState({cellsColumns: columns})
    }

    makeTurn = (cellIndex, colIndex) => {
        let currentPlayer = this.props.currentPlayer ? "cell red" : "cell yellow"
        let columns = this.state.cellsColumns
        columns[colIndex].splice(cellIndex, 1, currentPlayer)
        this.setState({cellColumns: columns})
        this.props.fillHandler(columns)
        this.props.checkWin(columns)
        this.props.changePlayer()
    }

    

    render() {
        let columns = this.state.cellsColumns
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