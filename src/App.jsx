import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import './index.css'
import HomeMen from './component/menLatest/HomeMen'

function App() {
  return (
      <BrowserRouter
          future={{
            v7_startTransition: true, // Opt into startTransition behavior
            v7_relativeSplatPath: true, // Adjust relative splat route handling
          }}
      >
          <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/mens' element={<HomeMen />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
