import React from 'react'
import './_Footer.scss'
import logo from '../../assets/logo.png'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <>  
            <footer className="footer section pb-0">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3">
                            <div className="content">
                                <img src={logo} alt="logo" className='logo'/>
                                <div className="p mt-4 fsz-17 text-white-50 ">
                                    أعمال دبش وتجليد وخرسانة مطبوعة ومساحات خارجية بمعايير احترافية في مصر.
                                </div>
                                <div className="socialLinks d-flex gap-2 mt-4 ">
                                    <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                                        <FaInstagram />
                                    </a>
                                    <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                                        <FaFacebookF />
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="content">
                                <h5 className='tetx-white fw-bold color_primary border-bottom w-fit border_primary pb-2 mb-4'>
                                    خدماتنا 
                                </h5>
                                <div className="links">
                                    <a href='#'> جميع الخدمات </a>
                                    <a href='#'> دبش وتجليد </a>
                                    <a href='#'> خرسانة مطبوعة </a>
                                    <a href='#'> هليكوبتر خرسانة </a>
                                    <a href='#'> إنترلوك وبندورة </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="content">
                                <h5 className='tetx-white fw-bold color_primary border-bottom w-fit border_primary pb-2 mb-4'>
                                    روابط 
                                </h5>
                                <div className="links">
                                    <a href='#'> من نحن   </a>
                                    <a href='#'> اتصل بنا   </a>
                                    <a href='#'> الخدمات   </a>
                                    <a href='#'> أعمالنا   </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="content">
                                <h5 className='tetx-white fw-bold color_primary border-bottom w-fit border_primary pb-2 mb-4'>
                                    اطلب عرض سعر 
                                </h5>
                                <div className="p mt-4 fsz-17 text-white-50 ">
                                    صف نوع المشروع والمساحة التقريبية وسنعاودك بخطوات واضحة ومناسبة لميزانيتك.
                                </div>
                                <a href='#' className='butn primary_border_butn mt-4 py-2 fsz-15'>
                                    نموذج التواصل
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot py-4 mt-5 bg-black text-center text-white-50">
                    © 2026 شركة الهواري — Al-Hawari ، جميع الحقوق محفوظة.
                </div>
            </footer>
        </>
    )
}

export default Footer
