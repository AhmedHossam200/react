import React from 'react'
import './Portfolio_style.css'
import img_one from '../assets/images/poert1.png';
import img_two from '../assets/images/port2.png';
import img_three from '../assets/images/port3.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AfterFooter from '../AfterFooter/AfterFooter';

export default function Portfolio() {
    return (
        <>

        {/* <Navbar></Navbar> */}
            <div className="portfolio py-3">
                <div className="container d-flex justify-content-center align-items-center  flex-column">
                    <h1>PORTFOLIO COMPONENT</h1>
                    <div className='iconic'>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="gallary container ">

                        <div className="row pt-3">
                            <div className=" col-lg-4 ">
                                <div className="inner ">
                                    <img className='border rounded-3' src={img_one} alt="" />
                                    <div className="border rounded-3 layer d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-plus "></i>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 ">
                                <div className="inner">
                                    <img className='border rounded-3' src={img_two} alt="" />
                                    <div className="border rounded-3 layer d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-plus "></i>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 ">
                                <div className="inner">
                                    <img className='border rounded-3' src={img_three} alt="" />
                                    <div className="border rounded-3 layer d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-plus "></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-3">
                            <div className=" col-lg-4 ">
                                <div className="inner">
                                    <img className='border rounded-3' src={img_one} alt="" />
                                    <div className="border rounded-3 layer d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-plus "></i>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 ">
                                <div className="inner">
                                    <img className='border rounded-3' src={img_two} alt="" />
                                    <div className="border rounded-3 layer d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-plus "></i>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 ">
                                <div className="inner">
                                    <img className='border rounded-3' src={img_three} alt="" />
                                    <div className="border rounded-3 layer d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-plus "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                </div>
            </div>
        </>
    )
}
