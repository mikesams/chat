import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [showBar, setBar] = useState(false);
    const navigate = useNavigate();
  return (
    <nav className="masthead js-masthead">
    <div className="container">
      <a className="masthead-brand" onClick={() => navigate('/home')}>
        <img style={{width:'200px', marginTop: '-15px', marginRight: '20px'}} src="/assets/img/logo.jpeg" alt="ptc" />
      </a>
      <button type="button" className="masthead-toggle collapse-toggle" onClick={() => setBar(!showBar)}>
        <span className="sr-only">Toggle navigation</span>
        <span className="masthead-toggle-icon">
          <span className="masthead-toggle-bar"></span>
          <span className="masthead-toggle-bar"></span>
          <span className="masthead-toggle-bar"></span>
        </span>
      </button>
      {
        showBar && (
      <div className=" masthead-collapse" id="mastheadMenu">
        <div className="masthead-content">
          <ul className="masthead-nav">  
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" role="button">Use cases <span className="caret"></span></a>
              <ul className="dropdown-menu masthead-mega-dropdown" aria-label="submenu">
                <li><a onClick={() => navigate('market-places')}>Marketplaces</a></li>
                <li><a onClick={() => navigate('market-places')}>Education</a></li>
                <li><a onClick={() => navigate('virtual-events')}>Virtual events</a></li>
                <li><a onClick={() => navigate('market-places')}>Social & communities</a></li>
                <li><a onClick={() => navigate('health-care')}>Healthcare</a></li>
                <li><a onClick={() => navigate('market-places')}>On-demand services</a></li>
                <li><a onClick={() => navigate('job-hiring')}>Hiring & job platforms</a></li>
                <li><a onClick={() => navigate('market-places')}>Remote work</a></li>
                <li><a onClick={() => navigate('market-places')}>Other use cases</a></li>
              </ul>  
            </li>           
            <li><a onClick={() => navigate('/features')}>Features</a></li>
            <li className="dropdown">
              <a href="/demo/" className="dropdown-toggle" role="button">Demo <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a onClick={() => navigate('/demo')}>Feature Explorer</a></li>
                <li><a onClick={() => navigate('/contact')}>Request Live Demo</a></li>
              </ul>
            </li>
            {/* <li className="dropdown">
              <a href="#" className="dropdown-toggle" role="button">Developers <span className="caret"></span></a>
              <ul className="dropdown-menu" aria-label="submenu">
                <li><a href="/docs/">Documentation</a></li>
                <li><a href="/docs/Getting_Started/">Getting Started</a></li>
                <li><a href="/resources/article-category/tutorials/">Tutorials</a></li>
                <li><a target="_blank" href="https://github.com/ptc/ptc-examples">Code Examples</a></li>
                <li><a className="announcekit-widget" href="https://changelog.ptc.com">Changelog</a></li>
                <li><a href="/resources/view-all">FAQs</a></li>
                <li><a href="/jobs">We're hiring!</a></li>
              </ul>  
            </li> */}
            <li><a onClick={() => navigate('/pricing')}>Pricing</a></li>
          </ul>
          <ul className="masthead-meta">  
            <li className="masthead-btn"><a href='/auth/signup' className="btn btn-blue">Try for free</a></li>
            <li className="masthead-btn"><a href='/auth/login' className="btn btn-white">Sign in</a></li>
          </ul>
        </div>
      </div>

        )
      }
      <div className="collapse masthead-collapse" id="mastheadMenu">
        <div className="masthead-content">
          <ul className="masthead-nav">  
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" role="button">Use cases <span className="caret"></span></a>
              <ul className="dropdown-menu masthead-mega-dropdown" aria-label="submenu">
                <li><a onClick={() => navigate('market-places')}>Marketplaces</a></li>
                <li><a onClick={() => navigate('education')}>Education</a></li>
                <li><a onClick={() => navigate('virtual-events')}>Virtual events</a></li>
                <li><a onClick={() => navigate('social-activities')}>Social & communities</a></li>
                <li><a onClick={() => navigate('health-care')}>Healthcare</a></li>
                {/* <li><a onClick={() => navigate('market-places')}>On-demand services</a></li> */}
                <li><a onClick={() => navigate('job-hiring')}>Hiring & job platforms</a></li>
                {/* <li><a onClick={() => navigate('market-places')}>Remote work</a></li> */}
                {/* <li><a onClick={() => navigate('market-places')}>Other use cases</a></li> */}
              </ul>  
            </li>           
            <li><a onClick={() => navigate('/features')}>Features</a></li>
            <li><a onClick={() => navigate('/blog')}>Blog</a></li>
            <li className="dropdown">
              <a href="/demo/" className="dropdown-toggle" role="button">Demo <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a onClick={() => navigate('/demo')}>Feature Explorer</a></li>
                <li><a onClick={() => navigate('/contact')}>Request Live Demo</a></li>
              </ul>
            </li>
            {/* <li className="dropdown">
              <a href="#" className="dropdown-toggle" role="button">Developers <span className="caret"></span></a>
              <ul className="dropdown-menu" aria-label="submenu">
                <li><a href="/docs/">Documentation</a></li>
                <li><a href="/docs/Getting_Started/">Getting Started</a></li>
                <li><a href="/resources/article-category/tutorials/">Tutorials</a></li>
                <li><a target="_blank" href="https://github.com/ptc/ptc-examples">Code Examples</a></li>
                <li><a className="announcekit-widget" href="https://changelog.ptc.com">Changelog</a></li>
                <li><a href="/resources/view-all">FAQs</a></li>
                <li><a href="/jobs">We're hiring!</a></li>
              </ul>  
            </li> */}
            <li><a onClick={() => navigate('/pricing')}>Pricing</a></li>
          </ul>
          <ul className="masthead-meta">  
            <li className="masthead-btn"><a href='/auth/signup' className="btn btn-blue">Try for free</a></li>
            <li className="masthead-btn"><a href='/auth/login' className="btn btn-white">Sign in</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header