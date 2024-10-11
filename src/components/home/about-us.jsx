import Link from 'next/link';
import React from 'react';
import about_img from '@assets/img/about/about-us-2.png';
import Image from 'next/image';
import 'react-modal-video/css/modal-video.min.css';
import VideoModal from '@components/common/modals/modal-video';
import useModal from '@hooks/use-modal';

const AboutUs = () => {
    const { isVideoOpen, setIsVideoOpen } = useModal();
    return (
        <>
            <section className="about__area-2 pt-120 pb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="about__content-2 mb-60 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <div className="section__title mb-50">
                                    <span className="sub-title">about us</span>
                                    <h2 className="title">A company involved in <br /> servicing, maintenance.</h2>
                                </div>
                                <div className="about__content-tab-2 mt-40">
                                    <ul className="nav mb-5" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active clip-lg-btn" id="approach-tab" data-bs-toggle="tab"
                                                data-bs-target="#approach" type="button" role="tab" aria-controls="approach"
                                                aria-selected="true">our approach</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link clip-lg-btn" id="goal-tab" data-bs-toggle="tab"
                                                data-bs-target="#goal" type="button" role="tab" aria-controls="goal"
                                                aria-selected="false">our goal</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link clip-lg-btn" id="mision-tab" data-bs-toggle="tab"
                                                data-bs-target="#mision" type="button" role="tab" aria-controls="mision"
                                                aria-selected="false">our mision</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="approach" role="tabpanel" aria-labelledby="approach-tab">
                                            <p>Based in Philadelphia, Pennsylvania, KC’S LOGISTICS LLC revolutionized the transportation industry by offering the first and only interactive online platform that connects an ever-growing network of semi-trailers. These trailers are available for FMCSA carriers, truck dealers, drayage, towing, and construction companies to utilize for one-way moves. Our platform provides an easy-to-use, fast, and effective process that gives truck operators real-time information, empowering them to make the best decisions to maximize asset utilization.
                                            </p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/">learn more</Link>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="goal" role="tabpanel" aria-labelledby="goal-tab">
                                            <p>At KC’S LOGISTICS LLC, our goal is to simplify and optimize trailer logistics for both operators and owners. We aim to ensure that truck operators can quickly access the tools and information needed to improve efficiency, while trailer owners, manufacturers, and other industry players can seamlessly post their available trailers to reach a large network of qualified operators</p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/">learn more</Link>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="mision" role="tabpanel" aria-labelledby="mision-tab">
                                            <p>Our mission is to create an efficient and comprehensive process for trailer owners—whether they are manufacturers, dealers, motor carriers, railroads, leasing companies, or government agencies—to have their trailers delivered or repositioned as needed. By providing a platform where trailer availability can be advertised to thousands of operators, we help ensure that trailers reach their destination when and where they are required.</p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/">learn more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="about__img-2 mb-60 ml-60 w-img p-relative wow fadeInLeft" data-wow-duration="1.5s"
                                data-wow-delay=".3s">
                                <Image src={about_img} style={{ width: "100%", height: "auto" }} alt="About" />
                                <div className="about__btn-2">
                                    <button type='button'
                                        className="popup-video play-btn play-btn-white" onClick={() => setIsVideoOpen(true)}><i className="fas fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"J72oMj5mWLw"} />
        </>

    );
};

export default AboutUs;