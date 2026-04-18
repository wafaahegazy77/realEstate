import React from 'react'
import './_About.scss'

const WhyUs = () => {
    return (
        <>
            <section className="about_sec section pt-4">
                <div className="container">
                    <div className="row align-items-center">


                        <div className="col-lg-6  ">
                            <div className="txt_box">
                                <span className="section-subtitle color_primary fw-bold fsz-18 "> لماذا الهواري  </span>

                                <h2 className="section-title fsz-50 fw-bold mt-3 mb-4">
                                    الدقة، الجودة، والاحترافية في كل تفصيلة
                                </h2>

                                <p className="text-muted mt-4 fsz-18">
                                    في الهواري نلتزم بتقديم أفضل النتائج بأعلى المعايير؛ نجمع بين الخبرة الميدانية والالتزام بمواصفات التنفيذ لنمنح عملاءنا ثقة تدوم.
                                </p>

                                <div className="items mt-5 ">
                                    <div class="item mb-4 d-flex align-items-start">
                                        <img class="flex-shrink-0" src="https://alhawari.technavi.tech/assets/img/icons/icon-2.png" alt="" />
                                        <div class="ms-4">
                                            <h3>الدقة</h3>
                                            <p class="mb-0 fsz-18">متابعة دقيقة للمستويات والزوايا والتفاصيل لضمان تنفيذ يطابق المخطط والمواصفات المتفق عليها.</p>
                                        </div>
                                    </div>
                                    <div class="item mb-4 d-flex align-items-start">
                                        <img class="flex-shrink-0" src="https://alhawari.technavi.tech/assets/img/icons/icon-3.png" alt="" />
                                        <div class="ms-4">
                                            <h3>الجودة</h3>
                                            <p class="mb-0 fsz-18"> اختيار خامات موثوقة وأساليب عمل حديثة لنتائج تتحمل الاستخدام اليومي والظروف المناخية. </p>
                                        </div>
                                    </div>
                                    <div class="item mb-4 d-flex align-items-start">
                                        <img class="flex-shrink-0" src="https://alhawari.technavi.tech/assets/img/icons/icon-4.png" alt="" />
                                        <div class="ms-4">
                                            <h3>الاحترافية</h3>
                                            <p class="mb-0 fsz-18"> فريق يعمل بانضباط وتواصل واضح مع العميل من بداية المشروع حتى التسليم.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 position-relative mt-4 ps-lg-5 ">
                            <div className="img_box">
                                <img src="https://alhawari.technavi.tech/assets/img/about-2.jpg" className='img1' alt="" />
                                <img src="https://alhawari.technavi.tech/assets/img/about-1.jpg " className='img2' alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs
