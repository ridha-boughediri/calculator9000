import React from 'react'
import './GreanOperationklk.css';

function GreanOperationklk({buttonClick}) {

    const operations=["+","-","/","*","%"]

  return (
    <div>
         {operations.map((operations)=>(
        <button  value={operations}  onClick={buttonClick} className="operations" key={operations}>{operations}</button>
      ))}
    </div>
  )
}

export default GreanOperationklk