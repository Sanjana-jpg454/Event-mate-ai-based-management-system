import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import CreateEvent from './pages/CreateEvent'
import EventDetail from './pages/EventDetail'

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className='container mx-auto p-6'>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/create' element={<CreateEvent/>} />
          <Route path='/event/:id' element={<EventDetail/>} />
        </Routes>
      </div>
    </Router>
  )
}
