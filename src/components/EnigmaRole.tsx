import React, { FunctionComponent, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";
import {Col} from "react-bootstrap"; 
import {messageService} from "../utils/services" ;



export const EnigmaRole : FunctionComponent<RoleProps>= ({_name, _input, _chiffre  } : RoleProps) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount]  = useState(0);
  const [time, setTime]    =  useState<number>(0);
  const [wheelData,setWheelData] = useState<Map<string,string>>(new Map()) ;
  const [orig, setOrig]     = useState<String> ("") ;
  const [crypt, setCrypt]   = useState<String> ("") ;
  const [newLetter, setNewLetter]  = useState<string> ("") ;
  const [wobble, setWobble] = React.useState(0);
  const [cryptLetter, setCryptLetter]  = useState<string> ("") ;
  const [encodedText, setEncodedText]  = useState<string>("")  ;
  const [init,setInit] = useState<boolean>(true) ;
  const [chiffre,setChiffre] = useState<string>("BB") ;
  let   currentCryptLetter   : string  = ""   ;
  let   isStorage            : Boolean = false;
  

  React.useEffect ( 
        ()  => {
        function doRender() {
            setNewLetter((newLetter) =>  {return _input}) ;
            setChiffre(chiffre =>  _chiffre) ;
        }   
        if (init){
            loadWheel();
            setInit(init => false)
        }     
        doRender();
    messageService.sendMessage(getcryptedValue(newLetter));
    }, [newLetter]);
  
  
    const loadWheel = () => {
        setWheelData(wheelData => initWheel());

        window.setInterval(
            () =>  diceRoleKeys(),800);  
            console.log( "Here we go with the Spinner Load: "+wheelData.get("A")) ;
    }

    const diceRoleKeys = () => {
        setCrypt( crypt =>  
    {   setOrig(  orig  => String.fromCharCode(97+ getRandomArbitrary(0,26)).toUpperCase());
        return wheelData
              .get(String.fromCharCode(97+ getRandomArbitrary(0,26)).toUpperCase()) || ""});
    }

    const getcryptedValue= ( input : string): any  => {
    try {
        if(wheelData.get(_input))
        {
        let a = wheelData.get(_input) ? wheelData.get(_input) : " " ;
        setCryptLetter(cryptLetter => a||"" ) ;
        return a;
        }
    } catch (error) {
        console.log("Error") ;
    }
        return "" ;
}

  return (
    <>
      <h4>{_name}</h4>
    <div className="EnigmaRoleOut">

     <div id="EnigmaRole"  className="EnigmaRole" onClick={() => setWobble(1)}>
     <Badge  bg="success" text="dark">
        {newLetter} 
        </Badge>
        <Badge  bg="warning" text="dark">
        {orig}
        {crypt}
        </Badge>
        <Badge  bg="warning" text="dark">
        {orig}
        {crypt}
        </Badge>
        <Badge  bg="warning" text="dark">
        {orig}
        {crypt}
        </Badge>
        <Badge  bg="success" text="dark">
        {cryptLetter}
        </Badge>
        <Badge  bg="success" text="dark">
        {chiffre}
        </Badge>

    </div>
    </div>


</>
  );
}
