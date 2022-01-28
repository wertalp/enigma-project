
import React, { FunctionComponent, useEffect, useState } from 'react';
import {RoleProps} from './InterfaceProps' ;
import {initWheel, getRandomArbitrary} from '../utils/utilities';
import Badge from "react-bootstrap/Badge";
import {Row,Col} from "react-bootstrap";
import {EnigmaRole} from '../components/EnigmaRole' ;

type EnigmaRoleProps = {
     name       : string ;
     anzRoles   : number ;
    _paraminput : string ;
  }
export const EnigmaRoleSet : React.FC<EnigmaRoleProps>  = ({name,anzRoles,_paraminput}) => {
    let roles        : string[] = ["A","B","C"] ;
    let currentRoles : string[] =[] ;
    const [input, setInput ] = useState<string>("X") ;

  useEffect( () => {
       initRoleSet(3);
       setInput( input => _paraminput) ;

  },[input])

   const initRoleSet = (anz: number) => {
       roles.map( (item) => item ) ;
   }


    return(
        <>
        <div className="EnigmaRoleSet">
            <Row> 
                <Col lg="5"> </Col>
                {roles.map( (item) => <Col lg="1"> <EnigmaRole key={input.toString()} _name={item}  _input={input}> </EnigmaRole>   </Col> ) }
            </Row>
        </div>

        </>
    )

}
