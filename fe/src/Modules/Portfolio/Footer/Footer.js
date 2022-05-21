import React from 'react'
import { useNavigate } from 'react-router-dom';
import {FaFacebookF, FaInstagramSquare, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {

    const navigate = useNavigate();
    return (
        <>
            <section className="giant-cta">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 text-center col-md-push-2">
                            <h2>Chat API & JavaScript SDK with a pre-built UI</h2>
                            <p>
                            Create an interactive and retainable platform for Healthcare, Marketplace, Education, Virtual Event, Healthcare, social& Communities, job seekers, and applicants to reach and respond to companies, recruiters, and administrators. 
                            </p>
                            <div className="btns-container">
                                <a data-track="TRY_FOR_FREE_BOTTOM" onClick={() => navigate('/auth/signup')} className="btn btn-blue" style={{ marginRight: '10px' }}>Try PlugtoChat</a>
                                <a data-track="TALK_TO_EXPERT" onClick={() => navigate('/contact')} className="btn btn-white">Talk to an expert</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <div className="container footer-container">
                    <div className="row">
                        <div className="col-md-5 mb-xl">
                            <div className="">
                                <div className="pack-item pack-item-shrink-0">
                                    <a><img className="logo" src="/assets/img/Group.png" style={{width: '200px'}} alt="logo" /></a>
                                </div>
                                <div className="pack-item" style={{marginTop: '30px'}}>
                                    <p className="logo-byline" style={{color: '#fff', letterSpacing: '0.06em', fontSize: '15px', lineHeight: '29px'}}>Get your Real-time communication platform powered by the best-in-class Plugtochat API and SDKs. Now that's remarkably simple to add real-time chat to your website and apps.</p>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/ChatAPIandSDK/">
                                    <FaFacebookF style={{marginRight: 20, cursor: 'pointer', fontSize: 24, color: '#fff'}} />
                                    </a>
                                    <a href="https://www.instagram.com/plugtochat/?hl=en">
                                    <FaInstagramSquare style={{marginRight: 20, cursor: 'pointer', fontSize: 24, color: '#fff'}}  />
                                    </a>
                                    <a href="https://twitter.com/plugtochat">
                                    <FaTwitter style={{marginRight: 20, cursor: 'pointer', fontSize: 24, color: '#fff'}}  />
                                    </a>
                                    <a href="https://www.linkedin.com/company/plugtochat/">
                                    <FaLinkedin style={{marginRight: 20, cursor: 'pointer', fontSize: 24, color: '#fff'}}  />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-4 col-md-offset-1 footer-links" style={{    marginTop: '30px'}}>
                            <ul>
                                <li><p className="title">Product</p></li>
                                <li><a href="/features/">Features</a></li>
                                <li><a href="/market-places/">Use Cases</a></li>
                                {/* <li><a href="/resources/case-studies/">Case Studies</a></li>
                                <li><a href="/javascript-chat-library/">JS Chat Library</a></li>
                                <li><a href="/wordpress/">Wordpress Plugin</a></li>
                                <li><a href="/buyer-seller-messaging-for-marketplaces/">Buyer Seller Chat</a></li> */}
                                <li><a href="/demo/">Live Demo</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-xs-4 footer-links" style={{    marginTop: '30px'}}>
                            <ul>
                                <li><p className="title">Company</p></li>
                                <li><a href="/about">About Us</a></li>
                                {/* <li><a>Partnership</a></li> */}
                                <li><a href="/assets/pdf/Terms _ Privacy.pdf">Terms & Privacy</a></li>
                                {/* <li><a href="/gdpr/">GDPR</a></li> */}
                                <li><a href="/contact/">Request Demo</a></li>
                                <li><a href="/pricing/">Pricing</a></li>
                                {/* <li><a href="https://ptc.com/blog">Blog</a></li> */}


                            </ul>
                        </div>
                        <div className="col-md-2 col-xs-4 footer-links" style={{    marginTop: '30px'}}>
                            <ul>
                                <li><p className="title">Support</p></li>
                                {/* <li><a href="/resources/">Resources</a></li> */}
                                {/* <li><a href="/docs/">Documentation</a></li> */}
                                <li><a href="/contact">Chat with us</a></li>
                                <li><a href="mailto:support@plugtochat.com">Email us</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer