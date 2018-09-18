import React, { Component } from 'react';

class Column extends Component {
  constructor(props) {
    super(props);
    this.cells = []
    this.state = {
      cells: new Array(6).fill('cell')
    }

  }
    
  render() {
    let cells = this.state.cells
    let renderCells = cells.map((item, num) => {
      let className = item
      return <div key={num} className={className}></div>
    })
    
    return (
      <div className='column' onClick={this.takeOwner}>
        {renderCells}
      </div>
    )
  }

  takeOwner = () => {
    let cells = this.state.cells
    let i = cells.lastIndexOf('cell')
    if (i !== -1) {
      if (this.props.currentPlayer) {
        cells.splice(i,1,'cell red')
      }
      else {
        cells.splice(i,1,'cell yellow')
      }
      this.props.changePlayer()
    }
    this.setState({cells: cells})
  }
}

export default Column