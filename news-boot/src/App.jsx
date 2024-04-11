import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'

function App() {
  const [category, setCategory] = useState("general")

  return (
    <div className="w-100 d-flex flex-column">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  )
}

export default App
