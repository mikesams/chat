import React from 'react'
import { useNavigate } from 'react-router-dom'


const Education = () => {

    const navigate = useNavigate();

  return (
    <>
  <section id="header-noimage" className="main-header-noimage header-subpage mb-xl">
  <div className="container container-small text-center">
    <h1>Immersive E-learning for students & teachers </h1>
    <p>
    Connecting teachers with students with unparalleled options in a collaborative and robust environment for distance learning
    </p>
    <p className="mt-xl">
      <a onClick={() => navigate('/auth/signup')}  className="btn btn-blue" style={{marginRight: '12px'}} data-track="TRY_FOR_FREE_TOP">Try for free</a>
      <a onClick={() => navigate('/contact')} className="btn btn-white" data-track="TALK_TO_EXPERT">Talk to an expert</a>
    </p>
  </div>
</section>



<section id="how-it-works">
  <div className="container">
    <div className="row vcenter-children">
      <div className="col-md-5">
      <h3>Borderless Classroom Experience through e-Learning </h3>
        <p>Learning sessions are interactive if we bridge the gap between students and teachers. To ensure concepts are communicated clearly, direct chat integration is necessary to your existing web & mobile app. With dedicated chat rooms, students and teachers can solve problems together in real-time.</p>
          <br />
          <p>Once you allow the PlugtoChat SDK to integrate chat features into your existing web & mobile app, it will deliver one-to-one or multi-student chat to enhance the learning.
        </p>
      <p><a className="btn btn-blue">Getting started tutorial</a></p>
      </div>
      <div className="col-md-5 col-md-offset-1">
      <img className="img-responsive" src="/assets/img/education1.jpg" style={{maxWidth: '100%'}} />
      </div>
    </div>
  </div>
  </section>

<section>
  <div className="container">
    <div className="row usecases-row">
      <div className="col-md-5 col-md-push-6">
        <h3>Detailed course discussions through the direct chat</h3>
        <p>Improve communication between teachers, students, and education platforms by digital landscaping your classrooms. Most educators struggle to monitor students and deliver secure messages through online platforms they can trust. By integrating Plugtochat in-app messaging platform, you can start delivering multichannel communications that improve the teaching process.</p>
        <p>For a student with questions on an assignment or course and requires some clarification on topics, Plugtochat can get the answers they need from the mentor using real-time chat features.</p>
      </div>
      <div className="col-md-6 col-md-pull-5">
          <img className="img-responsive" src="/assets/img/education2.jpg" style={{maxWidth: '100%'}} />
      </div>
      </div>
    </div>
</section>

<section>
  <div className="container">
    <div className="row usecases-row">
      <div className="col-md-5 col-md-push-6">
        <h3>Innovative classroom Experience for students and teachers</h3>
        <p>Real classroom-like experience with Plugtochat advanced customization features to keep students engaged in online curriculum with streamlined messaging channels. Use real-time messaging through chat to engage students for test and quiz delivery. Make collaboration simple between students and teachers using in-app messaging.</p>
       
      </div>
      <div className="col-md-6 col-md-pull-5">
          <img className="img-responsive" src="/assets/img/education3.jpg" style={{maxWidth: '100%'}} />
      </div>
      </div>
    </div>
</section>

<section id="how-it-works">
  <div className="container">
    <div className="row vcenter-children">
      <div className="col-md-5">
      <h3>Attract, Engage and convert with Plugtochat</h3>
        <p>Harness the features of Plugtochat messaging on both web and mobile applications to reach and engage students at any point. Use our complete chat platform to connect students and teachers through preferred channels, whether you’re in a classroom setting or operating an educational tech product. Make it possible for teachers to address students on 1 to 1 chat or in the group on their terms in both public and private chat rooms.</p>
         
      <p><a className="btn btn-blue">Getting started tutorial</a></p>
      </div>
      <div className="col-md-5 col-md-offset-1">
      <img className="img-responsive"src="/assets/img/education4.jpg" style={{maxWidth: '100%'}} />
      </div>
    </div>
  </div>
  </section>
</>
  )
}

export default Education