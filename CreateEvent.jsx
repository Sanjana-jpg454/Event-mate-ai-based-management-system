import React, { useState } from 'react'
import EventForm from '../components/EventForm'
import { useNavigate } from 'react-router-dom'

export default function CreateEvent(){
  const nav = useNavigate()
  const handleSubmit = (data)=>{
    fetch('http://localhost:8080/api/events/create',{
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data)
    }).then(r=>r.json()).then(()=>{ alert('Created!'); nav('/') })
  }
  return <EventForm onSubmit={handleSubmit} />
}
