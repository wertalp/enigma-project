import React from "react";

const wheelData  = new Map([
        ["A", 'Q'],   ["B", 'W'],["C", 'E'],["D", 'R'],["E", 'T'],
        ["F", 'Z'],["G", 'U'],["H", 'I'],["I", 'O'],["J", 'P'],["K", 'A'],
        ["L", 'S'],["M", 'D'],["N", 'F'],["O", 'G'],["P", 'H'],["Q", 'J'],
        ["R", 'K'],["S", 'L'],["T", 'Y'], ["U", 'X'],["V", 'C'],["W", 'V'],
        ["X", 'B'],["Y", 'N'],["Z", 'M']
      ])


export const initWheel = () => {
    console.log("Herew we are in loading The Crypto Wheel"+ wheelData.get("L"));
  return wheelData ;

} ;

export function getRandomArbitrary(min: number, max: number) :number  {
    return Math.floor(Math.random() * (max - min) + min);
} ;

export  const AppContext = React.createContext('Error');