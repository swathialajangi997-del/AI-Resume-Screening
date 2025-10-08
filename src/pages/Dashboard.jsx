import React from 'react'
import Navbar from '../components/Navbar'


export default function Dashboard(){
return (
<div className="min-h-screen p-8">
<Navbar />
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="card-glass rounded-xl p-6">Put upload & filters here</div>
<div className="card-glass rounded-xl p-6 lg:col-span-2">Candidate list / detail</div>
</div>
</div>
)
}