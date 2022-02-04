import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {MainPage} from './pages/MainPage'
import {DetailPage} from './pages/DetailPage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/detail" element={<DetailPage/>}/>
        </Routes>
    )
}