import './App.css';
import Home from './components/home/Home';
import Counter from './components/home/Counter';
import { Route, Routes } from 'react-router-dom';
import Error from './components/home/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/todo' element={<Home/>}  />
        <Route path='/counter' element={<Counter/>}  />
        <Route path='*' element={<Error/>}  />
      </Routes>
    </div>
  );
}

export default App;
