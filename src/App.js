import React from 'react';
import './App.css';
import User from './components/table';

function App() {

  return (
    <div className="App">
      <div className="head">
        <h1>CRUD-React-SpringBoot</h1>
      </div>
      <div className="center-div">          
          < User />                   
      </div>  
    </div>
  );
  
}

export default App;
