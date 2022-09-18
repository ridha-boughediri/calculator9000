import React from 'react';
import './MagnificNumber.css';

function MagnificNumber({buttonClick}) {
  const number=[9,8,7,6,5,4,3,2,1,0,"00","."];

  

  return (
    <div>
      {number.map((number)=>(
        <button  value={number} onClick={buttonClick} className="number" key={number}>{number}</button>
      ))}
    </div>
  )
}

export default MagnificNumber;

