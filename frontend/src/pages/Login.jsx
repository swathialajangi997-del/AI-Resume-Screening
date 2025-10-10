import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Card from '../components/Card'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { fakeAuth } from '../utils/auth'


export default function Login(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [err, setErr] = useState('')
const navigate = useNavigate()


async function onSubmit(e){
e.preventDefault()
const ok = await fakeAuth.login({ email, password })
if(ok) navigate('/dashboard')
else setErr('Invalid credentials (demo)')
}


return (
<div className="min-h-screen flex items-center justify-center">
<div className="w-full max-w-2xl p-6">
<Card>
<div className="flex items-center justify-between mb-6">
<Logo />
<div className="text-sm text-gray-400">Secure Login</div>
</div>
<form onSubmit={onSubmit} className="space-y-4">
<Input label="Email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" />
<Input label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••" />
{err && <div className="text-red-400 text-sm">{err}</div>}
<div className="flex items-center justify-between mt-4">
<button className="px-4 py-2 rounded-lg bg-indigo-600">Sign in</button>
<Link to="/auth/signup" className="text-sm text-gray-400">Create account</Link>
</div>
</form>
</Card>
</div>
</div>
)
}