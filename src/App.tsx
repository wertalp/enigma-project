import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col,Container, Badge } from 'react-bootstrap';
import {EnigmaRole} from './components/EnigmaRole' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import { EnigmaRoleSet } from './components/EnigmaRoleSet';

function App() {

   const [value, setValue] = useState<string>("A");
   const [crypt, setCrypt] = useState<string>("A");

   useEffect(() => {
  
   },[])


   const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         setValue( (value) =>  e.target.value);
   }


return ( 
 <Container>
   <div className="container-fluid">
     <h2> Enigma 2021</h2>
     <Row>
       <Col>
       <textarea className="InputBox" name="InputBox" cols={40} rows={2} value={value} onChange={handleChange}> Eingbabe Codierter Text</textarea>
       </Col>
       <Col>
       <textarea className="InputBox" name="OutBox" cols={40} rows={2}>    Here we go Encryption          </textarea>
       </Col>
       <Col></Col>
       <Col></Col>
       <Col></Col>
       <Col><h3> <Badge> {value}</Badge></h3></Col>
       <Col></Col>
     </Row>

     <div className="EnigmaRoleSet">
        <EnigmaRoleSet name="First RoleSet" anzRoles={3} _paraminput={value} key={value.toString()} ></EnigmaRoleSet>  
     </div>
    <Row>
        <div className="EnigmaKeyBoard"> </div>
    </Row>
   </div>

</Container>
  );
}

export default App;
