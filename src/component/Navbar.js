import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <nav className="navbar navbar-light" style={{backgroundColor:'#e3f2fd'}}>
    
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TextUtils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
  </div>

  

</nav>

    </div>
  )
}
