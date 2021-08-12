import React from 'react'
import '../Navbar/Navbar.css'

function Navbar({handleClick}) {
    
    return (
        <header>
            <span className="logo"><i className="fas fa-users"></i> Accounty</span>
            <button onClick={handleClick}>Get Users</button>
        </header>
    )
}

export default Navbar

