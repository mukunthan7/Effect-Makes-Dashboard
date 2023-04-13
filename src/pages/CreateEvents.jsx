import React, { useState } from 'react'



const initialState = {
  eventname: '',
  department: ''
}

const CreateEvents = () => {
  const [event, setEvent] = useState(initialState)
  const [hidden, setHidden] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent({ ...event, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(event)
  }

  const handleRadio = (e) => {
    const { name, value } = e.target
    setEvent({ ...event, [name]: value })
    if (value === 'all') {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }
 
  const Department = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Finance' },
    { id: 4, name: 'Marketing' },
    { id: 5, name: 'Sales' },
    { id: 6, name: 'Admin' },
    { id: 7, name: 'All' }
  ]

  return (
    <div>
      Create Events
    </div>
  )
}

export default CreateEvents