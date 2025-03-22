
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

function App() {

  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
