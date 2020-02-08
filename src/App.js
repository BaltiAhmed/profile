import React from 'react';
import Button from './Button';
import Title from './Title';
import Photo from './Photo';
import photo from './photo1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Photo src={photo}/>
      <Title> Ahmed</Title><Title> Balti</Title>
      <Button onSimpleClick={()=>{window.location="https://www.linkedin.com/in/ahmed-balti-810015179/"}}>My Linkedin</Button>
      
    </div>
  );
}

export default App;
