import React from 'react'

const AboutUs = () => {
    return (
        <>
            <section id="header-noimage" className="main-header-noimage header-subpage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 text-center col-md-push-2">
                            <h1>About Plugtochat</h1>
                            <p>
                            Get your Real-time communication platform powered by the best-in-class Plugtochat API and SDKs. Now that's remarkably simple to add real-time chat to your website and apps.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row usecases-row">
                        <div className="col-md-5 col-md-push-6">
                            <h5>PlugToChat</h5>
                            <h3>Mission of greatness</h3>

                            <p> Plugtochat aims to ease the rising demand for quick and reliable integration of real-time communication platforms to build full-featured chat for every kind of use case, from a marketplace, on-demand business, e‑commerce, virtual events, or social platform. You name it; we have it.</p>

                            <p>Our messaging API and SDK is touching millions of people. We're growing fast, we're VC funded, and we believe we have a chance to build a once in a lifetime company with great impact.</p>

                        </div>
                        <div className="col-md-5 col-md-pull-5">
                            <img className="img-responsive" style={{maxWidth: '100%'}} src="/assets/img/undraw_About_us_page_re_2jfm.png" />
                        </div>
                    </div>

                    <div className="row usecases-row">
                        <div className="col-md-10 text-center col-md-push-1">
                            <h5>About Our Founder</h5>
                           
                            <p style={{textAlign: 'left'}}>
                            Kranthi Das, from the age of 20, has been a part of the customer care industry. Interacting with customers and understanding their mood, which varies as per the situation, made her think to start something that would help customer satisfaction and help them make easy interactions through chat rather than voice. <br /> <br />

Since 2015, she has been an active member of human welfare and animal welfare organizations & communities. As a Team lead of Motopaws, an organization funded by Ratan Tata, she organized and made herself available to numerous campaigns in Visakhapatnam and Bangalore to put radium collars on stray dogs to avoid them coming under speeding vehicles. She also motivates and councils acid attack survivors, rape victims, and child beggars. She conducted many social educative drives to educate kids about sex abuse and women about domestic violence. These strengthened them with the awareness of how they can help and stay positive within themselves. Without raising funds, she organized campaigns to distribute sanitary napkins to girls and pee napkins to children in slums, which adds to her reformation activities list. 
<br /><br />
With establishing her dream project, UNATHI technologies, she started empowering women. She put in much effort to educate and provide them employment, especially those who gave up their careers after giving birth to babies. It aims for women to make a career after the break.
                            </p>

                            {/* <div className="row investors">
                                <div className="col-md-4 text-center col-md-push-2">
                                    <div className="investor-logo"><img src="/images/investors/speedinvest.png" /></div>
                                    <h5>Speedinvest</h5>
                                    <p>
                                        <i>Speedinvest is a seed investor that offers both capital and operational resources.</i>
                                    </p>
                                </div>
                                <div className="col-md-4 text-center col-md-push-2">
                                    <div className="investor-logo"><img src="/images/investors/bom.jpg" /></div>
                                    <h5>BOM</h5>
                                    <p>
                                        <i>BOM is an economic development company that works as a growth accelerator for companies in Brabant, The Netherlands.</i>
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="container">
                        <div className="row usecases-row">
                            <div className="col-md-5">
                                <img className="img-responsive" style={{maxWidth: '100%'}} src="/assets/img/undraw_Collaborators_re_hont.png" />
                            </div>
                            <div className="col-md-7">
                                <h5>Partner with us</h5>
                                <h3>"Plugtochat enables you to generate revenue from creating and selling custom solutions to customers. For a Freelancer developer, a software development agency, or a SaaS provider, you can partner with us and build custom messaging features at scale without developing them from scratch. Also, with Plugtochat, multi-license partnerships manage multiple customers within accounts."</h3>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutUs