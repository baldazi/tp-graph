import './App.css';
import MyGraph from './components/myGraph';
import Switch from './components/switch';

function App() {
  return (
    <div className="App">
      <div className="graph-box">
        <MyGraph />
      </div>
      <Switch />
    </div>
  );
}

export default App;
