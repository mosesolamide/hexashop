import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './component/Layout'
import './index.css'

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

              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
