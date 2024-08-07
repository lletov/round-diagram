import logo from './logo.svg';
import './App.css';
import { Diagram } from './components/Diagram.js';
import { Panel } from './components/Panel.js';

function App() {
  return (
    <div className="app">
      <Diagram/>
      <Panel/>
    </div>
  );
}

export default App;
