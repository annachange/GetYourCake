// import logo from './logo.svg';
import NavbarFirstPage from './components/NavbarFirstPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavbarFirstPage/>
        <img src= "/gyk_logo.png" className="App-logo" alt="logo" />
        <p>
          Ordering a cake is a piece of cake
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

    </div>
  );
}

export default App;
