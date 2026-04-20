import React from 'react'
import { useState } from "react";

import './_Projects.scss'


const projectsData = [
  {
    id: 1,
    title: "دهان وتجليد",
    desc: "تنفيذ دبش وتجليد للواجهات والاستنادات أعمال دبش وتجليد تهدف إلى حماية المنحدرات وتحسين المظهر مع استخدام مواد مناسبة للبيئة المحلية وضمان استقرار التربة والمنشأ.",
    img: "https://alhawari.technavi.tech/assets/img/project-1.jpg",
    active: true,
  },
  {
    id: 2,
    title: " خرسانة مطبوعة  ",
    desc: "مداخل وساحات بخرسانة مطبوعة تشطيبات خرسانية مطبوعة تناسب الفلل والمداخل العامة، بأشكال وألوان تضفي طابعاً عصرياً مع مقاومة جيدة للاستخدام.",
    img: "https://alhawari.technavi.tech/assets/img/project-2.jpg",
  },
  {
    id: 3,
    title: "هليكوبتر",
    desc: "أرضيات هليكوبتر للمصانع والجراجات تشطيب هليكوبتر يمنح سطحاً أملساً ومستوياً يزيد من قوة التحمل ويسهل التنظيف، مثالي للمساحات الصناعية والتخزين.",
    img: "https://alhawari.technavi.tech/assets/img/project-3.jpg",
  },
  {
    id: 4,
    title: "إنترلوك وبندورة",
    desc: "مساحات خارجية بإنترلوك وبندورة تنسيق الممرات والساحات ببلاط الإنترلوك والبندورة بأشكال عصرية، مع مراعاة الصرف والاستدامة وسهولة الصيانة لاحقاً.",
    img: "https://alhawari.technavi.tech/assets/img/project-4.jpg",
  },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState(1);

    const activeProject = projectsData.find(
        (item) => item.id === activeTab
    );

    return (
        <>
            <section className="projects_sec section ">
                <div className="container">
                    <div class="sec_head text-center col-lg-7 mx-auto mb-5 " >
                        <h4 class="section-title color_primary fw-bold fsz-18">أعمالنا</h4>
                        <h1 class="fw-700 fsz-55 mb-4 mt-2 "> نماذج من مشاريع التنفيذ والتشطيبات </h1>
                    </div>
                    <div className="row align-items-center">

                        {/* Tabs */}
                        <div className="col-lg-4">

                            {projectsData.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`tab-item ${
                                    activeTab === item.id ? "active" : ""
                                    }`}
                                >
                                    {item.id}. {item.title}
                                </div>
                            ))}

                        </div>

                        {/* Image */}
                        <div className="col-lg-4 text-center my-4 my-lg-0">
                            <img
                            src={activeProject.img}
                            alt=""
                            className="img-fluid img-thumbnail"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="col-lg-4">
                            <div className="txt_box ps-lg-0 ">
                                <h2 className="fw-bold color_primary mb-3">
                                   {activeProject.title}
                                </h2>

                                <p className="p fsz-18 fw-500">
                                    {activeProject.desc}
                                </p>

                                <ul className="mt-4">
                                    <li>✔ خامات مختارة بعناية</li>
                                    <li>✔ تنفيذ حسب المواصفات</li>
                                    <li>✔ مظهر متناسق ومتين</li>
                                </ul>

                                <a href='#' className="butn primary_border_butn mt-4">
                                    اطلب استشارة
                                </a>
                            </div>


                        </div>



                    </div>
                </div>
            </section>

        </>
    )
}

export default Projects
