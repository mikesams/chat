import React, { useState } from 'react'

const Features = () => {

    const [data, setData] = useState({
        rtu: true,
        cdu: false,
        rcb: false,
        ces: false,
        es: false,
        mci: true,
        wb: false,
        aad: false
        
    })
    return (
        <>
            <section id="header" className="main-header header-subpage header-features">
                <div className="container">
                    <div style={{position: 'relative'}}>
                    <div className="text-center">
                        <div className="row" style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <div className="col-md-6">
                                <h1 style={{fontSize: 39, marginBottom:8,
                                marginTop: '-76px',
                                }}>Quickly Build a reliable & Full-featured chat experience into any mobile or web app</h1>
                        <p style={{fontSize: 15, padding: 0, margin: 0, textAlign: 'left', marginBottom: '20px', marginTop: '8px'}}>Highly reliable chat infrastructure and feature-rich SDKs with pre-built UI</p>
                            </div>
                            <div className='col-md-6'>
                                <img className='img-responsive' src="/assets/img/Group 1000000790.png" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="header-features-imgs">
                        <div>
                            <img  alt="sellers inbox" className="img-responsive header-features-img" src="/assets/img/ea.svg" />
                        </div>
                        <div className="header-features-video video-responsive">
                        </div>
                    </div> */}
                    <div style={{
                       position: 'absolute',
                       bottom: 0,
                        background: '#FFFFFF',
    boxShadow: '0px 6px 24px rgb(0 0 0 / 15%)',
    borderRadius: '20px'
                    }}>
                    <div className="card header-features-nav">
                        <div className="feature-sublinks">
                            <div className="feature-sublinks-item">
                                <a href="#real-time-messaging" className="media feature-sublink">
                                    <span className="media-left">
                                        <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M35.3555 26.2996C35.2735 26.0043 35.454 25.5942 35.6262 25.2989C35.6789 25.211 35.7364 25.1261 35.7985 25.0446C37.272 22.855 38.0602 20.2763 38.0625 17.6371C38.0872 10.0739 31.7051 3.93793 23.8137 3.93793C16.9313 3.93793 11.1891 8.62191 9.8438 14.8399C9.64254 15.7615 9.54079 16.702 9.54028 17.6453C9.54028 25.2168 15.6762 31.5168 23.5676 31.5168C24.8227 31.5168 26.5125 31.1395 27.4395 30.8852C28.3665 30.6309 29.2852 30.2946 29.5231 30.2043C29.7669 30.1124 30.0254 30.0652 30.286 30.0649C30.5703 30.0638 30.852 30.1196 31.1145 30.2289L35.7657 31.8778C35.8676 31.9209 35.9755 31.9486 36.0856 31.9598C36.2596 31.9598 36.4266 31.8907 36.5496 31.7676C36.6727 31.6445 36.7418 31.4776 36.7418 31.3036C36.7361 31.2285 36.7224 31.1542 36.7008 31.0821L35.3555 26.2996Z" stroke="#1E60E1" stroke-width="2.625" stroke-miterlimit="10" stroke-linecap="round" />
                                            <path d="M5.45185 19.0305C4.37595 20.9634 3.85549 23.1561 3.948 25.3663C4.0405 27.5765 4.74238 29.718 5.97603 31.5542C6.16552 31.8405 6.27216 32.062 6.23935 32.2105C6.20653 32.359 5.26071 37.2858 5.26071 37.2858C5.23796 37.401 5.24659 37.5203 5.2857 37.6312C5.3248 37.742 5.39295 37.8403 5.48302 37.9158C5.6032 38.0115 5.75264 38.0631 5.9063 38.0618C5.98841 38.062 6.06968 38.0452 6.14501 38.0126L10.756 36.2079C11.0733 36.0828 11.4274 36.0887 11.7404 36.2243C13.294 36.8297 15.0118 37.2086 16.7303 37.2086C19.0364 37.2111 21.3021 36.6029 23.2969 35.4458" stroke="#1E60E1" stroke-width="2.625" stroke-miterlimit="10" stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <span className="media-body media-middle">Real-time messaging</span>
                                </a>
                            </div>
                            <div className="feature-sublinks-item">
                                <a href="#pre-built-ui" className="media feature-sublink">
                                    <span className="media-left">
                                        <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.125 25.3075L6.34099 28.3517C4.89724 29.008 4.89724 30.0826 6.34099 30.7388L18.4816 36.2759C19.8671 36.9068 22.1476 36.9068 23.5331 36.2759L35.6737 30.7388C37.1175 30.0826 37.1175 29.008 35.6737 28.3517L29.1161 25.196M35.6672 11.2909L23.415 5.70454C22.0869 5.09751 19.9131 5.09751 18.585 5.70454L6.34099 11.2909C4.89724 11.9471 4.89724 13.0209 6.34099 13.6772L18.4816 19.2143C19.8671 19.8459 22.1476 19.8459 23.5331 19.2143L35.6737 13.6772C37.1109 13.0209 37.1109 11.9463 35.6672 11.2909Z" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.125 16.7761L6.33281 19.8244C4.88906 20.4807 4.88906 21.5553 6.33281 22.2115L18.4734 27.7478C19.8589 28.3794 22.1394 28.3794 23.5249 27.7478L35.6655 22.2115C37.1175 21.5553 37.1175 20.4807 35.6737 19.8244L28.875 16.7761" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="media-body media-middle">Pre-built UI</span>
                                </a>
                            </div>
                            <div className="feature-sublinks-item">
                                <a href="#customizable-design" className="media feature-sublink">
                                    <span className="media-left">
                                        <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M35.2825 29.0379C34.7411 28.5375 33.9454 28.4145 33.2645 28.2997C32.3211 28.1438 31.9602 27.9715 31.4106 27.4793C30.2375 26.4375 30.2375 24.9282 31.4106 23.8864L33.8961 21.6797C37.7024 18.3165 37.7024 12.804 33.8961 9.44067C31.0907 6.97153 27.3254 5.74927 23.4125 5.74927C18.8434 5.74927 14.0692 7.4145 10.386 10.6793C3.53638 16.7333 3.53638 26.6508 10.386 32.7047C13.7903 35.7153 18.384 37.2165 22.9286 37.2493H23.068C27.6125 37.2493 32.0915 35.7809 35.2743 32.9508C36.4555 31.909 36.2578 29.9485 35.2825 29.0379V29.0379Z" stroke="#1E60E1" stroke-width="2.625" stroke-miterlimit="10" />
                                            <path d="M14.3965 17.562C14.3965 18.9891 13.2396 20.146 11.8125 20.146C10.3854 20.146 9.22852 18.9891 9.22852 17.562C9.22852 16.1349 10.3854 14.978 11.8125 14.978C13.2396 14.978 14.3965 16.1349 14.3965 17.562Z" fill="#1E60E1" stroke="#1E60E1" stroke-width="0.0820312" />
                                            <path d="M12.4687 28.636C13.9185 28.636 15.0937 27.4607 15.0937 26.011C15.0937 24.5612 13.9185 23.386 12.4687 23.386C11.019 23.386 9.84375 24.5612 9.84375 26.011C9.84375 27.4607 11.019 28.636 12.4687 28.636Z" fill="#1E60E1" />
                                            <path d="M18.375 14.9382C19.8247 14.9382 21 13.763 21 12.3132C21 10.8635 19.8247 9.68823 18.375 9.68823C16.9253 9.68823 15.75 10.8635 15.75 12.3132C15.75 13.763 16.9253 14.9382 18.375 14.9382Z" fill="#1E60E1" />
                                            <path d="M21 34.5422C23.1746 34.5422 24.9375 32.7794 24.9375 30.6047C24.9375 28.4301 23.1746 26.6672 21 26.6672C18.8254 26.6672 17.0625 28.4301 17.0625 30.6047C17.0625 32.7794 18.8254 34.5422 21 34.5422Z" fill="#1E60E1" />
                                            <path d="M26.9062 14.9382C28.356 14.9382 29.5312 13.763 29.5312 12.3132C29.5312 10.8635 28.356 9.68823 26.9062 9.68823C25.4565 9.68823 24.2812 10.8635 24.2812 12.3132C24.2812 13.763 25.4565 14.9382 26.9062 14.9382Z" fill="#1E60E1" />
                                        </svg>
                                    </span>
                                    <span className="media-body media-middle">Customizable design</span>
                                </a>
                            </div>
                            <div className="feature-sublinks-item">
                                <a href="#developer-friendly-api" className="media feature-sublink">
                                    <span className="media-left">
                                        <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M35.2825 29.0379C34.7411 28.5375 33.9454 28.4145 33.2645 28.2997C32.3211 28.1438 31.9602 27.9715 31.4106 27.4793C30.2375 26.4375 30.2375 24.9282 31.4106 23.8864L33.8961 21.6797C37.7024 18.3165 37.7024 12.804 33.8961 9.44067C31.0907 6.97153 27.3254 5.74927 23.4125 5.74927C18.8434 5.74927 14.0692 7.4145 10.386 10.6793C3.53638 16.7333 3.53638 26.6508 10.386 32.7047C13.7903 35.7153 18.384 37.2165 22.9286 37.2493H23.068C27.6125 37.2493 32.0915 35.7809 35.2743 32.9508C36.4555 31.909 36.2578 29.9485 35.2825 29.0379V29.0379Z" stroke="#1E60E1" stroke-width="2.625" stroke-miterlimit="10" />
                                            <path d="M14.3965 17.562C14.3965 18.9891 13.2396 20.146 11.8125 20.146C10.3854 20.146 9.22852 18.9891 9.22852 17.562C9.22852 16.1349 10.3854 14.978 11.8125 14.978C13.2396 14.978 14.3965 16.1349 14.3965 17.562Z" fill="#1E60E1" stroke="#1E60E1" stroke-width="0.0820312" />
                                            <path d="M12.4687 28.636C13.9185 28.636 15.0937 27.4607 15.0937 26.011C15.0937 24.5612 13.9185 23.386 12.4687 23.386C11.019 23.386 9.84375 24.5612 9.84375 26.011C9.84375 27.4607 11.019 28.636 12.4687 28.636Z" fill="#1E60E1" />
                                            <path d="M18.375 14.9382C19.8247 14.9382 21 13.763 21 12.3132C21 10.8635 19.8247 9.68823 18.375 9.68823C16.9253 9.68823 15.75 10.8635 15.75 12.3132C15.75 13.763 16.9253 14.9382 18.375 14.9382Z" fill="#1E60E1" />
                                            <path d="M21 34.5422C23.1746 34.5422 24.9375 32.7794 24.9375 30.6047C24.9375 28.4301 23.1746 26.6672 21 26.6672C18.8254 26.6672 17.0625 28.4301 17.0625 30.6047C17.0625 32.7794 18.8254 34.5422 21 34.5422Z" fill="#1E60E1" />
                                            <path d="M26.9062 14.9382C28.356 14.9382 29.5312 13.763 29.5312 12.3132C29.5312 10.8635 28.356 9.68823 26.9062 9.68823C25.4565 9.68823 24.2812 10.8635 24.2812 12.3132C24.2812 13.763 25.4565 14.9382 26.9062 14.9382Z" fill="#1E60E1" />
                                        </svg>
                                    </span>
                                    <span className="media-body media-middle">Developer-friendly API</span>
                                </a>
                            </div>
                            <div className="feature-sublinks-item">
                                <a href="#out-of-the-box-notifications" className="media feature-sublink">
                                    <span className="media-left">
                                        <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.25 31.5V32.8125C26.25 34.2049 25.6969 35.5402 24.7123 36.5248C23.7278 37.5094 22.3924 38.0625 21 38.0625C19.6077 38.0625 18.2723 37.5094 17.2877 36.5248C16.3032 35.5402 15.75 34.2049 15.75 32.8125V31.5M35.0832 28.8282C32.9766 26.25 31.4894 24.9375 31.4894 17.8295C31.4894 11.3203 28.1655 9.00129 25.4297 7.875C25.0663 7.7257 24.7243 7.38281 24.6135 7.00957C24.1336 5.37633 22.7883 3.9375 21 3.9375C19.2118 3.9375 17.8656 5.37715 17.3907 7.01121C17.2799 7.38855 16.9379 7.7257 16.5745 7.875C13.8354 9.00293 10.5148 11.3138 10.5148 17.8295C10.5107 24.9375 9.02348 26.25 6.91691 28.8282C6.0441 29.8963 6.80863 31.5 8.33523 31.5H33.673C35.1914 31.5 35.9511 29.8914 35.0832 28.8282Z" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="media-body media-middle">Out-of-the-box notifications</span>
                                </a>
                            </div>
                            <div className="feature-sublinks-item">
                                <a href="#message-moderation-analytics" className="media feature-sublink">
                                    <span className="media-left">
                                        <svg className="media-object" width="42" height="43" viewBox="0 0 42 43" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.875 12.3125H38.0625V21.5" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.9375 30.6865L13.8936 20.7304C14.1374 20.4866 14.4268 20.2932 14.7453 20.1612C15.0638 20.0293 15.4052 19.9613 15.75 19.9613C16.0948 19.9613 16.4362 20.0293 16.7547 20.1612C17.0732 20.2932 17.3626 20.4866 17.6064 20.7304L21.7686 24.8927C22.0124 25.1365 22.3018 25.3299 22.6203 25.4618C22.9388 25.5938 23.2802 25.6617 23.625 25.6617C23.9698 25.6617 24.3112 25.5938 24.6297 25.4618C24.9482 25.3299 25.2376 25.1365 25.4814 24.8927L36.75 13.624" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="media-body media-middle">Message moderation & analytics</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row feature-row" id="real-time-messaging">
                        <div className="col-md-7">
                            <div className="media feature-row-title">
                                <div className="media-left">
                                    <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.3555 26.2996C35.2735 26.0043 35.454 25.5942 35.6262 25.2989C35.6789 25.211 35.7364 25.1261 35.7985 25.0446C37.272 22.855 38.0602 20.2763 38.0625 17.6371C38.0872 10.0739 31.7051 3.93793 23.8137 3.93793C16.9313 3.93793 11.1891 8.62191 9.8438 14.8399C9.64254 15.7615 9.54079 16.702 9.54028 17.6453C9.54028 25.2168 15.6762 31.5168 23.5676 31.5168C24.8227 31.5168 26.5125 31.1395 27.4395 30.8852C28.3665 30.6309 29.2852 30.2946 29.5231 30.2043C29.7669 30.1124 30.0254 30.0652 30.286 30.0649C30.5703 30.0638 30.852 30.1196 31.1145 30.2289L35.7657 31.8778C35.8676 31.9209 35.9755 31.9486 36.0856 31.9598C36.2596 31.9598 36.4266 31.8907 36.5496 31.7676C36.6727 31.6445 36.7418 31.4776 36.7418 31.3036C36.7361 31.2285 36.7224 31.1542 36.7008 31.0821L35.3555 26.2996Z" stroke="#1E60E1" stroke-width="2.625" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M5.45185 19.0305C4.37595 20.9634 3.85549 23.1561 3.948 25.3663C4.0405 27.5765 4.74238 29.718 5.97603 31.5542C6.16552 31.8405 6.27216 32.062 6.23935 32.2105C6.20653 32.359 5.26071 37.2858 5.26071 37.2858C5.23796 37.401 5.24659 37.5203 5.2857 37.6312C5.3248 37.742 5.39295 37.8403 5.48302 37.9158C5.6032 38.0115 5.75264 38.0631 5.9063 38.0618C5.98841 38.062 6.06968 38.0452 6.14501 38.0126L10.756 36.2079C11.0733 36.0828 11.4274 36.0887 11.7404 36.2243C13.294 36.8297 15.0118 37.2086 16.7303 37.2086C19.0364 37.2111 21.3021 36.6029 23.2969 35.4458" stroke="#1E60E1" stroke-width="2.625" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div className="media-body media-middle">
                                    <h3>Real-time messaging</h3>
                                </div>
                            </div>
                            <p>
                                Power your platform with messaging that brings a user experience much like WhatsApp or Facebook Messenger. In PTC, you can shape conversations any way you like. Create a private 1-on-1 conversation or engage multiple users in a channel, topic, group, or chat room. It's all about shaping your chat to fit your use case.
                            </p>
                            <p>
                                <strong>All the essential messaging features for an amazing user experience:</strong>
                            </p>
                            <ul className="checkmark-list columns-2">
                                <li>Channels, groups & topics</li>
                                <li>Online presence indicators</li>
                                <li>In-conversation search</li>
                                <li>Real-time translation</li>
                                <li>Typing & read indicators</li>
                                <li>Unread messages badge</li>
                                <li>Conversation history</li>
                                <li>File sharing</li>
                                <li>Location sharing</li>
                                <li>Text formatting</li>
                                <li>Emojis</li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <img className="img-responsive" loading="lazy" alt="messaging" width="440" height="414" src="/assets/img/f1.svg" />
                        </div>
                    </div>

                    <div className="row feature-row" id="pre-built-ui">
                        <div className="col-md-6 col-md-push-6">
                            <div className="media feature-row-title">
                                <div className="media-left">
                                    <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.125 25.3075L6.34099 28.3517C4.89724 29.008 4.89724 30.0826 6.34099 30.7388L18.4816 36.2759C19.8671 36.9068 22.1476 36.9068 23.5331 36.2759L35.6737 30.7388C37.1175 30.0826 37.1175 29.008 35.6737 28.3517L29.1161 25.196M35.6672 11.2909L23.415 5.70454C22.0869 5.09751 19.9131 5.09751 18.585 5.70454L6.34099 11.2909C4.89724 11.9471 4.89724 13.0209 6.34099 13.6772L18.4816 19.2143C19.8671 19.8459 22.1476 19.8459 23.5331 19.2143L35.6737 13.6772C37.1109 13.0209 37.1109 11.9463 35.6672 11.2909Z" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.125 16.7761L6.33281 19.8244C4.88906 20.4807 4.88906 21.5553 6.33281 22.2115L18.4734 27.7478C19.8589 28.3794 22.1394 28.3794 23.5249 27.7478L35.6655 22.2115C37.1175 21.5553 37.1175 20.4807 35.6737 19.8244L28.875 16.7761" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="media-body media-middle">
                                    <h3>Pre-built chat UI</h3>
                                </div>
                            </div>
                            <p>
                                The JavaScript SDK comes with a pre-built chat UI (inbox, chatbox and popup) that is highly customizable. The UI is forward-compatible so it will keep working on future devices, new features, and future browser bugs.
                                The pre-built UI saves you months of work in comparison to alternatives.
                            </p>
                            <div className="accordion" id="accordion-ui" role="tablist" aria-multiselectable="true">
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header" id="headingReadyToUse">
                                        <h4>
                                            <a role="button" 
                                            aria-expanded={data?.rtu ? "true" : 'false'} onClick={() => setData({...data,rtu: !data?.rtu})}>
                                                Ready-to-use popup, chatbox and inbox UI
                                            </a>
                                        </h4>
                                    </div>
                                    <div style={{display: data?.rtu ? 'block' : 'none'}} className="collapse in" role="tabpanel" aria-labelledby="headingReadyToUse">
                                        <div className="accordion-body">
                                            <p>Bring a single conversation into focus from anywhere on your platform with our chat pop-up. You can actually test this one live from this website to <a href="/contact">chat with us</a> :) </p>
                                            <p>In case you want a different type of chat UI try out the pre-built chat box and inbox.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header" id="headingCrossDevice">
                                        <h4>
                                            <a className="collapsed" 
                                            aria-expanded={data?.cdu ? "true" : 'false'} onClick={() => setData({...data,cdu: !data?.cdu})}>
                                                Cross-device user interface
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="collapse"
                                    style={{display: data?.cdu ? 'block' : 'none'}}>
                                        <div className="accordion-body">
                                            <p>The PTC chat works amazingly well on desktop and mobile devices. The UI is pre-built, highly customizable and easy to embed into any mobile app.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header" id="headingReponsiveCrossBrowser">
                                        <h4>
                                            <a className="collapsed" role="button" 
                                             aria-expanded={data?.rcb ? "true" : 'false'} onClick={() => setData({...data,rcb: !data?.rcb})}>
                                                Responsive cross-browser UX
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="cross-browser" className="collapse" 
                                     style={{display: data?.rcb ? 'block' : 'none'}}>
                                        <div className="accordion-body">
                                            <p>Years of sweat and tears went into making the PTC messaging UI fast, fun, and easy to use. Fully responsive, PTC works great on nearly all mobile phones and computers.</p>
                                            <p>We frequently test PTC on the last 2 desktop and mobile versions of Chrome, Safari, Firefox, Edge and Opera, as well as Internet Explorer 11 and up.</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                            <img className="img-responsive" loading="lazy" alt="popup chat ui" width="524" height="618" src="/assets/img/f2.svg" />
                        </div>
                    </div>

                    <div className="row feature-row" id="customizable-design">
                        <div className="col-md-5">
                            <div className="media feature-row-title">
                                <div className="media-left">
                                    <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.2825 29.0379C34.7411 28.5375 33.9454 28.4145 33.2645 28.2997C32.3211 28.1438 31.9602 27.9715 31.4106 27.4793C30.2375 26.4375 30.2375 24.9282 31.4106 23.8864L33.8961 21.6797C37.7024 18.3165 37.7024 12.804 33.8961 9.44067C31.0907 6.97153 27.3254 5.74927 23.4125 5.74927C18.8434 5.74927 14.0692 7.4145 10.386 10.6793C3.53638 16.7333 3.53638 26.6508 10.386 32.7047C13.7903 35.7153 18.384 37.2165 22.9286 37.2493H23.068C27.6125 37.2493 32.0915 35.7809 35.2743 32.9508C36.4555 31.909 36.2578 29.9485 35.2825 29.0379V29.0379Z" stroke="#1E60E1" stroke-width="2.625" stroke-miterlimit="10" />
                                        <path d="M14.3965 17.562C14.3965 18.9891 13.2396 20.146 11.8125 20.146C10.3854 20.146 9.22852 18.9891 9.22852 17.562C9.22852 16.1349 10.3854 14.978 11.8125 14.978C13.2396 14.978 14.3965 16.1349 14.3965 17.562Z" fill="#1E60E1" stroke="#1E60E1" stroke-width="0.0820312" />
                                        <path d="M12.4687 28.636C13.9185 28.636 15.0937 27.4607 15.0937 26.011C15.0937 24.5612 13.9185 23.386 12.4687 23.386C11.019 23.386 9.84375 24.5612 9.84375 26.011C9.84375 27.4607 11.019 28.636 12.4687 28.636Z" fill="#1E60E1" />
                                        <path d="M18.375 14.9382C19.8247 14.9382 21 13.763 21 12.3132C21 10.8635 19.8247 9.68823 18.375 9.68823C16.9253 9.68823 15.75 10.8635 15.75 12.3132C15.75 13.763 16.9253 14.9382 18.375 14.9382Z" fill="#1E60E1" />
                                        <path d="M21 34.5422C23.1746 34.5422 24.9375 32.7794 24.9375 30.6047C24.9375 28.4301 23.1746 26.6672 21 26.6672C18.8254 26.6672 17.0625 28.4301 17.0625 30.6047C17.0625 32.7794 18.8254 34.5422 21 34.5422Z" fill="#1E60E1" />
                                        <path d="M26.9062 14.9382C28.356 14.9382 29.5312 13.763 29.5312 12.3132C29.5312 10.8635 28.356 9.68823 26.9062 9.68823C25.4565 9.68823 24.2812 10.8635 24.2812 12.3132C24.2812 13.763 25.4565 14.9382 26.9062 14.9382Z" fill="#1E60E1" />
                                    </svg>
                                </div>
                                <div className="media-body media-middle">
                                    <h3>Customizable design</h3>
                                </div>
                            </div>
                            <p>
                                Tune the look and feel of the chat UI with PTC Themes. Take control over the most important parts of the interface and make the UI fit your website or app design perfectly. You can customize:
                            </p>
                            <ul className="bulleted paragraphy columns-2">
                                <li>Fonts</li>
                                <li>Colors</li>
                                <li>Message style</li>
                                <li>Shapes</li>
                                <li>Borders</li>
                                <li>Width & height</li>
                                <li>Avatar style</li>
                                <li>...and a lot more</li>
                            </ul>
                        </div>
                        <div className="col-md-7" style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <img className="img-responsive" loading="lazy" alt="popup chat ui" width="524" height="618" src="/assets/img/f3.svg" />
                        </div>
                    </div>

                    <div className="row feature-row" id="developer-friendly-api">
                        <div className="col-md-6 col-md-push-6">
                            <div className="media feature-row-title">
                                <div className="media-left">
                                    <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.125 31.8697H13.125C12.7178 31.8701 12.3244 31.7221 12.0184 31.4533L12.0183 31.4533L1.51835 22.2658C1.33808 22.1079 1.19361 21.9134 1.09464 21.6952C0.995661 21.477 0.944458 21.2402 0.944458 21.0005C0.944458 20.7609 0.995661 20.5241 1.09464 20.3059C1.19361 20.0877 1.33807 19.8932 1.51835 19.7353C1.51835 19.7353 1.51835 19.7353 1.51835 19.7353L12.0183 10.5478C12.354 10.2541 12.7926 10.1057 13.2377 10.1354C13.6827 10.1651 14.0977 10.3703 14.3915 10.706C14.6852 11.0416 14.8335 11.4802 14.8039 11.9253C14.7742 12.3703 14.569 12.7854 14.2333 13.0791L5.21398 20.9697L5.17869 21.0005L5.21398 21.0314L14.2325 28.922L14.2325 28.922C14.4902 29.1473 14.673 29.4458 14.7565 29.7777C14.84 30.1096 14.8202 30.4591 14.6999 30.7795C14.5795 31.0999 14.3642 31.3759 14.0828 31.5707C13.8014 31.7655 13.4673 31.8698 13.125 31.8697ZM28.8751 31.8697H28.875C28.5326 31.87 28.1984 31.7658 27.9169 31.5711C27.6353 31.3763 27.4199 31.1003 27.2995 30.7799C27.179 30.4594 27.1592 30.1099 27.2427 29.7779C27.3262 29.4459 27.509 29.1473 27.7667 28.922L27.7397 28.8911L27.7667 28.922L36.786 21.0314L36.8213 21.0005L36.786 20.9697L27.7675 13.0791C27.4319 12.7854 27.2266 12.3703 27.197 11.9253C27.1673 11.4802 27.3156 11.0416 27.6094 10.706C27.9031 10.3703 28.3181 10.1651 28.7632 10.1354C29.2082 10.1057 29.6468 10.2541 29.9825 10.5478L30.0095 10.517L29.9825 10.5478L40.4825 19.7353C40.6628 19.8931 40.8072 20.0877 40.9062 20.3059C41.0052 20.5241 41.0564 20.7609 41.0564 21.0005C41.0564 21.2402 41.0052 21.477 40.9062 21.6952C40.8072 21.9134 40.6628 22.1079 40.4825 22.2658L29.9825 31.4533L29.9824 31.4533C29.6763 31.7224 29.2826 31.8704 28.8751 31.8697ZM23.3263 7.39515L23.3263 7.39515L23.3267 7.39391C23.3846 7.17647 23.4855 6.97285 23.6236 6.79513C23.7616 6.61741 23.9339 6.4692 24.1303 6.35928C24.3266 6.24937 24.543 6.17998 24.7667 6.15522C24.9904 6.13047 25.2167 6.15086 25.4324 6.21518C25.648 6.2795 25.8485 6.38645 26.0221 6.52969C26.1956 6.67292 26.3387 6.84954 26.4427 7.04906C26.5468 7.24859 26.6097 7.46697 26.6279 7.69126C26.646 7.91556 26.6189 8.14121 26.5482 8.35485L26.5479 8.35595L18.6729 34.606L18.6728 34.606C18.5694 34.9529 18.3569 35.2571 18.0668 35.4735C17.7766 35.6899 17.4244 35.8069 17.0625 35.8072C16.8006 35.8071 16.5424 35.7459 16.3083 35.6284C16.0743 35.5109 15.8709 35.3404 15.7145 35.1304C15.558 34.9204 15.4527 34.6768 15.407 34.4189C15.3613 34.161 15.3765 33.896 15.4513 33.6451L23.3263 7.39515Z" fill="#1E60E1" stroke="#1E60E1" stroke-width="0.0820312" />
                                    </svg>
                                </div>
                                <div className="media-body media-middle">
                                    <h3>Developer-friendly API</h3>
                                </div>
                            </div>
                            <p>
                                Our JavaScript API lets you connect your own analytics or UI elements with ease. Events can notify you when new messages are written or received, and when the user navigates between conversations. Connect the user's customer journey with the conversation by injecting system messages.
                            </p>
                            <p>
                                Our REST API allows you to manage your users, conversations and messages. Webhooks notify your backend of events happening: e.g. new messages and new conversations, and many more.
                            </p>
                            <div className="card">
                                <div className="card-body">
                                    <p>
                                        "PTC has been an integral part of our user experience since the beginning. Thanks to PTC, today Audry manages thousands of conversations and file-shares directly within the platform."
                                    </p>
                                    Eugenio Warglien, Co-founder, Audry
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                        <img className="img-responsive" loading="lazy" alt="popup chat ui" width="524" height="618" src="/assets/img/f4.svg" />
                        </div>
                    </div>

                    <div className="row feature-row" id="out-of-the-box-notifications">
                        <div className="col-md-6">
                            <div className="media feature-row-title">
                                <div className="media-left">
                                    <svg className="media-object" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.25 31.5V32.8125C26.25 34.2049 25.6969 35.5402 24.7123 36.5248C23.7278 37.5094 22.3924 38.0625 21 38.0625C19.6077 38.0625 18.2723 37.5094 17.2877 36.5248C16.3032 35.5402 15.75 34.2049 15.75 32.8125V31.5M35.0832 28.8282C32.9766 26.25 31.4894 24.9375 31.4894 17.8295C31.4894 11.3203 28.1655 9.00129 25.4297 7.875C25.0663 7.7257 24.7243 7.38281 24.6135 7.00957C24.1336 5.37633 22.7883 3.9375 21 3.9375C19.2118 3.9375 17.8656 5.37715 17.3907 7.01121C17.2799 7.38855 16.9379 7.7257 16.5745 7.875C13.8354 9.00293 10.5148 11.3138 10.5148 17.8295C10.5107 24.9375 9.02348 26.25 6.91691 28.8282C6.0441 29.8963 6.80863 31.5 8.33523 31.5H33.673C35.1914 31.5 35.9511 29.8914 35.0832 28.8282Z" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="media-body media-middle">
                                    <h3>Out-of-the-box notifications</h3>
                                </div>
                            </div>
                            <p>
                                PTC has a robust notification system that supports push, email, SMS, and desktop notifications. This makes it possible to keep users in the loop on any channel, along with messaging you can customize any way you like.
                            </p>
                            <div className="accordion" id="accordion-notifications" role="tablist" aria-multiselectable="true">
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header" id="headingEmailSMS">
                                        <h4>
                                            <a role="button" 
                                             aria-expanded={data?.ces ? "true" : 'false'} onClick={() => setData({...data,ces: !data?.ces})}>
                                                Customize email and SMS messages
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="email-sms" className="collapse in" 
                                     style={{display: data?.ces ? 'block' : 'none'}}>
                                        <div className="accordion-body">
                                            <p>You can fully customize the email and SMS message body. Use HTML and CSS to design engaging email notifications and make them stand out.</p>
                                            <p>To bring things to a new level you can also add a custom email sender domain.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header" id="headingFallback">
                                        <h4>
                                            <a className="collapsed" 
                                             aria-expanded={data?.es ? "true" : 'false'} onClick={() => setData({...data,es: !data?.es})}>
                                                Email & SMS fallback
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="email-sms-fallback" className="collapse"
                                     style={{display: data?.es ? 'block' : 'none'}}>
                                        <div className="accordion-body">
                                            <p>Always keep your users in the loop. If a user is sent a message while offline, PTC sends an email or SMS (or both, depending on your configuration). Our battle-tested infrastructure ensures direct and speedy delivery.</p>
                                        </div>
                                    </div>
                                </div>
                             
                               
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-responsive" loading="lazy" alt="email and sms notifications" width="555" height="537" src="/assets/img/f6.svg" />
                        </div>
                    </div>

                    <div className="row feature-row" id="message-moderation-analytics">
                        <div className="col-md-6 col-md-push-6">
                            <div className="media feature-row-title">
                                <div className="media-left">
                                    <svg className="media-object" width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.875 12.3125H38.0625V21.5" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.9375 30.6865L13.8936 20.7304C14.1374 20.4866 14.4268 20.2932 14.7453 20.1612C15.0638 20.0293 15.4052 19.9613 15.75 19.9613C16.0948 19.9613 16.4362 20.0293 16.7547 20.1612C17.0732 20.2932 17.3626 20.4866 17.6064 20.7304L21.7686 24.8927C22.0124 25.1365 22.3018 25.3299 22.6203 25.4618C22.9388 25.5938 23.2802 25.6617 23.625 25.6617C23.9698 25.6617 24.3112 25.5938 24.6297 25.4618C24.9482 25.3299 25.2376 25.1365 25.4814 24.8927L36.75 13.624" stroke="#1E60E1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="media-body media-middle">
                                    <h3>Message moderation & analytics</h3>
                                </div>
                            </div>
                            <p>
                                PTC provides moderation tools like the activity view in the dashboard where companies can monitor chats, and act accordingly if they want. And also a pro-active way to moderate messages by suppressing information like email or links by using the mask contact info feature.
                            </p>
                            <div className="accordion" id="accordion-moderation" role="tablist" aria-multiselectable="true">
                                <div className="panel accordion-item active">
                                    <div role="tab" className="accordion-header" id="headingMask">
                                        <h4>
                                            <a role="button" aria-expanded={data?.mci ? "true" : 'false'} onClick={() => setData({...data,mci: !data?.mci})}>
                                                Mask contact information
                                            </a>
                                        </h4>
                                    </div>
                                    <div  className="collapse" style={{display: data?.mci ? 'block' : 'none'}}>
                                        <div className="accordion-body">
                                            <p>Prevent users from exchanging email addresses, phone numbers and website addresses. You configure exceptions in detail.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item">
                                    <div role="tab" className="accordion-header" id="headingBlacklists">
                                        <h4>
                                            <a className="collapsed" role="button" 
                                            aria-expanded={data?.wb ? "true" : 'false'} onClick={() => setData({...data,wb: !data?.wb})}>
                                                Word blacklists
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="blacklists" className="collapse" style={{display: data?.wb ? 'block' : 'none'}}>
                                        <div className="accordion-body">
                                            <p>Blacklist certain words such as profanity to ensure that chat messages remain clear of offensive words. To create blacklists you'll need to use the mask contact information feature.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel accordion-item">
                                    <div role="tab" className="accordion-header" id="headingAnalytics">
                                        <h4>
                                            <a className="collapsed" role="button" 
                                            aria-expanded={data?.aad ? "true" : 'false'} onClick={() => setData({...data,aad: !data?.aad})}>
                                                Activity & analytics dashboard
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="analytics" className="collapse" style={{display: data?.aad ? 'block' : 'none'}}>
                                        <div className="accordion-body">
                                            <p>See who talks to who and monitor their messages in the PTC Dashboard. This lets you stay in full control of communication so you can jump in when necessary.</p>
                                            <p>Take a look at the analytics dashboard to see how many people are using the chat and the number of messages they’ve sent in a particular timeframe.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                            <img className="img-responsive" loading="lazy" alt="chat analytics" width="555" height="584" src="/assets/img/f7.svg" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Features