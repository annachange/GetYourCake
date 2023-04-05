// import logo from './logo.svg';
import MultipleSelectChip from './components/MultipleSelectChip';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MultipleSelectChip/>
          <ResponsiveAppBar/>
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
