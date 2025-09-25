import React from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

export default function EventCard({event}){
  const nav = useNavigate()
  return (
    <div className='bg-white rounded-xl p-5 shadow hover:shadow-lg transition cursor-pointer' onClick={()=>nav('/event/'+event.id)}>
      <div className='flex justify-between items-start'>
        <h3 className='text-lg font-semibold text-indigo-700'>{event.title}</h3>
        <div className='text-sm text-gray-400'>{event.location}</div>
      </div>
      <p className='text-sm text-gray-600 mt-2'>{event.description}</p>
      <div className='mt-4 text-sm text-gray-500'>
        {event.startTime ? `${dayjs(event.startTime).format('MMM D, YYYY h:mm A')} - ${dayjs(event.endTime).format('h:mm A')}` : 'Time: TBD'}
      </div>
      <div className='mt-3 text-xs text-gray-400'>Participants: {event.participants || '—'}</div>
    </div>
  )
}
