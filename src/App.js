import logo from './logo.svg';
import './App.css';
import Movie from './components/movie/Movie';
import Comedia from './components/comedy/Comedia';

function App() {
  return (
    <div className="App">
      <Movie/>
      <Comedia/>
    </div>
  );
}

export default App;
