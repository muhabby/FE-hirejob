import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Route placement */}
        <Route path='/' exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App