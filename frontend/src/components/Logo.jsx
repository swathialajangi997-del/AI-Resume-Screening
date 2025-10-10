import React from 'react'


export default function Logo(){
return (
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-md">
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
<div>
<div className="text-lg font-semibold">Mini Screen</div>
<div className="text-xs text-gray-400">AI Resume Screener</div>
</div>
</div>
)
}