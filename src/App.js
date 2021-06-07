import logo from './logo.svg';
import './App.css';
import Button from './component/button/Button'
import Form from './component/form' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Angular
        </a>
        <Button title="simpan"/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
