import React, { Component } from 'react';

class Column extends Component {
    
  render() {
    let cells = this.props.propCells
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
    let cells = this.props.propCells
    let cellIndex = cells.lastIndexOf('cell')
    if (cellIndex !== -1) { 
      this.props.makeTurn(cellIndex,this.props.index) 
    }
  }
}

export default Column