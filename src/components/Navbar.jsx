import React from 'react'
import Logo from './Logo'


export default function Navbar(){
return (
<div className="flex items-center justify-between">
<Logo />
<div className="flex gap-3 items-center">
<button className="px-3 py-2 rounded-lg border border-gray-700">Upload</button>
<button className="px-3 py-2 rounded-lg bg-red-600">Logout</button>
</div>
</div>
)
}