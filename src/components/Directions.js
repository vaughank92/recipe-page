import React from 'react';

const Directions = ({directionsList}) => (
  <div className="directions">
    <h4>Directions</h4>
    {directionsList ? directionsList.map((item, index) => {
      return <ol key={index}>{item}</ol>
    }) : null }
  </div>
)

export default Directions;
