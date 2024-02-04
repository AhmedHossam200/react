import React from 'react'
import './About_style.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import AfterFooter from '../AfterFooter/AfterFooter'

export default function About() {
    return (
        <>
        {/* <Navbar></Navbar> */}
            <div className='about d-flex justify-content-center align-items-center flex-column'>
                <div className="innerAbout d-flex justify-content-center align-items-center flex-column">
                    <h1>ABOUT COMPONENT</h1>
                    <div className='iconic'>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="row container">
                        <div className="col-lg-6">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes
                                 the complete source files including HTML, CSS,
                                 and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-lg-6">
                            <p>Freelancer is a free bootstrap theme created by Route. 
                                The download includes the complete source files including HTML, CSS, and JavaScript 
                                as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
