import React from 'react'
import './Main_style.css';
import main_img from '../assets/images/avataaars.svg';
import Footer from '../Footer/Footer';
import AfterFooter from '../AfterFooter/AfterFooter';
import Navbar from '../Navbar/Navbar';


export default function Main_page() {
    return (
        <>
        {/* <Navbar></Navbar> */}
            <div>
                <div className="main ">
                    <div className="container d-flex justify-content-center align-items-center flex-column ">
                        <img src={main_img} alt="avatar" />
                        <h2 className='p-1'>START FRAMEWORK</h2>
                        <div className='iconic'>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h4>Graphic Artist - Web Designer - Illustrator</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
