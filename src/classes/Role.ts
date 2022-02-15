
import {initWheel} from '../utils/utilities' ;
export class Role {
     
wheelDatas : Object     = {}  ; 
roleName   : string     = ""  ;
encodedChiffre : string = "" ;

    constructor( crypt : string   ){
        this.initialize() ;
        this.roleName = "Rolle-"+crypt ;
    }
    

   input = (chiffre : string) => {
    try {
        return "INITA";
    } catch (error) {
        return "INITB";
    }} 

    output = (): string =>{
      if ( this.encodedChiffre){
          return  this.encodedChiffre ? this.encodedChiffre : "" ;
      }
        return "" ; }

    initialize =() => {
    try {
        this.wheelDatas = initWheel() ;  
     } catch (error) {
        console.log("Error initia Role");
     }}

    getroleName = (): string => {
        return this.roleName ;
    }

    getWheelDatas = (): {} => {
        return this.wheelDatas ;
    }


} 