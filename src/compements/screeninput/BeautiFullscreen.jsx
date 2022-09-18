import React from 'react'
import ItSOverNineThousand from '../itSOverNineThousand/ItSOverNineThousand';
import './BeautiFullscreen.css'

function BeautiFullscreen({inputNumber,inputResults,numberChange,resultsChange}) {
    // on peut mettre lespropos sans mettre les props
  return (
<div>
<input value={inputNumber} onChange={numberChange}   type="text"/>

  {inputResults > 9000 ? (<ItSOverNineThousand/> ) : (<input value={inputResults} onChange={resultsChange} disabled type="text"/>)}
  
  
</div>
  )
}

export default BeautiFullscreen;