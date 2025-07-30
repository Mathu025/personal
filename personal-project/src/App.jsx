import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import ComingSoon from './ComingSoon'
import Select from './Select'
import Home from './Home'

const App = () => {
    return (
        <>
        <NavBar />
        <Select />
            <Routes>
                <Route path="/coming" element={<ComingSoon />}/>
                 <Route path="/" element={<Home />}/>
                  <Route />
            </Routes>
            </>
    )
}

export default App