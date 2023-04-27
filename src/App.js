import React from 'react'
import Navbar from './component/Navbar'
import Form from './component/Form'
import Alert from './component/Alert'
import Contact from './component/Contact'
import About from './component/About'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>

      <Routes>
        <Route exact path='/' element={<Navbar/>} />
        
        <Route exact path ='/about' element={<About/>}/>
        <Route  exact path='/contact' element={<Contact/>}/> 
      </Routes>
      <Form/>
      <Alert/>
    </div>
  )
}

export default App;