import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Input from '../components/Input'
import Logo from '../components/Logo'
import { fakeAuth } from '../utils/auth'


export default function Signup(){
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


async function onSubmit(e){
e.preventDefault()
await fakeAuth.signup({ name, email, password })
navigate('/auth/login')
}


return (
<div className="min-h-screen flex items-center justify-center">
<div className="w-full max-w-2xl p-6">
<Card>
<div className="flex items-center justify-between mb-6">
<Logo />
<div className="text-sm text-gray-400">Create account</div>
</div>
<form onSubmit={onSubmit} className="space-y-4">
<Input label="Full name" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
<Input label="Email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" />
<Input label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Choose a password" />
<div className="flex justify-end mt-4">
<button className="px-4 py-2 rounded-lg bg-indigo-600">Create</button>
</div>
</form>
</Card>
</div>
</div>
)
}