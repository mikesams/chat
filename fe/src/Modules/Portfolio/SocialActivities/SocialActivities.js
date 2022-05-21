import React from 'react'
import { useNavigate } from 'react-router-dom'


const SocialActivities = () => {

    const navigate = useNavigate();

  return (
    <>
  <section id="header-noimage" className="main-header-noimage header-subpage mb-xl">
  <div className="container container-small text-center">
    <h1>Build and maintain real-time social community platforms </h1>
    <p>
    Grow engagement through conversations and enhance social community experience on your website and app
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
      <h3>Quick integration with Plugtochat API and Javascript SDK </h3>
        <p>Nowadays, communities want to share and respond to the latest news as it happens. Plugtochat is an on‑premise installation package solution that adds a social community experience to your website and app.</p>
          <br />
          <p>Better retention and more robust engagement build your social & community platform up and complete with messaging features and integration-friendly capabilities provided in Plugtochat.
        </p>
      <p><a className="btn btn-blue">Getting started tutorial</a></p>
      </div>
      <div className="col-md-5 col-md-offset-1">
      <img className="img-responsive" src="/assets/img/sc1.jpg" style={{maxWidth: '100%'}} />
      </div>
    </div>
  </div>
  </section>

<section>
  <div className="container">
    <div className="row usecases-row">
      <div className="col-md-5 col-md-push-6">
        <h3>Secure private interactions for members</h3>
        <p>Connect people in group chats, then allow them to build 1-on-1 private connections. The real time private direct chat can be integrated to your existing web & mobile app using Plug Chat API SDK.</p>
        <p>Never let your members miss any conversation, even when they are offline. PlugtoChat notifies the user with an email or SMS notification whenever a message is received. Keep everyone in the loop in real-time.</p>
      </div>
      <div className="col-md-6 col-md-pull-5">
          <img className="img-responsive" src="/assets/img/sc2.jpg" style={{maxWidth: '100%'}} />
      </div>
      </div>
    </div>
</section>

<section>
  <div className="container">
    <div className="row usecases-row">
      <div className="col-md-5 col-md-push-6">
        <h3>Arranging a safe and secure platform for exclusive conversations</h3>
        <p>With moderation for community managers to freeze channels ∙ Mute, ban, or deactivate users, never fear a toxic community for your in-app or website messaging.</p>
        <p>With automatic or manual moderation tools, profanity filters, and spam flood protection added with GDPR, EU-US Privacy Shield we help you secure your community and defend against toxicity.</p>
      </div>
      <div className="col-md-6 col-md-pull-5">
          <img className="img-responsive" src="/assets/img/sc3.jpg" style={{maxWidth: '100%'}} />
      </div>
      </div>
    </div>
</section>

<section id="how-it-works">
  <div className="container">
    <div className="row vcenter-children">
      <div className="col-md-5">
      <h3>Every interest Matter, build Discrete Chat rooms</h3>
        <p>The more the communities grow, provide them a place to belong by allowing them to start conversations that matter. Build group chats, chat rooms for every interest and type of content that like-minded people share. Then grow your community with quality interactions in every conversation</p>
         
      <p><a className="btn btn-blue">Getting started tutorial</a></p>
      </div>
      <div className="col-md-5 col-md-offset-1">
      <img className="img-responsive"src="/assets/img/sc4.jpg" style={{maxWidth: '100%'}} />
      </div>
    </div>
  </div>
  </section>
</>
  )
}

export default SocialActivities