import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import ComingSoon from './ComingSoon'
import Select from './Select'

const App = () => {
    return (
        <>
        <NavBar />
        <Select />
            <Routes>
                <Route path="/coming" element={<ComingSoon />}/>
                 <Route />
                  <Route />
            </Routes>
            </>
    )
}

export default App