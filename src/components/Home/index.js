// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BlinkingCursorTextBuilder } from 'react-animated-text-builders'
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'
import Item from '../Item'
import Item2 from '../Item2'
import Navbar from '../Navbar'
import { BsChevronRight, BsLinkedin, BsFacebook, BsYoutube, BsTwitter, BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import './index.css'

const courses = [
    {
        id: 1,
        url: "https://webingo.in/images/thumb/dm.png",
        name: "Digital",
        name2: ' Marketing'
    },
    {
        id: 2,
        url: "https://webingo.in/images/thumb/web.png",
        name: "Graphic",
        name2: ' Designg'
    },
    {
        id: 3,
        url: "https://webingo.in/images/thumb/seo.png",
        name: "SEO",
        name2: ' Services'
    },
    {
        id: 4,
        url: "https://webingo.in/images/thumb/website.png",
        name: "Website",
        name2: 'Devolpment'
    },
    {
        id: 5,
        url: "https://webingo.in/images/thumb/app.png",
        name: "App",
        name2: 'Devolpment'
    }
]

const company = [
    {
        id: 1,
        url: "https://webingo.in/images/asme.png"
    },
    {
        id: 2,
        url: "https://webingo.in/images/tig.png"
    },
    {
        id: 3,
        url: "https://webingo.in/images/cor.png"
    },
    {
        id: 4,
        url: "https://webingo.in/images/AIESEC.png"
    },
    {
        id: 5,
        url: "https://webingo.in/images/mahanager-removebg-preview.png"
    },
    {
        id: 6,
        url: "https://webingo.in/images/nasscom-logo.jpg"
    },
    {
        id: 7,
        url: "https://webingo.in/images/surya.png"
    },
    {
        id: 8,
        url: "https://webingo.in/images/Prestige.png"
    },
    {
        id: 9,
        url: "https://webingo.in/images/aditiya.png"
    },
    {
        id: 10,
        url: "https://webingo.in/images/drdo-3.png"
    },
    {
        id: 11,
        url: "https://webingo.in/images/wb-logo.png"
    },
    {
        id: 12,
        url: "https://webingo.in/images/JHAHA.png"
    },
    {
        id: 13,
        url: "https://webingo.in/images/Asansol_Engineering_College_Logo.jpg"
    },
    {
        id: 14,
        url: "https://webingo.in/images/flipkart.png"
    },
    {
        id: 15,
        url: "https://webingo.in/images/sib-l.png"
    },
    {
        id: 16,
        url: "https://webingo.in/images/dailyhunt-logo-white.png"
    }
]


const Home = () => {

    // const {categoryId} = item

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'slider',
        speed: 1000,
        autoplaySpeed: 1900,
        autoplay: true,
        arrows: false,
    }

    const settings_sm = {
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slider-sm',
        speed: 1000,
        autoplaySpeed: 1900,
        autoplay: true,
        arrows: false,
    }
    const setting = {
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 1900,
        autoplay: true,
        dotsClass: 'slick-class',
        className: 'owl-stage',
    }
    const setting_sm = {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 1900,
        autoplay: true,
        dotsClass: 'slick-class',
        className: 'owl-stage-sm',
    }

    return (
        <div className='main-app'>
            <Navbar />
            <div className='banner1'>
                <div className='box1'>
                    <div className='data-box'>
                        <h2 className='data'>
                            <span className='i1'>Website</span>
                            <span className='i1'>Graphics</span>
                            <span className='i1'>Marketing</span>
                            <span className='i1'>Application</span>


                        </h2>
                        <p className='info'>Digital IT Solutions for transforming and innovating Businesses.</p>
                        <div>
                            <button className='probtn btn-main'>view protifilo<BsChevronRight /></button>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {courses.map(each =>
                            <Item data={each} key={each.id} />
                        )}
                    </Slider>
                    <Slider {...settings_sm}>
                        {courses.map(each =>
                            <Item data={each} key={each.id} />
                        )}
                    </Slider>
                    <div>

                    </div>

                </div>
            </div>
            <div className='owl-stage-outer'>
                <Slider {...setting} >
                    {company.map(each =>
                        <Item2 data={each} key={each.id} />
                    )}
                </Slider>
                <Slider {...setting_sm} >
                    {company.map(each =>
                        <Item2 data={each} key={each.id} />
                    )}
                </Slider>
            </div>
            <div className='second-box'>
                <div className='data-container'>
                    <h1 className='head'>Why to take your business Online?</h1>
                    <p className='sub-head'>Internet may be a deep-sea expecting to be explored.
                        You can get all you want if you dive in.
                        If you're taking your business online, it has certain benefits.
                        It improves your brand image, your business is often available to consumers 24/7,
                        the start-up cost is extremely less, it reduces operation cost,
                        you'll work from anywhere around the world, but most significantly,
                        the web was made for Business.
                    </p>
                    <h2>Nodays market, is it required-</h2>
                    <p className=''>To beat the Competition.</p>
                    <p className=''>To Gain Leverage in the Market.</p>
                    <p className=''>To get exposure and expansion.</p>
                    <div>
                        <button className='probtn btn-main'>Request a Quote</button>
                    </div>
                </div>
                <img src='	https://webingo.in/images/laptop1.png' className='website-img' />
            </div>

            <div className='call'>
                <span class="typing ">Need &nbsp;<span className='anim-typewriter typing' >
                    solution to all your business complications?
                </span></span>
                <button class="btn-1 btn-main">Get In Touch</button>
            </div>
            <div className='container-4'>
                <div className='inner-container'>
                    <span className="text-animation">We are Innovative Solution Providers</span>
                    <h1 className="head-top">Top rated IT- Solutions Company</h1>
                    <p >WEBINGO® is a renowned end-to-end IT company in India that provides ultimate IT solutions and has provided consultancy to numerous start-ups across India, making a name as one of the best IT consulting companies in Kolkata. WEBINGO provides
                        Innovative IT Solutions at minimal Investments at the best price and excellent Customer Service.
                    </p>
                </div>
            </div>
            <div className='card-container'>
                <div className='cardn bg13'>
                    <div className="service-sec-brp srvc-bg-nx  bg13">
                        <h4 className="mb10">Integrated Services</h4>
                        <p className='integrate'>
                            We have worked over the years to Integrate all the services in one place so that
                            you don’t have to go door-to-door for the best quality of service.</p>

                    </div>
                </div>
                <div className='cardn srcl1'>
                    <div className="service-sec-list srvc-bg-nx ">
                        <img src="https://webingo.in/images/icons/development.svg" alt="service" className='card-img' />
                        <h2 className="mb10">Web Development</h2>
                        <div className="list">
                            <li> PHP &nbsp; </li>
                            <li>| HTML5&nbsp; </li>
                            <li> | React &nbsp; </li>
                            <li>| WORDPRESS</li>
                        </div>
                        <p>Creating and Maintaining a website to provide the best looking and efficiently working websites for a seamless user experience.</p>
                    </div>

                </div>
                <div className='cardn srcl2'>
                    <div className="service-sec-list srvc-bg-nx ">
                        <img src="https://webingo.in/images/app.png" alt="service" className='card-img' />
                        <h2 className="mb10">App Development</h2>
                        <div className="list">
                            <li> PWA &nbsp; </li>
                            <li>| React Native&nbsp; </li>
                            <li> | Kotlin &nbsp; </li>

                        </div>
                        <p>Creation of Software Applications that run on a mobile device. They utilize a network connection to work with remote computing resources.</p>
                    </div>

                </div>
                <div className='cardn srcl3'>
                    <div className="service-sec-list srvc-bg-nx">
                        <img src="https://webingo.in/images/png/graphic.png" alt="service" className='card-img' />
                        <h2 className="mb10">Graphic Designing</h2>
                        <div className="list">
                            <li> BRAND &nbsp; </li>
                            <li>| LOGO&nbsp; </li>
                            <li> | BANNER &nbsp; </li>
                            <li>| VC</li>
                        </div>

                        <p>The creation of styles through the method of communication and problem-solving through the utilization of typography, photography, illustrations, and lots more.</p>

                    </div>

                </div>
                <div className='cardn srcl4'>
                    <div className="service-sec-list srvc-bg-nx ">
                        <img src="https://webingo.in/images/icons/loudspeaker.png" alt="service" className='card-img' />
                        <h2 className="mb10">Digital Marketing</h2>
                        <div className="list">
                            <li> PPC &nbsp; </li>
                            <li>| SMM&nbsp; </li>
                            <li> | Ad Create &nbsp; </li>
                            <li>| B2 Lead</li>
                        </div>
                        <p>Use of the Internet and Digital Technologies/ Media to promote/ sell people, products, businesses, etc.</p>
                    </div>

                </div>
                <div className='cardn srcl5'>
                    <div className="service-sec-list srvc-bg-nx ">
                        <img src="https://webingo.in/images/png/seo.png" alt="service" className='card-img' />
                        <h2 className="mb10">SEO</h2>
                        <div className="list">
                            <li> Onpage &nbsp; </li>
                            <li>| Backlink&nbsp; </li>
                            <li> | Analytics &nbsp; </li>

                        </div>
                        <p>The process of increasing and improving the quality and quantity of traffic to a website via search engines.</p>
                    </div>

                </div>
            </div>

            <div className="techonology-used">
                <div className="container">
                    <ul className="h-scroll tech-icons">
                        <li><img src="https://webingo.in/images/icons/stack-icon1.png" alt="icon" /></li>
                        <li><img src="https://webingo.in/images/icons/stack-icon2.png" alt="icon" /></li>
                        <li><img src="https://webingo.in/images/icons/stack-icon3.png" alt="icon" /></li>
                        <li><img src="https://webingo.in/images/icons/stack-icon4.png" alt="icon" /></li>
                        <li><img src="https://webingo.in/images/icons/stack-icon5.png" alt="icon" /></li>
                        <li><img src="https://webingo.in/images/icons/stack-icon6.png" alt="icon" /></li>
                        <li><img src="https://webingo.in/images/icons/stack-icon7.png" alt="icon" /></li>
                        <li><img src="https://webingo.in/images/icons/stack-icon8.png" alt="icon" /></li>
                    </ul>
                </div>
            </div>
            <div className='container-4'>

                <div className='inner-container'>
                    <span className="text-animation">We Deliver Our Best</span>
                    <h1 className="head-top">Why Choose WEBINGO?</h1>
                    <p >We are the best at what we do.
                    </p>
                    <div className='card-container2'>
                        <div className="cardx">
                            <img src="https://webingo.in/images/png/trustworthy.png" alt="service" className="img-fluids" />
                            <div className="s-block-data">
                                <h3 className='head-5'>Trustworthy Service</h3>
                                <span className='data2'>We work to serve you so that you can make your business stronger. </span>
                            </div>
                        </div>
                        <div className="cardx">
                            <img src="https://webingo.in/images/png/dedicate-manager.png" alt="service" className="img-fluids" />
                            <div className="s-block-data">
                                <h3 className='head-5'>Dedicated Manager and Team</h3>
                                <span className='data2'>We assign a manager and a team to your project for better and perfect results.</span>
                            </div>
                        </div>
                        <div className="cardx">
                            <img src="https://webingo.in/images/png/technical.png" alt="service" className="img-fluids" />
                            <div className="s-block-data">
                                <h4 className='head-5'>Technical Proficiency</h4>
                                <span className='data2'>Our Team is highly proficient in the technology they use. They believe in understanding technology to a deeper level.</span></div>
                        </div>
                        <div className="cardx">
                            <img src="https://webingo.in/images/png/customer-service.png" alt="service" className="img-fluids" />
                            <div className="s-block-data">
                                <h4 className='head-5'>Customer Friendly</h4>
                                <span className='data2' >We listen to your problems with the utmost professionalism and friendly nature.</span>	</div>
                        </div>

                        <div className="cardx">
                            <img src="https://webingo.in/images/png/punctuality.png" alt="service" className="img-fluids" />
                            <div className="s-block-data">
                                <h4 className='head-5'>Timely reports</h4>
                                <span className='data2'>We give you knowledge about your project progress timely and communicate regarding the same.</span>
                            </div>
                        </div>
                        <div className="cardx">
                            <img src="https://webingo.in/images/png/punctuality.png" alt="service" className="img-fluids" />
                            <div className="s-block-data">
                                <h4 className='head-5'>punctuality</h4>
                                <span className='data2'>The best delivered in time is our prime focus to increase satisfaction and trust. For us, time is the key!</span>
                            </div>
                        </div>

                    </div>
                    <div className='call2'>
                        <span class="typing ">Want to start a new project?</span>
                        <div>
                            <button className='probtn btn-main'>Enquire Now <BsChevronRight /></button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container-5'>

                <div className='inner-container2'>
                    <span className="text-animation2">We Deliver Our Best</span>
                    <h1 className="head-top2">Our Key Expertise Areas</h1>

                    <div className='card-container2'>
                        <div className="card-lg c1">
                            <div className="s-block-data">
                                <span className='data-lg'>DESIGN</span>
                                <h3 className='head-5'>Graphic Designing and Branding</h3>

                            </div>
                            <img src="https://webingo.in/images/home/design.png" alt="service" className="img-lg" />
                        </div>
                        <div className="card-lg c2">
                            <div className="s-block-data">
                                <span className='data-lg'>APPLICATION</span>
                                <h3 className='head-5'>Application Based Software</h3>

                            </div>
                            <img src="https://webingo.in/images/home/app.png" alt="service" className="img-lg" />
                        </div>
                        <div className="card-lg c3">
                            <div className="s-block-data">
                                <span className='data-lg'>SEO</span>
                                <h3 className='head-5'>Search Engine Optimization</h3>

                            </div>
                            <img src="https://webingo.in/images/thumb/seo.png" alt="service" className="img-lg" />
                        </div>
                        <div className="card-lg c4">
                            <div className="s-block-data">
                                <span className='data-lg'>WEB DESIGN</span>
                                <h3 className='head-5'>Website Design & Devolpment</h3>
                            </div>
                            <img src="https://webingo.in/images/home/website.png" alt="service" className="img-lg" />
                        </div>

                    </div>
                    <div className='call2'>
                        <span class="cap typing">Get Your Free Customized Quotation?</span>
                        <div>
                            <button className='probtn btn-main'>Today <BsChevronRight /></button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="stay-container footer-row1">
                <div className="email-subs">
                    <h3 className='mb10'>Stay Tuned with us:</h3>
                    <p>Get WebInGo news and announcements delivered right to your inbox.</p>
                </div>

                <div className="email-subs-form">
                    <form>
                        <input type="email" placeholder="Email Your Address" />
                        <button type="button" className="lnk btn-main bg-btn probtn">Subscribe </button>
                    </form>
                </div>

            </div>
            
            <div className="footer-container footer-row2">
                <div className='footer-container2'>
                    <div className="  ftr-brand-pp">
                        <h5>About Webingo Infotech Solutions LLP</h5>
                        <p>End-to-End IT Solutions and business consultation provider.</p>
                        <div className="footrow">
                            <ul className="payu_money">
                                <li><span >We Accept :</span></li>
                                <li><img src="https://webingo.in/images/upi.png" height="43" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h5>Contact Us</h5>
                        <ul className="footer-address-list ftr-details">
                            <li>
                                <span><i className="fas fa-envelope"></i></span>
                                <p>Email </p>
                            </li>
                            <li>

                                <p>Phone</p>
                            </li>
                            <li>

                                <p>Address</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h5>Quick link</h5>
                        <ul class="footer-address-list link-hover">
                            <li>➣ Seo</li>
                            <li>➣ Logo Design</li>
                            <li>➣ Graphic Design</li>
                            <li>➣ App Development</li>
                            <li>➣ Bulk Sms</li>
                            <li>➣ Content Writting</li>
                            <li>➣ Sitemap</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 footer-blog-">
                        <h5>Company</h5>
                        <ul class="footer-address-list link-hover">
                            <li>➣ Contact Us</li>
                            <li>➣ About us</li>
                            <li>➣ Our Achievements</li>

                            <li>➣ Payment Policy</li>
                            <li>➣ Privacy Policy</li>
                            <li>➣ Terms and Conditions</li>
                            <li>➣ License &amp; Copyright</li>
                            <li>➣ Refund Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-brands">
                <div className='containerx'>
                    <div className="v-center">
                        <h5 className="mb10">India's Most Reliable IT Solution Company</h5>
                        <p>Acclaimed, Certified and Reviewed by some biggest names and organisations.</p>
                    </div>
                    <div className="v-center">
                        <ul className="footer-badges">
                            <li><img src="https://webingo.in/images/5yrs-remove.png" alt="experience" className='footer-badge' /></li>
                            <li ><img src="https://webingo.in/images/google_star.png" alt="google review" className='footer-badge'/></li>
                            <li ><img src="https://webingo.in/images/facebook_star.png" alt="facebook review" className='footer-badge'/></li>
                            <li><img src="https://webingo.in/images/isooo.png" alt="iso registered" className='footer-badge'/></li>
                            <li><img src="https://webingo.in/images/DPIIT.png" alt="iso registered" className='footer-badge'/></li>
                            <li><img src="https://webingo.in/images/jd-removebg-preview.png" alt="iso registered" className='footer-badge'/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-row3" >
                <div className="copyright">
                    <div className='container'>
                        <div className="footer-social-media-icons">
                            <BsLinkedin className='footer-social-media-icon' />
                            <BsFacebook className='footer-social-media-icon' />
                            <BsYoutube className='footer-social-media-icon' />
                            <BsTwitter className='footer-social-media-icon' />
                            <BiLogoGmail className='footer-social-media-icon' />
                            <BsInstagram className='footer-social-media-icon' />
                            <BsWhatsapp className='footer-social-media-icon' />

                        </div>

                        <div className="footer-">

                            <p>Copyright © 2017-23 Webingo. All rights reserved.</p>
                            <img src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-03.png?ID=61ad5d2a-94aa-438c-a6bc-3dcd044a7cda" alt="DMCA.com Protection Status" />

                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Home