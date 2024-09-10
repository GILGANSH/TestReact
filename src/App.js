import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/StartComponent/Index.jsx';
import FirstPage from './components/FirstPage/FirstPage.jsx';
import TwoPage from './components/TwoPage/TwoPage.jsx'
import ThreePage from './components/ThreePage/ThreePage.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}>
            <Route index element={< FirstPage/>}/>
            <Route path='/element2' element={ <TwoPage/> }/>
            <Route path='/element3' element={ <ThreePage/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
