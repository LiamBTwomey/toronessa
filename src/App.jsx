import { useState } from 'react'
import './App.css'
import Header from './components/nav/Header'
import Home from './components/body/Home';
import About from './components/body/About';
import Torunessa from './components/body/Torunessa';
import Clip from './components/body/Clip';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<Header />
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="1" element={<About />}/>
  <Route path="2" element={<Torunessa />}/>
  <Route path="3" element={<Clip />}/>

</Routes>
</div>
  )
}

export default App