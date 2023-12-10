import { useState } from 'react'
import './App.css'
import Workout from './pages/Workout'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <h1>Workout Tracker</h1>
    <Workout />
   </div>
  );
}

export default App
