import { useState, ChangeEvent } from 'react'
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Wrapper } from './components/Wrapper/Wrapper';
import { FormInput, ApiResponse } from './types';
import "./App.css";

const URL = 'http://localhost:3000/api/fibonacci';

function App() {
  const [formState, setFormState] = useState<FormInput>({
    fiboInput: 0
  });

  const [ fibonacciNumberState, setFibonacciNumberState ] = useState(0);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { fiboInput } = formState;
    const response = await fetch(`${URL}/${fiboInput}`);

    const result = await response.json() as ApiResponse;

    setFibonacciNumberState(result.fibonnaciNumber);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    const parsedNumber = parseInt(value) || 0;
    if (isNaN(parsedNumber)) {
      return;
    }
    setFormState({
      ...formState,
      fiboInput: parsedNumber
    });
  }

  return (
    <Wrapper>
      <h1>Calcualte Fibonacci!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <Input name="fiboInput" onChange={handleChange} value={formState.fiboInput} />
          <Button type="submit">Calculate</Button>
        </form>
      </div>
      
      <p>Fibonacci Result: <span>{fibonacciNumberState}</span></p>
    </Wrapper>
  )
}

export default App
