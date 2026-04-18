import React from 'react'
import './_Services.scss'

const Services = () => {
    return (
        <>
            <section className="services_sec section py-5">
                <div className="container">
                    <div class="sec_head text-center col-lg-7 mx-auto mb-5 " >
                        <h4 class="section-title color_primary fw-bold fsz-18">خدماتنا</h4>
                        <h1 class="fw-700 fsz-55 mb-4 mt-2 ">حلول متكاملة للدبش، التجليد، الخرسانة، والمساحات الخارجية</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="serv_item">
                                <div class="service-text p-5">
                                    <img class="service-item-icon mb-4" src="https://alhawari.technavi.tech/assets/img/icons/icon-5.png" alt="" />
                                    <h3 class="mb-3">الدبش والتجليد</h3>
                                    <p class="mb-4">تنفيذ أعمال الدبش والتجليد بجودة عالية لضمان المتانة والمظهر الجمالي مع اختيار خامات مناسبة لطبيعة المشروع.</p>
                                    <a class="butn primary_border_butn fsz-16 py-2 " href="#">
                                        <span >تفاصيل</span>
                                    </a>
                                </div>
                                <img class="bg" src="https://alhawari.technavi.tech/assets/img/service-1.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="serv_item">
                                <div class="service-text p-5">
                                    <img class="service-item-icon mb-4" src="https://alhawari.technavi.tech/assets/img/icons/icon-6.png" alt="" />
                                    <h3 class="mb-3"> الخرسانة المطبوعة  </h3>
                                    <p class="mb-4">تنفيذ أعمال الدبش والتجليد بجودة عالية لضمان المتانة والمظهر الجمالي مع اختيار خامات مناسبة لطبيعة المشروع.</p>
                                    <a class="butn primary_border_butn fsz-16 py-2 " href="#">
                                        <span >تفاصيل</span>
                                    </a>
                                </div>
                                <img class="bg" src="https://alhawari.technavi.tech/assets/img/service-1.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="serv_item">
                                <div class="service-text p-5">
                                    <img class="service-item-icon mb-4" src="https://alhawari.technavi.tech/assets/img/icons/icon-7.png" alt="" />
                                    <h3 class="mb-3"> هليكوبتر الخرسانة  </h3>
                                    <p class="mb-4">تنفيذ أعمال الدبش والتجليد بجودة عالية لضمان المتانة والمظهر الجمالي مع اختيار خامات مناسبة لطبيعة المشروع.</p>
                                    <a class="butn primary_border_butn fsz-16 py-2 " href="#">
                                        <span >تفاصيل</span>
                                    </a>
                                </div>
                                <img class="bg" src="https://alhawari.technavi.tech/assets/img/service-1.jpg" />
                            </div>
                        </div>


                    </div>


                </div>
            </section>
        </>
    )
}

export default Services
