import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import './index.css'
import HomeMen from './component/menLatest/HomeMen'
import HomeWomen from './component/womenLatest/HomeWomen'
import HomeKids from './component/kidLatest/HomeKids'
import AboutUs from './AboutUs'

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
                <Route path='/womens' element={<HomeWomen />} />
                <Route path='/kids' element={<HomeKids />} />
                <Route path='/aboutus' element={<AboutUs />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
