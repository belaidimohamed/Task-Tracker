import React from 'react';
import './header.css';
import Button from 'react-bootstrap/Button';


const Header = () => {
  return (
    <div>
      <div className="header"> 
        <h1 className='title'>Task tracker</h1>
        <Button className='addButton' variant="success">Add</Button>
      </div> 
    </div>
  )
}

export default Header
