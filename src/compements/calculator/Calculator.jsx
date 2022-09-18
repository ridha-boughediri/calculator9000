import React , {useState} from 'react';
import Buttonrest from '../Buttonreset/Buttonrest';
import GreanOperationklk from '../greatOpe/GreanOperationklk';
import MagnicientEgal from '../magnicientEgal/MagnicientEgal';
import MagnificNumber from '../magnumber/MagnificNumber';
import BeautiFullscreen from '../screeninput/BeautiFullscreen';
import Title from '../title/Title';
import './Calculator.css';


function Calculator() {


const [number,setNumber]=useState(0);
const [results,setResults]=useState("");

const handleClick=(e)=>{
  number===0?setNumber(e.target.value):setNumber(number + e.target.value);

}



const lecalcul=()=>{

  const calculResult =eval(number);
  setResults(calculResult);

}


  
  return (
    <div className="gird-wrapper">
      
          <Title/>
          <div className="head">
          <BeautiFullscreen  inputNumber={number} inputResults={results} numberChange={(e)=>setNumber(e.target.value)} resultsChange={(e)=>setResults(e.target.value)} />
          <MagnificNumber buttonClick={(e)=>handleClick(e)} />
          <div>
          <GreanOperationklk  buttonClick={(e)=>handleClick(e)}/>
          <MagnicientEgal  buttonClick={()=>lecalcul()}/>
          <Buttonrest resetClick={() => {setResults(0);setNumber(0);}}/>

         </div>
          </div>
                    

    </div>

  )
}

export default Calculator;


//  {/* on creer un fonntion anonyme et le refencer pour recuper levenement avan =>numberChnege  */}
//           {/* on fait la meme chose pour le deuxiemen input  */}
      