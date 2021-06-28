import logo from '../../logo.svg';
import './App.css';
import { ProduceList } from '../ProduceList/ProduceList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tbody>
            <tr>
        <td><img src={logo} className="App-logo" alt="logo" /></td>
        <td><h1>Produce Checking App</h1></td>
            </tr>
          </tbody>
        </table>
      </header>
    <div>
     { ProduceList()}
      </div>
      </div>
    
  );
}

export default App;
