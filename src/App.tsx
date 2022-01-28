import React, { ChangeEvent, ChangeEventHandler, useEffect ,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col,Container, Badge } from 'react-bootstrap';
import {EnigmaRole} from './components/EnigmaRole' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import { EnigmaRoleSet } from './components/EnigmaRoleSet';
import {AppContext} from './utils/utilities' ;
import {messageService} from "./utils/services" ;
import { Observable } from 'rxjs';

function App() {

    const [value, setValue] = useState<string>("");
    const [txtvalue, settxtValue] = useState<string>("");
    const [crypt, setCrypt] = useState<string>("");
    const [encryptedText, setEncryptedText] = useState<string[]>([]);

  
   useEffect(() => {
      console.log("here we go")  
      setEncryptedText( (encryptedText => [...encryptedText, crypt]));

   },[crypt]) ;



   const startCrypt = () => {
      setEncryptedText(encryptedText => []);
   let   letters = Array.from(txtvalue) ;
         letters.map( (letter,index) => setTimeout( () =>  { makeitwork(letter)},100* index ));
   }

   const makeitwork = (letter: string) =>{
        console.log("Letter: "+letter);
        setValue(value => letter ) ;
   }  

   const subscribeMessage = () : void => {
        messageService.getMessage()
                     .subscribe( (message) =>  
                     {console.log( "We are recaiving this: "+ message) ; 
       return (message.length >0) ? setCrypt( crypt => message) : ""});
   }
   subscribeMessage() ;

return ( 
 <Container>
   <div className="container-fluid">
     <h2> Enigma 2021</h2>
     <AppContext.Provider value="dark">
     <Row>
       <Col>
       <textarea className="InputBox" name="InputBox" cols={40} rows={2} value={txtvalue} onChange={event => settxtValue(event.target.value)}> Eingbabe Codierter Text</textarea>
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
