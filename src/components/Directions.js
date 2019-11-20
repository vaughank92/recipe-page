import React from 'react';

const Directions = (props) => (
  <div className="directions">
    <h4>Directions</h4>
    {props.directionsList.map((item, index) => {
      return <ol key={index}>{item}</ol>
    })}
  </div>
)

export default Directions;
