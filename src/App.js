import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          Miika Kauppinen
        </h1>
      </header>
      {/*todo: make boxes for different pages*/}
      <div
      className='App-sidebar'
      >
      <a>About me</a>
      <a>Games?</a>
      <a>Something</a>
      </div>
 
 
 
 
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
