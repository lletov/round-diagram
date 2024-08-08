import logo from './logo.svg';
import './App.css';
import { Diagram } from './components/Diagram.js';
import { Panel } from './components/Panel.js';
import { createContext, useContext, useState } from 'react';
import { DiagramContext } from './components/Context.js';

function App() {
  const [diagramParams, setDiagramParams] = useState({
    diagramRadius: 60,
    groupRadius: 30,
    pointRadius: 16
  })

  return (
    <div className="app">
      <DiagramContext.Provider value={diagramParams}>
        <Diagram/>
        <Panel/>
      </DiagramContext.Provider>
      
    </div>
  );
}

export default App;
