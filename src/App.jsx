import { useState } from 'react'
import { Button } from 'antd'
import Ping from './components/atoms/Ping/Ping.jsx';
import './App.css'

function App() {

  const [isVisible, setIsVisible ]= useState(false);

  return (
    <>
      <Button type="primary" ghost onClick={()=> setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Component':'Show Component'}
      </Button>
      { isVisible && <Ping/> }
    </>
  )
}

export default App
