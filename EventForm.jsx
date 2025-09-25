import React, { useState } from 'react'

export default function EventForm({onSubmit}){
  const [form, setForm] = useState({
    title:'', description:'', startTime:'', endTime:'', location:'', participants:''
  })
  const change = e=> setForm({...form, [e.target.name]: e.target.value})

  return (
    <form onSubmit={e=>{ e.preventDefault(); const payload = {...form}; if(payload.startTime) payload.startTime = new Date(payload.startTime).toISOString(); if(payload.endTime) payload.endTime = new Date(payload.endTime).toISOString(); onSubmit(payload) }} className='max-w-2xl mx-auto bg-white p-6 rounded-lg shadow'>
      <h3 className='text-xl font-semibold text-indigo-700 mb-4'>Create a new event</h3>
      <div className='grid grid-cols-1 gap-3'>
        <input name='title' value={form.title} onChange={change} placeholder='Title' className='p-3 border rounded' required />
        <textarea name='description' value={form.description} onChange={change} placeholder='Short description' className='p-3 border rounded' rows={3} />
        <div className='grid grid-cols-2 gap-3'>
          <input type='datetime-local' name='startTime' value={form.startTime} onChange={change} className='p-3 border rounded' />
          <input type='datetime-local' name='endTime' value={form.endTime} onChange={change} className='p-3 border rounded' />
        </div>
        <input name='location' value={form.location} onChange={change} placeholder='Location' className='p-3 border rounded' />
        <input name='participants' value={form.participants} onChange={change} placeholder='Comma separated participants emails' className='p-3 border rounded' />
        <div className='flex gap-3 justify-end'>
          <button type='submit' className='bg-indigo-600 text-white px-4 py-2 rounded'>Save</button>
        </div>
      </div>
    </form>
  )
}
