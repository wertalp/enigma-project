import React, { FunctionComponent, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";
import {Col} from "react-bootstrap";




export const EnigmaRole : FunctionComponent<RoleProps>= ({_name, _input , _encrypt } : RoleProps) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount]  = useState(0);
  const [time, setTime]    =  useState<number>(0);
  const [letter,setLetter] = useState<Map<String,String>>(new Map()) ;
  const [orig, setOrig]    = useState<String> ("") ;
  const [crypt, setCrypt]  = useState<String> ("") ;
  const [paramvalue, setParamvalue]  = useState<string> ("") ;
  let    myMap  : Map<string,string> = new Map() ;
  let   cLetter : string = "";
  const [wobble, setWobble] = React.useState(0);
  const [verschluss, setVerschluss]  = useState<string|undefined> ("") ;
  
  React.useEffect( ()  => {

    async function setUpSpinnWheel() {
    await loadWheel() ;
    window.setInterval(
    () => {
        setParamvalue( paramvalue => _input) ;
        _encrypt(paramvalue) ;
        setCrypt( crypt =>  { setOrig( orig => String.fromCharCode(97+ getRandomArbitrary(0,26)).toUpperCase() || "" );
                              return myMap.get(String.fromCharCode(97+ getRandomArbitrary(0,26)).toUpperCase()) || ""});
        setVerschluss( verschluss => getcryptedValue(paramvalue)) ;  
        _encrypt(verschluss)                   
        },1000) }
    setUpSpinnWheel();
}, [paramvalue]);

    const loadWheel = async () => {
        myMap = await initWheel();
        setLetter(initWheel()) ;
        console.log( "Here we go with the Spinner Load: "+myMap.get("A")) ;
    }

    const getcryptedValue= ( input : string | undefined): string | undefined  => {
        try {
            if(myMap.get(paramvalue))
            {
                return myMap.get(paramvalue) ;
            }
        } catch (error) {
            console.log("Error") ;
        }
        return "Error" ;
    }

  return (
    <>
      <h4>{_name}</h4>
     <div id="EnigmaRole"  className="EnigmaRole" onClick={() => setWobble(1)}>
       
        <Badge  bg="info" text="dark">
        {paramvalue}
        </Badge>
        <Badge  bg="warning" text="dark">
        {orig}
        {crypt}
        </Badge>
        <Badge  bg="success" text="dark">
        {verschluss}
       
        </Badge>
    </div>
</>
  );
}
