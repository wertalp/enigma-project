import React, { FunctionComponent, useEffect, useState } from 'react';
import { Button, Row, Col,Container, Badge } from 'react-bootstrap';
import {fromEvent, map ,from} from 'rxjs' ;
export const Touchpad : FunctionComponent<any>= (any) => { 


   const [mouseX, setMouseX ]   =  useState(0) ;
   const [mouseY, setMouseY ]   =  useState(0) ;


   useEffect(() =>{
     
    const sub = fromEvent<MouseEvent>(document, 'mousemove')
    // Extract out current mouse position from the event
    .pipe(map(event => [event.clientX, event.clientY]))
    // We have closure over the updater functions for our two state variables
    // Use these updaters to bridge the gap between RxJS and React
    .subscribe(([newX, newY]) => {
        setMouseX(newX)
        setMouseY(newY)
    })

   } )




    return (
        <>
        <h4>HERE WE ARE</h4>
        <button > {mouseX} </button>
        <button> {mouseY}</button>
        
        </>
    )
}