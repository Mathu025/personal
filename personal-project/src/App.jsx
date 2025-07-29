import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import ComingSoon from './ComingSoon'

const App = () => {
    return (
        <>
        <NavBar />
            <Routes>
                <Route path="/coming" element={<ComingSoon />}/>
                 <Route />
                  <Route />
            </Routes>
            </>
    )
}

export default App