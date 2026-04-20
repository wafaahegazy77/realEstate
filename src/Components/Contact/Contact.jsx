import React from 'react'
import './_Contact.scss'
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    return (
        <>
            <section className="contact_sec section ">
                <div className="container">
                     <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="txt_box">
                                <div class="sec_head  mb-5 " >
                                    <h4 class="section-title color_primary fw-bold fsz-18"> تواصل معنا </h4>
                                    <h1 class="fw-700 fsz-55 mb-4 mt-2 "> اطلب استشارة أو عرض سعر لمشروعك </h1>
                                    <div className="p mt-3 fsz-19">
                                        صف لنا نوع العمل (دبش، تجليد، خرسانة مطبوعة، هليكوبتر، إنترلوك…) والمساحة التقريبية، وسنعاودك بخطوات واضحة ومناسبة لميزانيتك.
                                    </div>
                                </div>
                                <div className="contact_items mt-5">
                                    {/* Phone */}
                                    <div className="contact-item d-flex align-items-center gap-3">
                                        <div className="icon-box">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className="contact-info">
                                            <p className="label mb-2 fw-bold ">اتصل بنا</p>
                                            <h5 className="mb-0 dir_ltr">+20 10 66854759</h5>
                                        </div>

                                    </div>

                                    {/* Email */}
                                    <div className="contact-item mt-4 d-flex align-items-center gap-3">
                                        <div className="icon-box">
                                            <HiOutlineMail />
                                        </div>
                                        <div className="contact-info">
                                            <p className="label mb-2  fw-bold ">راسلنا</p>
                                            <h5 className="mb-0">info@example.com</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form className="contact-form">

                            <div className="row g-3">

                                <div className="col-md-6">
                                    <input type="text" placeholder="الاسم" className="form-control" />
                                </div>

                                <div className="col-md-6">
                                    <input type="email" placeholder="البريد الإلكتروني" className="form-control" />
                                </div>

                                <div className="col-12">
                                    <select className="form-control form-select">
                                        <option>نوع الطلب أو الخدمة</option>
                                        <option>دهان وتجليد</option>
                                        <option>خرسانة مطبوعة</option>
                                        <option>هليكوبتر</option>
                                        <option>إنترلوك</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <textarea
                                        rows="10"
                                        placeholder="صف المشروع، الموقع، رقم الجوال، وأي موعد تفضل التواصل"
                                        className="form-control"
                                    ></textarea>
                                </div>

                                <div className="col-12">
                                    <button className="butn primary_butn w-100">
                                        إرسال الطلب
                                    </button>
                                </div>

                            </div>

                            </form>

                        </div>

                     </div>


                </div>
            </section>
        </>
    )
}

export default Contact
