import React, { FunctionComponent, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";
import {Col} from "react-bootstrap"; 



export const EnigmaRole : FunctionComponent<RoleProps>= ({_name, _input , _encrypt } : RoleProps) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount]  = useState(0);
  const [time, setTime]    =  useState<number>(0);
  const [letter,setLetter] = useState<Map<string,string>>(new Map()) ;
  const [orig, setOrig]    = useState<String> ("") ;
  const [crypt, setCrypt]  = useState<String> ("") ;
  const [newLetter, setNewLetter]  = useState<string> ("") ;
  let   cLetter : string = "";
  const [wobble, setWobble] = React.useState(0);
  const [cryptLetter, setCryptLetter]  = useState<string|undefined> ("") ;
  const [encodedText, setEncodedText] = useState<string>("BRIEF: ")  ;
  
  React.useEffect ( 
      ()  => {

    async function setUpSpinnWheel() {
     loadWheel() ;
     setNewLetter( newLetter => _input) ;
     setCryptLetter( cryptLetter => {localStorage.setItem("encrypted",getcryptedValue(newLetter)||"") ; 
                                     cLetter = cLetter.concat(encodedText.concat(getcryptedValue(newLetter)||""));   
                                     setEncodedText( encodedText => cLetter)  ;
                                     localStorage.setItem( "encryptedText", encodedText.concat(getcryptedValue(newLetter)||"") ); return getcryptedValue(newLetter) }) ;  
     _encrypt(cryptLetter)   
            window.setInterval(
            () =>  diceRoleKeys() ,800);  
    }            
    setUpSpinnWheel();
    }, [newLetter]);

    const loadWheel = async () => {
        setLetter(letter => initWheel());
        setLetter(initWheel()) ;
        console.log( "Here we go with the Spinner Load: "+letter.get("A")) ;
    }

    const diceRoleKeys = () => {
        setCrypt( crypt =>  { setOrig( orig => String.fromCharCode(97+ getRandomArbitrary(0,26)).toUpperCase() || "" );
        return letter.get(String.fromCharCode(97+ getRandomArbitrary(0,26)).toUpperCase()) || ""});
    }

    const getcryptedValue= ( input : string | undefined): string | undefined  => {
        try {
            if(letter.get(newLetter))
            {
                return letter.get(newLetter) ;
            }
        } catch (error) {
            console.log("Error") ;
        }
        return "" ;
    }

  return (
    <>
      <h4>{_name}</h4>
    
     <div id="EnigmaRole"  className="EnigmaRole" onClick={() => setWobble(1)}>
     <Badge  bg="info" text="dark">
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
    </div>

</>
  );
}
