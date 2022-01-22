import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col,Container } from 'react-bootstrap';
import {EnigmaRole} from './components/EnigmaRole' ;
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
 
 <Container>
   <div className="container-fluid">
     <h2> Enigma 2021</h2>
     <button type="button" className="btn btn-outline-secondary">Start</button>
     <button type="button" className="btn btn-outline-secondary">Encrypt</button>
     <div className="EnigmaRoleSet">
     <Row>
        <Col lg="5">
        </Col>
        <Col lg="1">
        <EnigmaRole CryptedLetters="HAllo"> </EnigmaRole>
        </Col>
        <Col lg="1">
        <EnigmaRole CryptedLetters="HAllo"> </EnigmaRole>
        </Col>
        <Col lg="1">
        <EnigmaRole CryptedLetters="HAllo"> </EnigmaRole>
        </Col>
    </Row>
     </div>

  <Row>
      
        <div className="EnigmaKeyBoard"> XX</div>
    
  </Row>

   </div>


</Container>
  );
}

export default App;
