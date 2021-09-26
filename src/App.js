import './App.css';
import Destinations from './components/Destinations/Destinations';
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header></Header>
      <h1 className="top-heading">Availabe Place</h1>
      <Destinations></Destinations>
    </div>
  );
}

export default App;
