import './App.css';
import MyGraph from './components/myGraph';
import Switch from './components/switch';

function App() {
  return (
    <div className="App">
      <Switch />
      <div className="graph-box">
        <MyGraph />
      </div>
    </div>
  );
}

export default App;
