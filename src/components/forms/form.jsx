import React from 'react'
import Form from 'react-bootstrap/Form'
import './forms.css'
const Forms = () => {
  return (
    <div>
      <div className=" group">
        <Form.Label className='ml-3'>Task name</Form.Label>
        <Form.Control className='inp' type="text" placeholder="Enter the name" />
      </div>
      <div className="mb-3 group">
        <Form.Label className='ml-3'>Set time for the task</Form.Label>
        <Form.Control className='inp' type="text" placeholder="Enter the time" />
      </div>
    </div>
  )
}

export default Forms
