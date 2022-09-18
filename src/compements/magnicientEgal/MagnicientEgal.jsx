import React from 'react'
import './MagnicientEgal.css'

function MagnicientEgal({buttonClick}) {
  return (
    <div className="equal-sign"> <button  value={"="} onClick={buttonClick} className="number" >=</button></div>
  )
}

export default MagnicientEgal