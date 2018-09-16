import React, { Component } from 'react';
import Cell from './Cell';

class Column extends Component {
  constructor(props) {
    super(props);
    this.cells = [],
    this.state = {
      cellNums: 6,
      cells: [],
      className: "cell"
    }

  }
    
  render() {
    this.cells = []
    for (let i = 0;i < this.state.cellNums;i++) {
      this.cells.push(<div className={this.state.className} key={i}></div>)
    }
    
    return (
      <div className="column" onClick={this.takeOwner}>
        {this.cells}
      </div>
    )
  }

  takeOwner = () => {
    this.setState({className: "cell red"})
  }

  getIndex = () => {
    return (alert(this.props.index))
}
}



export default Column