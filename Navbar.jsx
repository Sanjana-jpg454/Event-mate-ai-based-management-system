import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className='bg-white/60 backdrop-blur-md shadow rounded-lg p-4 mb-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold'>EM</div>
          <h1 className='text-xl font-semibold text-indigo-700'>Event Mate</h1>
        </div>
        <div className='flex gap-4'>
          <Link to='/' className='text-indigo-600 hover:underline'>Dashboard</Link>
          <Link to='/create' className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700'>Create Event</Link>
        </div>
      </div>
    </nav>
  )
}
