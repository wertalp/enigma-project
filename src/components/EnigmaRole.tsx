import React, { FunctionComponent, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";


export const EnigmaRole : FunctionComponent<RoleProps>= (props : RoleProps) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const [time, setTime]  =  useState<number>(0);
  const [letter,setLetter] = useState<Map<String,String>>(new Map()) ;
  const [crypt, setCrypt]  = useState<String> ("") ;
  
  React.useEffect( ()  => {

    loadWheel() ;

    async function fetchData() {
        const timer = window.setInterval(() => {
                  setTime( time => { setCrypt(crypt =>String.fromCharCode(97+ time));  return getRandomArbitrary(0,27) });
                
          }, 500);

    return () => {
    window.clearInterval(timer);
    };     

    }
    fetchData();

  }, []);

  const loadWheel = () =>{
         setLetter(initWheel()) ;
  }

  return (
    <div className="EnigmaRole">
        {crypt}
        {crypt}
        {crypt}
    
        <Badge  bg="secondary" text="dark">
        {crypt}
        </Badge>
        <Badge  bg="secondary" text="dark">
        {crypt}
        </Badge>
     
    </div>
  );
}
