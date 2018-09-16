import React, { Component } from 'react';

function Cell(props) {
  let className = "cell"

  if (props.owner === "red") {
    className += " red"
  }

    return (
      <div className={className}>{props.index}</div>
    );
  }

export default Cell