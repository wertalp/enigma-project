
import React, { FunctionComponent, useEffect, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";
import {Row,Col} from "react-bootstrap";
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
            <Row> 
                <Col lg="4"> </Col>
                {roles.map( (item) => <Col lg="1"> <EnigmaRole name={item}> </EnigmaRole>   </Col> ) }
            </Row>
         
        </div>

        </>
    )

}