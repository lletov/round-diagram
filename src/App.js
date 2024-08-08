import logo from './logo.svg';
import './App.css';
import { Diagram } from './components/Diagram.js';
import { Panel } from './components/Panel.js';
import { createContext, useContext, useState } from 'react';
import { DiagramContext } from './components/Context.js';

function App() {

  return (
    <div className="app">
      <DiagramContext.Provider value="test">
        <Diagram/>
        <Panel/>
      </DiagramContext.Provider>
      
    </div>
  );
}

export default App;
