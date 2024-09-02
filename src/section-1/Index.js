import React, {useEffect} from "react";
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Section1() {

    useEffect(()=>{
        AOS.init({
          once: true,
          duration: 1200,
          });
      },[])

    return (
        <>
        <section className="section1 header" id="home" data-aos="fade-up" data-aos-duration="1900">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="header_text col-xxl-10 ">
                            <h1>
                                <TypeAnimation
                                    sequence={[
                                        'Full Stack Career',
                                        1000,
                                        'Full Stack Training',
                                        1000,
                                        '100% Placement',
                                        1000,
                                    ]}
                                    className="type_ani"
                                    speed={10}
                                    easing="linear"
                                    repeat={Infinity}
                                />
                            </h1>
                            <div className="rating">
                                <repeat n="5"></repeat>
                            </div>
                            <p>1000+ TRUST STUDENTS</p>
                            <p>Build professional work-like projects to master React, Node JS, MongoDB, Javascript, and more to land a top career as a full-stack developer with guaranteed placement.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 position-relative">
                        <div className="header_img">
                            <img src="images/asset 2.png" alt="img2" className="asset2 position-relative"/>
                        </div>
                    </div>
                </div>
            </div>
            <img src="images/asset 3.svg" alt="img3" className="asset3"/>
            <img src="images/asset 4.svg" alt="img3" className="asset4 d-lg-block d-none"/>
        </section>
        </>
    )
}
export default Section1;