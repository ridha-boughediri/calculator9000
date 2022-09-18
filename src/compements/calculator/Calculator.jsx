import React , {useState} from 'react';
import Buttonrest from '../Buttonreset/Buttonrest';
import GreanOperationklk from '../greatOpe/GreanOperationklk';
import MagnicientEgal from '../magnicientEgal/MagnicientEgal';
import MagnificNumber from '../magnumber/MagnificNumber';
import BeautiFullscreen from '../screeninput/BeautiFullscreen';
import Title from '../title/Title';


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
    <div className="wrapper ">
      
          <Title/>
          <div class="head">
          <BeautiFullscreen  inputNumber={number} inputResults={results} numberChange={(e)=>setNumber(e.target.value)} resultsChange={(e)=>setResults(e.target.value)} />
          <div>
          <MagnificNumber class="chiffre" buttonClick={(e)=>handleClick(e)} />

          <GreanOperationklk class="operations" buttonClick={(e)=>handleClick(e)}/>
          <MagnicientEgal class="egal" buttonClick={()=>lecalcul()}/>
          <Buttonrest class="operation" resetClick={() => {setResults(0);setNumber(0);}}/>

         </div>
          </div>
                    

    </div>

  )
}

export default Calculator;


//  {/* on creer un fonntion anonyme et le refencer pour recuper levenement avan =>numberChnege  */}
//           {/* on fait la meme chose pour le deuxiemen input  */}
      