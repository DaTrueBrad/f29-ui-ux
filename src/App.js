import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import CssScreen from './screens/CssScreen';
import TeamScreen from './screens/TeamScreen';
import DetailScreen from './screens/DetailScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/css" element={<CssScreen />} />
        <Route path="/team" element={<TeamScreen />} />
        <Route path="/detail/:id" element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
