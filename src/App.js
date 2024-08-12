import logo from './logo.svg';
import './App.css';
import { Diagram } from './components/Diagram.js';
import { Panel } from './components/Panel.js';
import { createContext, useContext, useState, useLayoutEffect } from 'react';

function App() {
  return (
    <div className="app">
        <Diagram/>
        <Panel/>  
    </div>
  );
}

export default App;
