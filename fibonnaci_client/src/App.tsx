import { useState } from 'react'
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Wrapper } from './components/Wrapper/Wrapper';
import "./App.css";

function App() {
  return (
    <Wrapper>
      <h1>Calcualte Fibonacci!</h1>
      <div>
        <Input />
        <Button>Calculate</Button>
      </div>
      
      <p>Fibonacci Result: <span>8</span></p>
    </Wrapper>
  )
}

export default App
