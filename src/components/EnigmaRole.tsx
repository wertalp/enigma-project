import React, { FunctionComponent, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";
import {Col} from "react-bootstrap";



export const EnigmaRole : FunctionComponent<RoleProps>= ({name} : RoleProps) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const [time, setTime]  =  useState<number>(0);
  const [letter,setLetter] = useState<Map<String,String>>(new Map()) ;
  const [crypt, setCrypt]  = useState<String> ("") ;
  
  React.useEffect( ()  => {

    loadWheel() ;

    async function setUpSpinnWheel() {
        const timer = window.setInterval(() => {
                  setTime( time => { setCrypt(crypt =>String.fromCharCode(97+ time));  return getRandomArbitrary(0,27) });
                
          }, 500);

    return () => {
    window.clearInterval(timer);
    };     

    }
    setUpSpinnWheel();

  }, []);

  const loadWheel = () =>{
         setLetter(initWheel()) ;
  }

  return (
    <>
    <Col lg="1">
         {name}
     <div className="EnigmaRole">
        <Badge  bg="secondary" text="dark">
        {crypt}
        </Badge>
    </div>
    </Col>
</>
  );
}
