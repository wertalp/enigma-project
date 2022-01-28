import React, { ChangeEvent, ChangeEventHandler, useEffect ,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col,Container, Badge } from 'react-bootstrap';
import {EnigmaRole} from './components/EnigmaRole' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import { EnigmaRoleSet } from './components/EnigmaRoleSet';
import {AppContext} from './utils/utilities' ;
import {messageService} from "./utils/services" ;

function App() {

    const [value, setValue] = useState<string>("");
    const [crypt, setCrypt] = useState<string>("");
    const [encryptedText, setEncryptedText] = useState<string[]>([]);

    let subscription = messageService.getMessage()
    .subscribe( (message) =>  {  console.log( "We are recaiving this: "+ message) ;  return   (message.length >0) ? setCrypt( crypt => message) : ""});



   useEffect(() => {
   console.log("here we go")  

   },[value])


   const startCrypt = () => {
     let letters = Array.from(value) ;
     letters.map( (letter,index) => setTimeout( () =>  { makeitwork(letter)},1000*index ));
   }

   const makeitwork = (letter: string) =>{
        console.log("Letter: "+letter);
        setValue(value => letter);
        setEncryptedText( (encryptedText => [...encryptedText, crypt]));
   }  

return ( 
 <Container>
   <div className="container-fluid">
     <h2> Enigma 2021</h2>
     <AppContext.Provider value="dark">
     <Row>
       <Col>
       <textarea className="InputBox" name="InputBox" cols={40} rows={2} value={value} onChange={event => setValue(event.target.value)}> Eingbabe Codierter Text</textarea>
       <Button onClick={startCrypt}>CRYPT</Button>
       </Col>
       <Col>
       <textarea className="InputBox" name="OutBox" cols={40} rows={2} value={encryptedText} >        </textarea>
       </Col>

       <Col><h3> <Badge> {crypt}</Badge></h3></Col>
       <Col> { encryptedText.map( item => <> {item} </>) } </Col>
     </Row>

     <div className="EnigmaRoleSet">
        <EnigmaRoleSet name="First RoleSet" anzRoles={3} _paraminput={value} key={value.toString()} ></EnigmaRoleSet>  
     </div>
    <Row>
        <div className="EnigmaKeyBoard"> </div>
    </Row>

     </AppContext.Provider>

   </div>

</Container>
  );
}

export default App;
