import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom navbar-light bg-light">
        <div className="container ">
        <h2 class=""><span class="text-info">Incaendo</span> <span class="text-danger  ">Technologies</span></h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="a">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="a">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="a">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="a" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="a">company Details</a></li>
                  <li><a className="dropdown-item" href="a">Over view</a></li>
                  <li><a className="dropdown-item" href="a">Address</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar