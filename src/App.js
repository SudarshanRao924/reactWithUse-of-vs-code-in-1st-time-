import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello world

        </p>
        <ul>
          <li>steps to install react using vs-code</li>
          <li>use this commond in your cmd terminal in your pc</li>
          <li>open your cmd and type a commond.node --version</li>
          <li>if sucess it shows a latest version of node js</li>
          <li>After that type a commond npm install create-react-app</li>
          <li> After that type npx create-react-app sample</li>
          <li> After that open (code sample) file</li>
          <li>after that (code .) its open your vs-code </li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
