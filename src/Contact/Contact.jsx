import React from 'react'
import './Contact_style.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AfterFooter from '../AfterFooter/AfterFooter';

export default function Contact() {
    return (
        <>

            {/* <Navbar></Navbar> */}
            <div className="contact ">
                <div className="container d-flex justify-content-center align-items-center  flex-column">
                    <h1>CONATCT SECTION</h1>
                    <div className='iconic'>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <div className="form w-50 p-3  mt-5  ">
                        <input _ngcontent-apt-c16="" id="userName" type="text" placeholder="userName" name="userName" class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
                        <input _ngcontent-apt-c16="" id="userName" type="text" placeholder="userAge" name="userAge" class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
                        <input _ngcontent-apt-c16="" id="userName" type="text" placeholder="userEmail" name="userEmail" class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
                        <input _ngcontent-apt-c16="" id="userName" type="email" placeholder="userPassword" name="userPassword" class="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
                        <button _ngcontent-apt-c16="" class="btn mt-4 text-white btn-dark" > send Message </button>
                    </div>
                </div>
            </div>

        </>
    )
}
