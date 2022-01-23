
import React, { FunctionComponent, useEffect, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";
import {EnigmaRole} from '../components/EnigmaRole' ;

type EnigmaRoleProps = {
    name: string;
    anzRoles : number ;
  }
export const EnigmaRoleSet : React.FC<EnigmaRoleProps>  = ({name,anzRoles}) => {
    let roles: string[] = ["A","B","C","D","E"] ;
    let currentRoles : string[] =[] ;

  useEffect( () => {
       initRoleSet(3);


  },[])

   const initRoleSet = (anz: number) => {
       roles.map( (item) => item ) ;

   }

    return(
        <>
        <div>
            {roles.map( (item) => <EnigmaRole name={item}> </EnigmaRole> ) }
        </div>

        </>
    )

}