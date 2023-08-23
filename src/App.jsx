
import './App.css'
import { Teams, Contact, Home, Methodology, About } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/methodology' element={<Methodology/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
