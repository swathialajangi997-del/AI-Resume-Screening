import React from 'react'


export default function Input({ label, type='text', value, onChange, placeholder='' }){
return (
<label className="block">
<div className="text-sm text-gray-300 mb-1">{label}</div>
<input
className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
type={type}
value={value}
onChange={onChange}
placeholder={placeholder}
/>
</label>
)
}