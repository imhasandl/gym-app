import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Footer, Home, ExerciseDetail } from './components/indexComponents'

const App = () => {
  return (  
    <Box width="400px" sx={{ width: { xl: "14" } }}>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>

      <Footer />
    </Box>
  )
}

export default App