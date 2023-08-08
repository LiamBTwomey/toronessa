import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/nav/Header';
import Title from './components/nav/Title';
import Home from './components/body/Home';
import About from './components/body/About';
import Test from './components/body/Test';
import Torunessa from './components/body/Torunessa';
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
  <Route path="About" element={<About />}/>
  <Route path="1" element={<Test />}/>
  <Route path="2" element={<Torunessa />}/>

</Routes>
</div>
  )
}

export default App