import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
import Courses from './Courses'


function App() {


  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      </div>
    </>
  )
}

export default App
