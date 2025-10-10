import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AuthRouter from './routes/AuthRouter'
import Dashboard from './pages/Dashboard'


export default function App(){
return (
<div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
<Routes>
<Route path="/auth/*" element={<AuthRouter/>} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/" element={<Home />} />
</Routes>
</div>
)
}


function Home(){
return (
<div className="flex items-center justify-center min-h-screen">
<div className="w-full max-w-4xl p-8">
<div className="flex items-center justify-between mb-6">
<div className="text-3xl font-bold">Mini Screen</div>
<div className="flex gap-3">
<Link to="/auth/login" className="px-4 py-2 rounded-lg bg-indigo-600 hover:opacity-95">Login</Link>
<Link to="/auth/signup" className="px-4 py-2 rounded-lg border border-gray-700">Signup</Link>
</div>
</div>
<div className="card-glass rounded-2xl p-8">
<h2 className="text-xl font-semibold">AI Resume Screener</h2>
<p className="text-gray-400 mt-2">Upload resumes, score candidates, and shortlist using AI-driven heuristics. This is the frontend scaffold (no backend).</p>
</div>
</div>
</div>
)
}