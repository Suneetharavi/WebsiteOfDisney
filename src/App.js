import './App.css';
import './style.css';
import DisneyPlus from './components/DisneyPlus';
import NewOnDisney from './components/NewOnDisney';
import { Route , Routes } from 'react-router-dom';
import Trending from './components/Trending';
import ComingSoon from './components/ComingSoon';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
<switch>
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/DisneyPlus' element={<DisneyPlus/>}/> 
    <Route path='/DisneyPlus/NewOnDisney' element={<NewOnDisney/>}/>
    <Route path='/Trending' element={<Trending/>}/>
    <Route path='/ComingSoon' element={<ComingSoon/>}/>
    </Routes>
   
    </switch>
    </div>
  );
}

export default App;
