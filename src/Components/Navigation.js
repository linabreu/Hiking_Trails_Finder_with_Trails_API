import React from 'react';
import logo from '../Images/mtn-logo.svg'

export default function Navigation() {
return (
<div>
    <nav className="flex items-center justify-between flex-wrap p-6 dk-green">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className = "mr-1" src = {logo}/>
        <span className="font-semibold text-xl tracking-tight signature text-outline">Hikeaways</span>
    </div>

    </nav>
</div>
  )
}
