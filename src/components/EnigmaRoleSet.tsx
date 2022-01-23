
import React, { FunctionComponent, useEffect, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";
import {EnigmaRole} from '../components/EnigmaRole' ;

type EnigmaRoleProps = {
    name: string;
    anzRoles : number ;
  }
export const EnigmaRoleSet : React.FC<EnigmaRoleProps>  = ({name}) => {
    let roles: string[] = ["A","B","C","D","E"] ;
    let currentRoles : string[] =[] ;

  useEffect( () => {
       initRoleSet(3);


  },[])

   const initRoleSet = () => {
       roles.map( (item) => item ) 

   }

    return(
        <>


        </>
    )

}