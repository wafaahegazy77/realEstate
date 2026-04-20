import React from 'react'
import './_Header.scss'
// import heroVid from '../../assets/hero-bg.mp4'



const Header = () => {
    return (
        <>  
            <header className="header section">
                <div className="col-lg-6 mx-auto">
                    <div className="txt_box text-center ">
                        <h1 className="main_title fw-700 fsz-90">
                            هليكوبتر وإنترلوك واحترافية التنفيذ
                        </h1>
                        <div className="p text-white fsz-20 mt-4 ">
                            أعمال هليكوبتر لسطح خرساني ناعم ومستوي، وحلول إنترلوك وبندورة بأحدث التصاميم للمساحات الخارجية مع سهولة الصيانة.
                        </div>
                        <a href="#" className='butn primary_butn px-5 mx-auto mt-5'>
                            <span>تواصل معنا</span>
                        </a>
                    </div>
                </div>
                <video className="header_video bg" autoPlay loop muted>
                    <source src="https://alhawari.technavi.tech/videos/2.mp4" type="video/mp4" />
                </video>
            </header>
        </>
    )
}

export default Header
