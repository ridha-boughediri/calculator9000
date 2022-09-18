import React from 'react';
import './Buttonrest.css';

function Buttonrest({resetClick}) {
  return (
    <div className="reset">
        <button  value={"CE"} onClick={resetClick} className="number" >CE</button>
    </div>
  )
}

export default Buttonrest;
