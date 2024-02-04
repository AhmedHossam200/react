import React from 'react'
import './Footer_style.css';

export default function Footer() {
    return (
        <div className='footermain'>
            <div className="container">
                <div className="row text-white py-5">
                    <div className='btn col-lg-4 text-white'>
                        <h2>Location</h2>
                        <h4>2215 John Daniel Drive</h4>
                        <h6>Clark, MO 65243</h6>
                    </div>
                    <div className='btn col-lg-4 text-white d-flex flex-column align-items-center'>
                        <h2>AROUND THE WEB</h2>
                        <div className='icons d-flex justify-content-evenly py-2 w-50'>
                            <i class="fs-5 fa-brands fa-facebook"></i>
                            <i class="fs-5 fa-brands fa-twitter"></i>
                            <i class="fs-5 fa-brands fa-linkedin-in"></i>
                            <i class="fs-5 fa-solid fa-globe"></i>
                        </div>
                    </div>
                    <div className='btn col-lg-4 text-white'>
                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by ENG/ AHMED HOSSAM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
