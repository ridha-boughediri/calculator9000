import React from 'react';
import './Operation.css';

function GreanOperationklk({buttonClick}) {

    const operations=["+","-","/","*","%"]

  return (
    <div className="Operation">
         {operations.map((operations)=>(
        <button  value={operations}  onClick={buttonClick} className="operations" key={operations}>{operations}</button>
      ))}
    </div>
  )
}

export default GreanOperationklk