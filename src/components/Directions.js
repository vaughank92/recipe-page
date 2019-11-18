import React from 'react';

const Directions = (props) => (
  <div className="directions">
    <h4>Directions</h4>
    {props.directionsList.map((item) => {
      return <ol>{item}</ol>
    })}
  </div>
)

export default Directions;
