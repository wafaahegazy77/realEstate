import React from 'react'
import './_About.scss'


const About = () => {
    return (
        <>
            <section className="about_sec section pt-4">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 position-relative mt-4 mt-lg-0">
                            <div className="img_box">
                                <img src="https://alhawari.technavi.tech/assets/img/about-1.jpg" className='img1' alt="" />
                                <img src="https://alhawari.technavi.tech/assets/img/about-2.jpg" className='img2' alt="" />
                            </div>

                        </div>

                        <div className="col-lg-6 ps-lg-5 ">
                            <div className="txt_box">
                                <span className="section-subtitle color_primary fw-bold fsz-18 ">من نحن</span>

                                <h2 className="section-title fsz-40 fw-bold mt-2 mb-4">
                                    Real Estate – <span className='color_primary'>شركة العقارات</span>
                                </h2>

                                <p className="text-muted mt-3 fsz-18">
                                    نحن متخصصون في تنفيذ أعمال البناء والتشطيب بجودة عالية تضمن المتانة
                                    والمظهر الجمالي، حيث نعتمد على أفضل الخامات وأحدث أساليب التنفيذ
                                    للحصول على نتائج تدوم لسنوات طويلة.
                                </p>

                                <p className="text-muted mt-3 fsz-18">
                                    كما نقدم خدمات الخرسانات المطبوعة التي تجمع بين القوة والشكل العصري،
                                    لتناسب المداخل والساحات، مع تصاميم تحاكي الحجر الطبيعي.
                                </p>

                                <div className="exp-box d-flex align-items-center gap-3 mt-5">
                                    <div className="exp-number">15</div>
                                    <div className="exp-text fw-500 fsz-30">
                                        <p className="mb-0">سنوات</p>
                                        <p className="mb-0">خبرة</p>
                                        <p className="mb-0">ميدانية</p>
                                    </div>
                                </div>

                                <a href='#' className="butn primary_butn mt-5 px-5 ">
                                    المزيد عنا
                                </a>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default About
