import React from 'react'
import './_Navbar.scss'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <div className="navs_container">
                <div className="top_nav">
                    <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">

                        <div className="contactData d-flex align-items-center gap-3 small">

                            <div className="d-flex align-items-center gap-2">
                                <HiOutlineMail />
                                <span className='dir_ltr fw-500'>info@example.com</span>
                            </div>

                            <span className="mx-3 border th-20 border-wh-2"></span>

                            <div className="d-flex align-items-center gap-2">
                                <FiPhone />
                                <span className='dir_ltr fw-500'>+20 10 6685 759</span>
                            </div>

                        </div>

                        <div className="socialLinks d-flex gap-2">
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
                <nav className="navbar navbar-expand-lg py-3">
                    <div className="container d-flex align-items-center justify-content-between">

                        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                            <img src={logo} alt="logo" className='logo'/>
                        </a>

                        {/* Toggler (for mobile) */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mainNavbar"
                            >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
                            <ul className="navbar-nav gap-4 text-center">

                                <li className="nav-item">
                                    <a className="nav-link active fw-bold position-relative" href="#">
                                        الرئيسية
                                        <span className="active-line"></span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">من نحن</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">الخدمات</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">أعمالنا</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">اتصل بنا</a>
                                </li>

                            </ul>
                        </div>

                        <div className="d-none d-lg-block">
                            <button className="butn primary_butn fw-bold px-4">
                                اطلب عرض سعر
                            </button>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
