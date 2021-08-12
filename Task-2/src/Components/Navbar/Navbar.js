import React from 'react'
import '../Navbar/Navbar.css'

function Navbar({fetchUsers}) {
    
    return (
        <header>
            <span className="logo"><i className="fas fa-users"></i> Accounty</span>
            <button onClick={fetchUsers}>Get Users</button>
        </header>
    )
}

export default Navbar

