
import React, { FunctionComponent, useEffect, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";
import {Row,Col} from "react-bootstrap";
import {EnigmaRole} from '../components/EnigmaRole' ;
import {Role} from '../classes/Role' ;
import { resourceLimits } from 'worker_threads';

type EnigmaRoleProps = {
     name       : string ;
     anzRoles   : number ;
    _paraminput : string ;
  }
export const EnigmaRoleSet : React.FC<EnigmaRoleProps>  = ({name,anzRoles,_paraminput}) => {
   
    let roles                : string[] = ["A","B","C"] ;
    let internalRoles        : Role[]   = [] ;
    let currentRoles         : string[] = [] ;
    const [ iroles, setIroles ]  = useState<Role[]>([]) ;
    const [input, setInput ]     = useState<string>("") ;
    const [loading, setLoading ] = useState<boolean>(true) ;


  useEffect( () => {
        createRole() ;
        setInput( input => _paraminput) ;
        setLoading(false) ;
  },[input])

  const createRole =  () => {
    let role1  : Role  = new Role("A")  ;
    let role2  : Role  = new Role("B")  ;
    let role3  : Role  = new Role("C")  ;
   
    internalRoles.push(role1) ;
    internalRoles.push(role2) ;
    internalRoles.push(role3) ;
    setIroles( result => internalRoles );
 
    }

   const calcRolleChiffre = ( chiffre : string) : string => {
       
    let _chiffre : string = "";
       try {
        _chiffre =  internalRoles[2]
            .input(internalRoles[1]
            .input(internalRoles[0]
            .input(chiffre))) ;   
        return _chiffre ;
       } catch (error) {
        return "" ;
       } } 
    
   const initRoleSet = (anz: number) => {
       roles.map( (item) => item ) ;
   }

   const getRolls = ()=> {
        return iroles.map( (item) => <Col lg="1"> <EnigmaRole key={item.toString()}
                            _name={item.getroleName()}  
                            _chiffre={calcRolleChiffre(input)}
                            _input={input}> </EnigmaRole>   </Col>) ;
   }
    return(
        <>
        <div className="EnigmaRoleSet">
            <Row> 
                <Col lg="5"> </Col>
               {!loading && getRolls() }
             
            </Row>
        </div>

        </>
    )

}
