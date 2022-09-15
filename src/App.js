import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import {MemeratorProvider} from './context/MemeratorContext'
import NavBar from './components/shared/navBar/NavBar'
import MemeGenerator from './pages/MemeGenerator'


function App() {
  
  return (
    <Router>
    <MemeratorProvider>
      <NavBar/>
    <div className="App">
      
      <Routes>
          {/* <Route path='/*' element={<NotFound/>}/> */}
          <Route path='/' element={<MemeGenerator/>}/>    
      </Routes>
    </div>
    </MemeratorProvider>
    </Router>
  );
}

export default App;
