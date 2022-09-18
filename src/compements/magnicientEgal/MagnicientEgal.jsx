import React from 'react'
import './Equal.css';

function MagnicientEgal({buttonClick}) {
  return (
    <div className="equals"> <button  value={"="} onClick={buttonClick} className="number" >=</button></div>
  )
}

export default MagnicientEgal