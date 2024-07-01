import React from 'react';
import { FaCartShopping, FaBell, FaBookmark, FaMagnifyingGlass, FaCompass, FaStar } from 'react-icons/fa6';
import hobby_logo from './hobby_logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md text-body shadow">
        <div className="container-fluid d-flex justify-content-around">
          <a class="navbar-brand w-25" href="#">
            <img src={hobby_logo} alt="Logo" className="img-fluid logo-img" />
          </a>

          <form className="d-flex container-fluid">
              <input className="form-control me-2" type="text" placeholder="Search" />
              <button className="btn btn-primary" type="button"><FaMagnifyingGlass /></button>
          </form>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto w-100 d-flex justify-content-between">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="javascript:void(0)" role="button" 
                  data-bs-toggle="dropdown"><FaCompass /> Explore</a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link</a></li>
                  <li><a className="dropdown-item" href="#">Another link</a></li>
                  <li><a className="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="javascript:void(0)" role="button" 
                  data-bs-toggle="dropdown"><FaStar /> Hobbies</a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link</a></li>
                  <li><a className="dropdown-item" href="#">Another link</a></li>
                  <li><a className="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)"><FaBookmark /></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)"><FaBell /></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)"><FaCartShopping /></a>
              </li>

              <li className="nav-item border border-2 border-dark rounded nav-sign">
                <a className="nav-link" href="javascript:void(0)">Sign In</a>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
  )
}
