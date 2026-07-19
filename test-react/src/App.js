import logo from './logo.svg';
import './App.css';

const myname = "Ashish Sharma";
function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    <div className="App">
      <h1>My name is {myname}</h1>
    </div>
    </>
  );
}

export default App;
