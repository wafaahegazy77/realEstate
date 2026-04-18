import React from 'react'
import './_Features.scss'
import servIcon1 from '../../assets/icons/servIcon1.webp'
import servIcon2 from '../../assets/icons/servIcon2.webp'
import servIcon3 from '../../assets/icons/servIcon3.webp'


const Features = () => {
    return (
        <>
            <section className="features_sec section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="fet-item text-center bg-light h-100 p-5 pt-0">
                                <div class="fet-icon">
                                    <img src={servIcon1} alt="" role="presentation" />
                                </div>
                                <h3 class="mb-3">خامات مميزة</h3>
                                <p class="mb-0">نعتمد على أفضل الخامات وأحدث أساليب التنفيذ لضمان جودة التشطيب ومقاومة العوامل الجوية مع الوقت.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="fet-item text-center bg-light h-100 p-5 pt-0">
                                <div class="fet-icon">
                                    <img src={servIcon2} alt="" role="presentation" />
                                </div>
                                <h3 class="mb-3"> متانة ومظهر جمالي  </h3>
                                <p class="mb-0"> أعمال تدوم لسنوات طويلة مع الحفاظ على مظهر أنيق يلائم الفلل والمداخل والمنشآت التجارية والصناعية. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="fet-item text-center bg-light h-100 p-5 pt-0">
                                <div class="fet-icon">
                                    <img src={servIcon3} alt="" role="presentation" />
                                </div>
                                <h3 class="mb-3"> دقة في التنفيذ  </h3>
                                <p class="mb-0"> نلتزم بالدقة والاحترافية في كل تفصيلة لنقدم لعملائنا نتائج تفوق التوقعات بأعلى المعايير. </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Features
