import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


export default function AuthRouter(){
return (
<Routes>
<Route path="login" element={<Login/>} />
<Route path="signup" element={<Signup/>} />
</Routes>
)
}