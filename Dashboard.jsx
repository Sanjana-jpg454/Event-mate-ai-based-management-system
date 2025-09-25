import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import dayjs from 'dayjs'

export default function Dashboard(){
  const [events, setEvents] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8080/api/events/list')
      .then(r=>r.json()).then(setEvents).catch(()=>setEvents([]))
  },[])

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
      {events.length===0 && <div className='col-span-full text-center text-gray-500'>No events yet — create one!</div>}
      {events.map(e=> <EventCard key={e.id} event={e} />)}
    </div>
  )
}
