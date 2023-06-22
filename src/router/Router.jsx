import React from 'react'
import { Routes, Route } from "react-router-dom";
import { CaloriesPage, HomePage, UserPage } from '../pages';


export const Router = () => {
  return (
    <Routes>
        <Route path="/*" element={<HomePage/>} />

        <Route path="/home" element={<HomePage/>} />
        <Route path="/calories" element={<CaloriesPage/>} />
        <Route path="/user" element={<UserPage/>} />
    </Routes>
  )
}
