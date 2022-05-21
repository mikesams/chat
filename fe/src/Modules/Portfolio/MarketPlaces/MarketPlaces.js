import React from 'react'
import { useNavigate } from 'react-router-dom'
import { default as f4Svg } from '../../../assets/img/f4.svg';
import { default as f6Svg } from '../../../assets/img/f6.svg';


const MarketPlaces = () => {

    const navigate = useNavigate();

  return (
    <>
  <section id="header-noimage" className="main-header-noimage header-subpage mb-xl">
  <div className="container container-small text-center">
    <h1>Drive more transactions through chats</h1>
    <p>
    PlugtoChat enables chat between buyers and sellers and improves customer support with a pre-build customized live chat API for marketplaces
    </p>
    <p className="mt-xl">
      <a onClick={() => navigate('/auth/signup')}  className="btn btn-blue" style={{marginRight: '12px'}} data-track="TRY_FOR_FREE_TOP">Try for free</a>
      <a onClick={() => navigate('/contact')} className="btn btn-white" data-track="TALK_TO_EXPERT">Talk to an expert</a>
    </p>
  </div>
</section>

{/* <section className="mb-2xl">
  <div className="container container-small">
    <div className="pack pack-xl pack-center">
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="300" height="88" src="/images/logos/logo_decathlon.png" alt="Decathlon" className="img-responsive" />
      </div>
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="352" height="80" src="/images/logos/logo_leadgenius.png" alt="LeadGenius" className="img-responsive" />
      </div>
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="274" height="86" src="/images/logos/logo_riotgames.png" alt="Riot Games" className="img-responsive" />
      </div>
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="270" height="46" src="/images/logos/logo_classtime.png" alt="Classtime" className="img-responsive" />
      </div>
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="197" height="144" src="/images/logos/logo_hyundai.png" alt="Hyundai" className="img-responsive" />
      </div>
    </div>
    <div className="pack pack-xl pack-center mt">
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="272" height="175" src="/images/logos/logo_britishgas.png" alt="British Gas" className="img-responsive" />
      </div>
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="242" height="44" src="/images/logos/logo_vontobel.png" alt="Vontobel" className="img-responsive" />
      </div>
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="214" height="68" src="/images/logos/logo_cogx.png" alt="CogX" className="img-responsive" />
      </div>
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="300" height="72" src="/images/logos/logo_honeypot.png" alt="Honeypot" className="img-responsive" />
      </div>
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="262" height="48" src="/images/logos/logo_advisable.png" alt="Advisable" className="img-responsive" />
      </div>
      <div className="pack-item pack-item-shrink">
        <img loading="lazy" width="275" height="126" src="/images/logos/logo_arkadium.png" alt="Arkadium" className="img-responsive" />
      </div>
    </div>
  </div>
</section> */}


<section className="mb-xl">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6 mb-xl">
        <a className="img-card img-card-featured">
          {/* <img className="img-card-img" loading="lazy" src="/images/case-studies/nextcloset-lg.jpg" alt="The Next Closet website" /> */}
          <h2 className="img-card-title-lg">Increased conversion rate and NPS score</h2>
          <p className="img-card-paragraph">
            by allowing buyers and sellers to chat on The Next Closet marketplace.
          </p>
          <div className="img-card-footer">
            <strong>Read Case Study</strong>
          </div>
        </a>
      </div>
      <div className="col-xs-12 col-md-6 mb-xl">
        <a  className="img-card img-card-featured">
          {/* <img className="img-card-img" loading="lazy" src="/images/use-cases/chat_for_marketplaces.jpg" alt="Person packaging a box" /> */}
          <h2 className="img-card-title-lg">30% less support time</h2>
          <p className="img-card-paragraph">
            for the Crowdyhouse marketplace after integrating a buyer-seller chat.
          </p>
          <div className="img-card-footer">
            <strong>Read Case Study</strong>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<section>
<div className="container">
    <div className="row usecases-row">
      <div className="col-md-8 text-center col-md-push-2">
        <h3 className="heading-lg mb-lg">Real-time communication between buyers and sellers drives results</h3>
        <p className="paragraph-responsive">
          Build a chat feature that will boost user engagement, retention and
          conversion rate by creating an amazing messaging experience that is
          tailored for marketplaces.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="mb-2xl">
  <div className="container">
    <div className="row row-center" id="pre-build-ui">
      <div className="col-xs-12 col-md-6">
        <h3 className="heading-lg mb-lg">Help sellers support their customers via chat</h3>
        <p>
          For sellers, prompt communication can mean the difference between
          a sale and someone choosing the competition. The sellers can talk
          with potential customers while they shop.
        </p>
        <p>
          They can instantly answer their pre-sales questions and guide the
          buyers to the products that make the most sense for them. This
          personalized attention creates a quality customer experience and
          improves the reputation of your marketplace.
        </p>
      </div>
      <div className="col-xs-12 col-md-6" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="img-stack">
          <img loading="lazy" className=" img-responsive img-rounded has-shadow" src={f4Svg} alt="Retreat Guru - conversation between 2 users" 
          style={{
          }} />
          {/* <img loading="lazy" width="800" height="533" className="img-stack-main img-responsive img-rounded" src="/images/use-cases/retreat-example.jpg" alt="hammock in a forest" /> */}
        </div>
      </div>
    </div>
  </div>
</section>
{/* 
<section className="mb-2xl">
  <div className="container">
    <div className="row">
      <div className="col-md-8 text-center col-md-push-2">
        <h3 className="heading-lg mb-lg">Let buyers talk directly with the sellers</h3>
        <p>
          Buyers might need to know more about a product before they feel confident
          in making a purchase. Emailing or calling sellers is disruptive to the
          shopping experience but when they can chat directly on the product page the
          buying process becomes frictionless.
        </p>
        <p>
          Buyers end up getting the assistance they need to choose a product
          that perfectly matches what they're looking for. In the past, they
          could be waiting hours or days to get in touch with sellers.
        </p>
      </div>
    </div>
  </div>
</section> */}

{/* <section className="mb-xl">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6 mb-xl">
        <div className="card card-flex h-full">
          <div className="card-body card-body-flex">
            <img loading="lazy" width="120" src="/images/logos/quote_logo_catawiki.png" alt="Catawiki"/>
            <p className="mb-0 pb-lg pt-lg">
              “We needed chat and didn't want to build it ourselves because it
              needs to be really great. The PTC team is laser-focused on chat,
              and we're focused on building a great auction marketplace.”
            </p>
            <div className="pack mt-auto">
              <div className="pack-item">
                <img loading="lazy" className="img-circle" width="42" height="42" src="/images/testemonials/dennis-pereira.jpg" alt="Dennis Pereira"/>
              </div>
              <div className="pack-item pack-item-grow">
                <strong>Dennis Pereira</strong>
                <div>Head of Product at Catawiki</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 mb-xl">
        <div className="card card-flex h-full">
          <div className="card-body card-body-flex">
            <img loading="lazy" width="120" src="/images/logos/quote_logo_retreatguru.png" alt="Retreat Guru"/>
            <p className="mb pb-lg pt-lg">
              “We were able to offload all messaging to PTC – simplifying our
              own development of an otherwise complex stack.”
            </p>
            <br/>
            <div className="pack mt-auto">
              <div className="pack-item">
                <img loading="lazy" className="img-circle" width="42" height="42" src="/images/testemonials/deryk-retreat-guru.jpg" alt="Deryk Wenaus"/>
              </div>
              <div className="pack-item pack-item-grow">
                <strong>Deryk Wenaus</strong>
                <div>CTO at Retreat Guru</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section className="mb-2xl">
  <div className="container">
    <div className="row usecases-row">
      <div className="col-md-8 text-center col-md-push-2">
        <h3 className="heading-lg mb-lg">Allow marketplace owners to monitor conversations in real-time</h3>
        <p>
          A smoothly running marketplace is essential to keeping buyers and
          sellers happy and loyal to your platform. If issues prevent
          transactions from completing or otherwise get in the way of normal
          operation, you could lose those users forever.
        </p>
        <p>
          Monitor the conversations between buyers and sellers to keep an eye on
          things. If someone is complaining about how slow the site is, you can
          proactively handle the problem before a buyer or seller gets around to
          submitting a ticket.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="mb-2xl">
  <div className="container">
    <div className="row row-flex">
      <div className="col-md-6">
        <h2 className="heading-lg mb-lg">Messaging features for marketplaces</h2>
        <p className="paragraph-responsive mb-xl">
          With PTC you can save months of work. Developers don't need to code
          everything from scratch, they can use the pre-built UI and messaging
          features.
        </p>
        <div className="accordion" id="accordion-uses" role="tablist" aria-multiselectable="true">
        <div className="panel accordion-item active">
          <div role="tab" className="accordion-header" id="headingEmailNotifications">
            <h4>
              <a role="button" data-toggle="collapse" data-parent="#accordion-uses" href="#emailNotifications" aria-expanded="true" aria-controls="emailNotifications">
                <span className="pack">
                  <span className="pack-item">
                    <svg className="accordion-icon" width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.25 7.87579H7.21875C6.34851 7.87579 5.51391 8.2215 4.89856 8.83685C4.2832 9.4522 3.9375 10.2868 3.9375 11.157V30.8445C3.9375 31.7148 4.2832 32.5494 4.89856 33.1647C5.51391 33.7801 6.34851 34.1258 7.21875 34.1258H34.6771C35.5473 34.1258 36.3819 33.7801 36.9973 33.1647C37.6126 32.5494 37.9583 31.7148 37.9583 30.8445V19.6063" stroke="#95A7B1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.1875 13.1265L21 22.314L28.1367 16.927" stroke="#95A7B1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M39.3258 10.5013C39.3258 12.651 37.5831 14.3937 35.4334 14.3937C33.2837 14.3937 31.541 12.651 31.541 10.5013C31.541 8.35163 33.2837 6.60895 35.4334 6.60895C37.5831 6.60895 39.3258 8.35163 39.3258 10.5013Z" fill="#95A7B1" stroke="#95A7B1" stroke-width="0.0820312"/>
                      <path d="M35.4375 15.7109C34.4081 15.7108 33.4018 15.4056 32.5459 14.8337C31.6899 14.2618 31.0228 13.4489 30.6289 12.4978C30.2349 11.5467 30.1318 10.5002 30.3327 9.49055C30.5335 8.4809 31.0292 7.55348 31.7571 6.82556C32.4851 6.09765 33.4125 5.60193 34.4221 5.4011C35.4318 5.20027 36.4783 5.30334 37.4294 5.69729C38.3804 6.09123 39.1933 6.75836 39.7653 7.61429C40.3372 8.47022 40.6424 9.47652 40.6424 10.5059C40.6414 11.886 40.0926 13.2093 39.1168 14.1852C38.1409 15.1611 36.8176 15.7098 35.4375 15.7109ZM35.4376 7.84406C34.9102 7.84323 34.3943 7.99889 33.9553 8.29134C33.5164 8.58378 33.174 8.99987 32.9716 9.48694C32.7691 9.97402 32.7158 10.5102 32.8182 11.0276C32.9206 11.5451 33.1741 12.0205 33.5468 12.3938C33.9195 12.767 34.3945 13.0213 34.9118 13.1246C35.4291 13.2278 35.9653 13.1752 36.4527 12.9735C36.9401 12.7719 37.3567 12.4302 37.6499 11.9917C37.943 11.5532 38.0995 11.0375 38.0995 10.5101C38.0995 9.80372 37.8192 9.12624 37.3201 8.62639C36.821 8.12653 36.144 7.84516 35.4376 7.84406Z" fill="#95A7B1" stroke="#95A7B1" stroke-width="0.0820312"/>
                    </svg>
                  </span>
                  <span className="pack-item">Email notifications users can reply to</span>
                </span>
              </a>
            </h4>
          </div>
          <div id="emailNotifications" className="collapse in" role="tabpanel" aria-labelledby="headingEmailNotifications">
            <div className="accordion-body">
              <p>
                User can reply to an email notification, and the message will land back in the
                chat closing the loop and making sure that the conversation is not lost. Users
                can reply directly or jump back in to your platform - either way, their response
                will safely reach its destination.
              </p>
            </div>
          </div>
        </div>
        <div className="panel accordion-item">
          <div role="tab" className="accordion-header" id="headingModeration">
            <h4>
              <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion-uses" href="#moderation" aria-expanded="false" aria-controls="moderation">
                <span className="pack">
                  <span className="pack-item">
                    <svg className="accordion-icon" width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 38.0621C30.4234 38.0621 38.0625 30.423 38.0625 20.9996C38.0625 11.5763 30.4234 3.93713 21 3.93713C11.5766 3.93713 3.9375 11.5763 3.9375 20.9996C3.9375 30.423 11.5766 38.0621 21 38.0621Z" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10"/>
                      <path d="M8.93481 8.9364L33.0651 33.0667L8.93481 8.9364Z" fill="#95A7B1"/>
                      <path d="M8.93481 8.9364L33.0651 33.0667" stroke="#95A7B1" stroke-width="2.625" stroke-miterlimit="10"/>
                    </svg>
                  </span>
                  <span className="pack-item">
                    Moderation: mask contact info and word blacklisting
                  </span>
                </span>
              </a>
            </h4>
          </div>
          <div id="moderation" className="collapse" role="tabpanel" aria-labelledby="headingModeration">
            <div className="accordion-body">
              <p>
                Prevent users from exchanging email addresses, phone numbers, and website addresses.
                You can configure exceptions in detail.
              </p>
              <p>
                Blacklist certain words such as profanity to ensure that chat messages remain
                clear of offensive words. To create blacklists you'll need to use the mask contact information feature.
              </p>
            </div>
          </div>
        </div>
        <div className="panel accordion-item">
          <div role="tab" className="accordion-header" id="headingTranslation">
            <h4>
              <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion-uses" href="#translation" aria-expanded="false" aria-controls="translation">
                <span className="pack">
                  <span className="pack-item">
                    <svg className="accordion-icon" width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.0754 9.18829C23.0754 9.18829 21.082 16.8992 16.3242 22.7234C11.5664 28.5477 6.5625 31.5008 6.5625 31.5008M3.9375 9.18829H27.5625H3.9375ZM15.75 5.25079V9.18829V5.25079ZM22.3125 36.7508L30.1875 18.3758L38.0625 36.7508H22.3125ZM24.7324 31.5008H35.6426H24.7324Z" stroke="#95A7B1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21 27.5617C21 27.5617 18.1289 25.3469 15.0937 21.4094C12.0586 17.4719 10.5 14.4367 10.5 14.4367" stroke="#95A7B1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span className="pack-item">
                    Real-time translation for international marketplaces
                  </span>
                </span>
              </a>
            </h4>
          </div>
          <div id="translation" className="collapse" role="tabpanel" aria-labelledby="headingTranslation">
            <div className="accordion-body">
              <p>
                Real-time message translation is a must-have feature for marketplaces that facilitate an
                international community. It reduces the barrier to entry for communicating with parties
                that don’t speak the same language, making the chat more frictionless. Otherwise, users
                would need to translate each of the messages themselves, something most of them probably
                won’t be keen on doing.
              </p>
            </div>
          </div>
        </div>
        <div className="panel accordion-item">
          <div role="tab" className="accordion-header" id="headingEvents">
            <h4>
              <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion-uses" href="#events" aria-expanded="false" aria-controls="events">
                <span className="pack">
                  <span className="pack-item">
                    <svg className="accordion-icon" width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.125 25.3075L6.34099 28.3517C4.89724 29.0079 4.89724 30.0825 6.34099 30.7388L18.4816 36.2759C19.8671 36.9067 22.1476 36.9067 23.5331 36.2759L35.6737 30.7388C37.1175 30.0825 37.1175 29.0079 35.6737 28.3517L29.1161 25.1959M35.6672 11.2908L23.415 5.70448C22.0869 5.09745 19.9131 5.09745 18.585 5.70448L6.34099 11.2908C4.89724 11.9471 4.89724 13.0208 6.34099 13.6771L18.4816 19.2142C19.8671 19.8458 22.1476 19.8458 23.5331 19.2142L35.6737 13.6771C37.1109 13.0208 37.1109 11.9462 35.6672 11.2908Z" stroke="#95A7B1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.125 16.7762L6.33281 19.8245C4.88906 20.4807 4.88906 21.5553 6.33281 22.2116L18.4734 27.7479C19.8589 28.3795 22.1394 28.3795 23.5249 27.7479L35.6655 22.2116C37.1175 21.5553 37.1175 20.4807 35.6737 19.8245L28.875 16.7762" stroke="#95A7B1" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span className="pack-item">
                    Pre-built UI you can easily customize
                  </span>
                </span>
              </a>
            </h4>
          </div>
          <div id="events" className="collapse" role="tabpanel" aria-labelledby="headingEvents">
            <div className="accordion-body">
              <p>
                The JavaScript SDK comes with a pre-built chat UI (inbox, chatbox and popup) that is highly
                customizable. The UI is backward-compatible so it will keep working on older devices even as we
                add new features and improvements. The pre-built UI saves you months of work in comparison
                to alternatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-xl">
        <a className="no-underline" href="/features"><strong>View all features</strong></a>
      </p>
      </div>
      <div className="col-md-6">
        <div className="row-image">
        <div className="img-stack" style={{display: 'block'}} data-cases-img="emailNotifications">
          <img loading="lazy" width="800" height="533" className="img-stack-main has-shadow img-responsive img-rounded" src={f6Svg} alt="Email Notifications" />
        </div>
        <div className="img-stack" style={{display: 'none'}} data-cases-img="moderation">
          <img loading="lazy" width="800" height="533" className="img-stack-main img-responsive has-shadow img-rounded" src="/images/features/analytics.png" alt="Moderation and Analytics" />
        </div>
        <div className="img-stack" style={{display: 'none'}} data-cases-img="translation">
          <img loading="lazy" style={{objectFit: 'contain', height: '550px'}} width="800" height="533" className="img-stack-main img-responsive has-shadow img-rounded" src="/resources/content/images/wordpress/2020/09/real-time-chat-message-translation.gif" alt="Message Translation" />
        </div>
        <div className="img-stack" style={{display: 'none'}} data-cases-img="events">
          {/* <video className="img-responsive" width="878" height="1024" autoplay muted playsinline loop>
            <source src="/images/features/theme_editor.mp4" type="video/mp4">
          </video> */}
        </div>
      </div>
      </div>
    </div>
  </div>
</section>

{/* <section className="mb-xl">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6 mb-xl">
        <div className="card card-flex h-full">
          <div className="card-body card-body-flex">
            <img loading="lazy" width="40" src="/images/logos/logo_nextcloset.png" alt="The Next Closet logo"/>
            <p className="mb-0 pb-lg pt-lg">
              “The load on our customer service reduced drastically and our conversion rate
              increased by allowing our users to communicate with each other.”
            </p>
            <div className="pack mt-auto">
              <div className="pack-item">
                <img loading="lazy" className="img-circle" width="42" height="42" src="/images/testemonials/sarah-bleiker.jpg" alt="Sarah Bleiker"/>
              </div>
              <div className="pack-item pack-item-grow">
                <strong>Sarah Bleiker</strong>
                <div>Product Manager at The Next Closet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 mb-xl">
        <div className="card card-flex h-full">
          <div className="card-body card-body-flex">
            <img loading="lazy" width="120" src="/images/logos/quote_logo_kaddy.png" alt="Retreat Guru"/>
            <p className="mb pb-lg pt-lg">
            “We chose PTC because it had email notifications built-in, apart from plug-and-play chat UI.”
            </p>
            <br/>
            <div className="pack mt-auto">
              <div className="pack-item">
                <img loading="lazy" className="img-circle" width="42" height="42" src="/images/testemonials/matias-kaddy.jpg" alt="Matias Anaya"/>
              </div>
              <div className="pack-item pack-item-grow">
                <strong>Matias Anaya</strong>
                <div>Software Engineer at Kaddy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
</>
  )
}

export default MarketPlaces