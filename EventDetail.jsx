import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EventDetail(){
  const {id} = useParams()
  const [event, setEvent] = useState(null)
  useEffect(()=>{
    fetch('http://localhost:8080/api/events/'+id).then(r=>r.json()).then(setEvent)
  },[id])
  if(!event) return <div>Loading...</div>
  return (
    <div className='bg-white p-6 rounded-lg shadow'>
      <h2 className='text-2xl font-bold text-indigo-700'>{event.title}</h2>
      <p className='mt-2 text-gray-600'>{event.description}</p>
      <div className='mt-4 text-sm text-gray-500'>Location: {event.location}</div>
      <div className='mt-2 text-sm text-gray-500'>Participants: {event.participants}</div>
    </div>
  )
}
