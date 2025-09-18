import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="check1"/>
        <input class="form-check-input" type="checkbox" id="check2"/>
        <input class="form-check-input" type="checkbox" id="check3"/>
      </div>
    </>
  )
}

export default App
