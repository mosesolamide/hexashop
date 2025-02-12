import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './component/Layout'
import './index.css'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>

              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
