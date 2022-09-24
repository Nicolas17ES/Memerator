import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import {MemeratorProvider} from './context/MemeratorContext'
import NavBar from './components/shared/navBar/NavBar'
import NotFound from './components/error/NotFound'

import MemeGenerator from './pages/MemeGenerator'


function App() {
  
  return (
    <Router>
    <MemeratorProvider>
      <NavBar/>
    <div className="App">
      
      <Routes>
          <Route path='/' element={<MemeGenerator/>}/>    
          <Route path='/*' element={<NotFound/>}/>    
      </Routes>
    </div>
    </MemeratorProvider>
    </Router>
  );
}

export default App;
