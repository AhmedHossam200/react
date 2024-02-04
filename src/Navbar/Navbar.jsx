import React from 'react'
import './Nav_style.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav class="navbar m-0 navbar-expand-lg bg-body-tertiary">
                <div class="all container-fluid p-0">
                    <Link class="navbar-brand ps-5 py-2 fs-2 text-white" to="/">Start Framework</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="inner collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="list navbar-nav pe-5 ms-auto fs-4 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/about">ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/portfolio">PORTFOLIO</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
