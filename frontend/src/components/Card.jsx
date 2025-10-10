import React from 'react'


export default function Card({ children }){
return (
<div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 drop-shadow">{children}</div>
)
}