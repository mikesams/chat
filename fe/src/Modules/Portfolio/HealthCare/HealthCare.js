import React from 'react'
import { default as h1Svg } from '../../../assets/img/h1.svg';
import { default as h2Svg } from '../../../assets/img/h2.svg';
import { default as h3Svg } from '../../../assets/img/h3.svg';
import { default as h4Svg } from '../../../assets/img/h4.svg';


const HealthCare = () => {
  return (
   <>
   <section id="header-noimage" className="main-header-noimage header-subpage">
  <div className="container">
    <div className="row">
      <div className="col-md-8 text-center col-md-push-2">
        <h1>Drive better health outcomes with in-app messaging</h1>
        <p>
        With PTC you can help doctors and patients get in contact anytime, and anywhere, by providing a secure way to chat online.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="how-it-works">
  <div className="container">
    <div className="row vcenter-children">
      <div className="col-md-5">
      <h3>Ship fast with our Chat API & pre-built chat UI</h3>
        <p>PTC is a complete chat solution, frontend and backend, in a single package that developers can use to add chat between users to any platform.</p>
          <br />
          <p>It supports all the essential features you'll need to bring a first-class messaging experience to your users.
        </p>
      <p><a className="btn btn-blue">Getting started tutorial</a></p>
      </div>
      <div className="col-md-5 col-md-offset-1">
      <img className="img-responsive" src={h1Svg} style={{maxWidth: '100%'}} />
      </div>
    </div>
  </div>
  </section>

<section>
  <div className="container">
    <div className="row usecases-row">
      <div className="col-md-5 col-md-push-6">
        <h3>Benefits of in-app chat for digital health platforms</h3>
        <p>Effective communication is a crucial factor in driving better health outcomes. By making in-app chat available on your website or mobile app, both patients and doctors get a secure way to connect. </p>
        <p>Here are a couple of use cases where an in-app chat can bring massive improvements to user experience and improve health outcomes.</p>
      </div>
      <div className="col-md-6 col-md-pull-5">
          <img className="img-responsive" src={h2Svg} style={{maxWidth: '100%'}} />
      </div>
      </div>
    </div>
</section>


<section id="how-it-works">
  <div className="container">
    <div className="row vcenter-children">
      <div className="col-md-5">
      <h3>Connecting doctors and patients with a private 1-on-1 chat</h3>
        <p>Provide on-demand access to healthcare for your patients to get the most out of doctor-patient communication and drive better results. </p>
        <p>Give doctors, staff, and patients a central place where they can easily share relevant documents and images, from anywhere and anytime.</p>
      </div>
      <div className="col-md-5 col-md-offset-1">
      <img className="img-responsive" src={h3Svg} style={{maxWidth: '100%'}} />
      </div>
    </div>
  </div>
</section>


<section>
  <div className="container">
    <div className="row usecases-row">
      <div className="col-md-5 col-md-push-6">
        <h3>Improving collaboration between doctors and staff with group chat</h3>
        <p>Bring general practitioners, specialists, and other staff together so they can make better decisions faster. With one group chat per case or for each team. </p>
        <p>Create a single point of discussion to allow doctors and staff to collaborate and share documents.</p>
      </div>
      <div className="col-md-6 col-md-pull-5">
          <img className="img-responsive" src={h4Svg} style={{maxWidth: '100%'}} />
      </div>
    </div>
    </div>
</section>

<section>
  <div className="container">
    <div className="row usecases-row">
      <div className="col-md-8 text-center col-md-push-2">
        <h3>Replacing hundreds of daily calls with in-app messaging</h3>
        <p>
        Most of the doctor-patient conversations are made in person or on a call. By providing a centralized messaging system for everyone involved, both doctors and staff can save time managing cases online. A large number of patients will use in-app chat instead of calling, and that way, unloading the staff from the endless incoming calls.
        </p>
        <p>
        Messaging also makes the communication more streamlined as it serves as a centralized point of conversation with the entire chat history preserved.
        </p>
        </div>
      </div>
    </div>
</section>
   </>
  )
}

export default HealthCare