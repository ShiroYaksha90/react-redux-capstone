import { Route, Routes } from 'react-router';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path="/:code" element={<CountryInfo />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
