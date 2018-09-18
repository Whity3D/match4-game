import React, { Component } from 'react';

class Column extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    let cells = this.props.propCells
    let renderCells = cells.map((item, num) => {
      let className = item.status
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
    cells.reverse()
    for (let i = 0; i < cells.length; i++) {
      let ind
      if (cells[i].status === 'cell') {
        ind = cells[i].index
        this.props.makeTurn(ind)
        return
      }
    }
  }
}

export default Column