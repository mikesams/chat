import React, { useState } from 'react'
import './Pricing.css'

const tabs = [
    'Basic','Growth','Enterprise'
]

const Pricing = () => {

    const [tab, setTab] = useState('Basic');

    const [state, setState] = useState({
        v1: 0,
        v2: 0
    })
    return (
        <>
            <section id="header-noimage" className="main-header-noimage header-subpage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Choose the ideal plan for yourself.</h1>
                            <p>
                            We've got you covered from the start to the end.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <div className="container container-xl mt-xl">
                <div className="pack pack-large pricing-controls js-price-switcher">
                    <div className="pack-item pack">
                        <div className="pack-item">
                            Prices in
                        </div>
                        {/* <div className="pack-item">
                            <form className="toggles">
                                <label className="toggles-item" for="usd-1">
                                    <input type="radio" name="currency" value="usd" id="usd-1" checked />
                                    <span>$</span>
                                </label>
                                <label className="toggles-item" for="eur-1">
                                    <input type="radio" name="currency" value="eur" id="eur-1" />
                                    <span>€</span>
                                </label>
                            </form>
                        </div> */}
                    </div>
                    {/* <div className="pack-item pack-item-grow pack">
                        <div className="pack-item">
                            Billed
                        </div>
                        <div className="pack-item">
                            <form className="toggles">
                                <label className="toggles-item" for="month-1">
                                    <input type="radio" name="interval" value="month" id="month-1" checked />
                                    <span>Monthly</span>
                                </label>
                                <label className="toggles-item" for="year-1">
                                    <input type="radio" name="interval" value="year" id="year-1" />
                                    <span>Annual (Save ~15%)</span>
                                </label>
                            </form>
                        </div>
                    </div> */}
                    <div className="pack-item">
                        <a className="btn" href="#calculator">Pricing Calculator &darr;</a>
                    </div>
                </div>
                <div className="pricing-tabs">
                    {
                        tabs.map(t => (
                            <button key={t} className={`pricing-tab js-plan-switch ${tab === t ? 'is-active' : ''}`}
                            onClick={() => setTab(t)}>{t}</button>
                        ))
                    }
                </div>
                <div className="pricing-table show-mobile">
                    <div className="pricing-table__row pricing-table__head">
                        <div className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--header"></div>
                        {
                            tab === 'Basic' && (
                        <div className="pricing-table__cell pricing-table__cell--header js-pricing-content is-active" data-pricing-type="basic">
                            <div className="pricing-table__type">Basic</div>
                            <div className="pricing-table__price">
                                <span className="text-blue-500">
                                    <span className="js-price is-active" data-currency="usd">
                                        <strong className="js-price-billed is-active" data-billed="month">$99</strong>
                                        <span className="js-price-billed" data-billed="year"><strike>$99</strike> <strong>$99</strong></span>
                                    </span>
                                    <span className="js-price" data-currency="eur">
                                        <strong className="js-price-billed is-active" data-billed="month">99</strong>
                                        <span className="js-price-billed" data-billed="year"><strike>99</strike> <strong>99</strong></span>
                                    </span>
                                </span>
                                / month
                            </div>
                            <div className="js-price" data-currency="usd"><small className="js-price-billed" data-billed="year">$2868 Annually</small></div>
                            <div className="js-price" data-currency="eur"><small className="js-price-billed" data-billed="year">€2508 Annually</small></div>
                            <a className="pricing-table__btn btn btn-blue btn-narrow js-signup" data-track="TRY_FOR_FREE_STANDARD" href="/dashboard/signup/standard">Try for free</a>

                        </div>

                            )
                        }
                        {
                            tab === 'Growth' && (
                        <div className="pricing-table__cell pricing-table__cell--header js-pricing-content is-active" data-pricing-type="growth">
                            <div className="pricing-table__type">Growth</div>
                            <div className="pricing-table__price">
                                <span>
                                    <span className="js-price is-active" data-currency="usd">
                                        <strong className="js-price-billed is-active" data-billed="month">$199</strong>
                                        <span className="js-price-billed" data-billed="year"><strike>$199</strike> <strong>$199</strong></span>
                                    </span>
                                    <span className="js-price" data-currency="eur">
                                        <strong className="js-price-billed is-active" data-billed="month">199</strong>
                                        <span className="js-price-billed" data-billed="year"><strike>199</strike> <strong>199</strong></span>
                                    </span>
                                </span>
                                / month
                            </div>
                            <div className="js-price" data-currency="usd"><small className="js-price-billed" data-billed="year">$5748 Annually</small></div>
                            <div className="js-price" data-currency="eur"><small className="js-price-billed" data-billed="year">€5148 Annually</small></div>
                            <a className="pricing-table__btn btn btn-blue btn-narrow btn-white js-signup" data-track="TRY_FOR_FREE_PREMIUM" href="/dashboard/signup/premium">Try for free</a>
                        </div>
                            )
                        }
                         {
                            tab === 'Enterprise' && (
                        <div className="pricing-table__cell pricing-table__cell--header js-pricing-content is-active" data-pricing-type="enterprise">
                            <div className="pricing-table__type">Enterprise</div>
                            <div className="pricing-table__price">Customized</div>
                            <a className="pricing-table__btn btn btn-blue btn-narrow btn-blue-light" data-track="TRY_FOR_FREE_ENTERPRISE" href="/contact">Get in touch</a>
                        </div>

                            )
                        }
                    </div>
                    <div className="pricing-table__body">
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-overview" role="button" aria-expanded="true" aria-controls="section-overview">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Overview            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse in" id="section-overview">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Monthly Active Users (MAU)              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <strong className="text-logo">Includes 10,000 MAU </strong><div><small>Each additional MAU <span className="js-price is-active" data-currency="usd">$0.04</span><span className="js-price" data-currency="eur">€0.035</span></small></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <strong className="text-logo">Includes 25,000 MAU </strong><div><small>Each additional MAU <span className="js-price is-active" data-currency="usd">$0.03</span><span className="js-price" data-currency="eur">€0.025</span></small></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <strong className="text-logo">Custom</strong>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Unlimited conversations and messages              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Group chats <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="ptc &quot;Super Group Chats&quot; support 1000s of users per chat. Regular chats support up to 40 participants on all plans. <a href='/docs/Features/Group_Chats/Super_Group_Chats/'>See the docs for more info</a>."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Up to 30 participants              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Up to 300 participants              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Custom              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Support              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Via chat during office hours              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Priority chat & email              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Priority phone, chat & email              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Customizable UI              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Chatbot interface              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Email, SMS, and push notifications <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="SMS messages are charged separately"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Reply-via-email directly (sync to chat)              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Analytics and conversation monitoring              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        File transfers & location sharing              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Mask contact information <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Stop your users from sharing contact information such as email addresses & phone numbers"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Message retention              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        6 months              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        12 months              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Custom              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Webhooks <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Webhooks can be used for advanced integrations to expand on the base functionality provided by ptc, for example they can be used to create chatbots"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Custom (HTML & CSS) notification emails              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Custom email sender domain              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Real-time message translation              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        In-conversation message search              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Domain masking <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Route all ptc traffic through a subdomain under your control "></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Uptime & support guarantees (SLA)              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Guaranteed performance under high loads              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Guaranteed at-rest encryption              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Priority access to our roadmap              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Designated Solutions Engineer <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="For assistance with on-boarding, optimization, and technical support, our Enterprise customers get access to a named Solutions Engineer."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        On-Premise / Private Cloud              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Dedicated Infrastructure              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-general" role="button" aria-expanded="false" aria-controls="section-general">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        General            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-general">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Activity dashboard <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="View usage stats and ongoing conversations happening within your platform"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        REST API              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Separate development & production environments  <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Your account comes with two ptc apps: One for development and testing, and one for production. The development app has no limits and is free forever, so you can take the time you need to tune ptc to your wishes before you publish it to your users."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Team size              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        1 member              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        3 members              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Custom              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Priority access to our roadmap              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-chat-ui" role="button" aria-expanded="false" aria-controls="section-chat-ui">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Full-featured, pre-built Chat UI            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-chat-ui">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        File sharing              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Unlimited Storage <div><small>100mb max file size</small></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Unlimited Storage <div><small>100mb max file size</small></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Unlimited Storage <div><small>Custom max file size</small></div>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Location sharing              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Real-time message translation              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        UI localization (34+ languages)              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Customizable design              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Mask contact information <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Stop your users from sharing contact information such as email addresses & phone numbers"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Word blacklists <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Blacklist certain words such as profanity to ensure that chat messages remain clear of offensive words"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Emojis              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        In-conversation search              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Text formatting              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Typing indicators              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Read indicators              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Chatbot interface              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-notifications" role="button" aria-expanded="false" aria-controls="section-notifications">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Notifications            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-notifications">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Email              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Reply-to email <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="If a user is sent a message while offline, ptc sends an email or SMS (or both, depending on your configuration). Our battle-tested infrastructure ensures direct and speedy delivery. Users can reply to the mail directly or jump back in to your platform - either way, their response will safely reach its destination."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Custom sender domain <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="White label your chat further by sending email notifications from your own custom domain name"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        SMS              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Push              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-support" role="button" aria-expanded="false" aria-controls="section-support">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Support            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-support">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Chat              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Office hours              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Office hours (priority)              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Office hours (priority)              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Email              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Office hours              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Office hours (priority)              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Office hours (priority)              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Phone              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Office hours              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Custom & SLA              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Code Review <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="We'll perform a 1-2 hour code review with your engineers to ensure you get the most out of ptc."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Designated Solutions Engineer <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="For assistance with on-boarding, optimization, and technical support, our Enterprise customers get access to a named Solutions Engineer."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-data-security" role="button" aria-expanded="false" aria-controls="section-data-security">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Data, Security & Availability            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-data-security">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        GDPR compliance              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Data import & export API              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Uptime SLA              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Contractually guaranteed at-rest encryption              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        On-Premise / Private Cloud              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Dedicated Infrastructure              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="pricing-table show-desk">
                    <div className="pricing-table__row pricing-table__head">
                        <div className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--header"></div>
                        <div className="pricing-table__cell pricing-table__cell--header js-pricing-content is-active" data-pricing-type="basic">
                            <div className="pricing-table__type">Basic</div>
                            <div className="pricing-table__price">
                                <span className="text-blue-500">
                                    <span className="js-price is-active" data-currency="usd">
                                        <strong className="js-price-billed is-active" data-billed="month">$99</strong>
                                        <span className="js-price-billed" data-billed="year"><strike>$99</strike> <strong>$99</strong></span>
                                    </span>
                                    <span className="js-price" data-currency="eur">
                                        <strong className="js-price-billed is-active" data-billed="month">99</strong>
                                        <span className="js-price-billed" data-billed="year"><strike>99</strike> <strong>99</strong></span>
                                    </span>
                                </span>
                                / month
                            </div>
                            <div className="js-price" data-currency="usd"><small className="js-price-billed" data-billed="year">$2868 Annually</small></div>
                            <div className="js-price" data-currency="eur"><small className="js-price-billed" data-billed="year">€2508 Annually</small></div>
                            <a className="pricing-table__btn btn btn-blue btn-narrow js-signup" data-track="TRY_FOR_FREE_STANDARD" href="/dashboard/signup/standard">Try for free</a>

                        </div>
                        <div className="pricing-table__cell pricing-table__cell--header js-pricing-content" data-pricing-type="growth">
                            <div className="pricing-table__type">Growth</div>
                            <div className="pricing-table__price">
                                <span>
                                    <span className="js-price is-active" data-currency="usd">
                                        <strong className="js-price-billed is-active" data-billed="month">$199</strong>
                                        <span className="js-price-billed" data-billed="year"><strike>$199</strike> <strong>$199</strong></span>
                                    </span>
                                    <span className="js-price" data-currency="eur">
                                        <strong className="js-price-billed is-active" data-billed="month">199</strong>
                                        <span className="js-price-billed" data-billed="year"><strike>199</strike> <strong>199</strong></span>
                                    </span>
                                </span>
                                / month
                            </div>
                            <div className="js-price" data-currency="usd"><small className="js-price-billed" data-billed="year">$5748 Annually</small></div>
                            <div className="js-price" data-currency="eur"><small className="js-price-billed" data-billed="year">€5148 Annually</small></div>
                            <a className="pricing-table__btn btn btn-blue btn-narrow btn-white js-signup" data-track="TRY_FOR_FREE_PREMIUM" href="/dashboard/signup/premium">Try for free</a>
                        </div>
                        <div className="pricing-table__cell pricing-table__cell--header js-pricing-content" data-pricing-type="enterprise">
                            <div className="pricing-table__type">Enterprise</div>
                            <div className="pricing-table__price">Customized</div>
                            <a className="pricing-table__btn btn btn-blue btn-narrow btn-blue-light" data-track="TRY_FOR_FREE_ENTERPRISE" href="/contact">Get in touch</a>
                        </div>
                    </div>
                    <div className="pricing-table__body">
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-overview" role="button" aria-expanded="true" aria-controls="section-overview">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Overview            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse in" id="section-overview">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Monthly Active Users (MAU)              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <strong className="text-logo">Includes 10,000 MAU </strong><div><small>Each additional MAU <span className="js-price is-active" data-currency="usd">$0.04</span><span className="js-price" data-currency="eur">€0.035</span></small></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <strong className="text-logo">Includes 25,000 MAU </strong><div><small>Each additional MAU <span className="js-price is-active" data-currency="usd">$0.03</span><span className="js-price" data-currency="eur">€0.025</span></small></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <strong className="text-logo">Custom</strong>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Unlimited conversations and messages              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Group chats <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="ptc &quot;Super Group Chats&quot; support 1000s of users per chat. Regular chats support up to 40 participants on all plans. <a href='/docs/Features/Group_Chats/Super_Group_Chats/'>See the docs for more info</a>."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Up to 30 participants              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Up to 300 participants              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Custom              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Support              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Via chat during office hours              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Priority chat & email              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Priority phone, chat & email              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Customizable UI              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Chatbot interface              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Email, SMS, and push notifications <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="SMS messages are charged separately"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Reply-via-email directly (sync to chat)              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Analytics and conversation monitoring              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        File transfers & location sharing              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Mask contact information <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Stop your users from sharing contact information such as email addresses & phone numbers"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Message retention              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        6 months              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        12 months              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Custom              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Webhooks <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Webhooks can be used for advanced integrations to expand on the base functionality provided by ptc, for example they can be used to create chatbots"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Custom (HTML & CSS) notification emails              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Custom email sender domain              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Real-time message translation              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        In-conversation message search              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Domain masking <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Route all ptc traffic through a subdomain under your control "></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Uptime & support guarantees (SLA)              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Guaranteed performance under high loads              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Guaranteed at-rest encryption              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Priority access to our roadmap              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Designated Solutions Engineer <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="For assistance with on-boarding, optimization, and technical support, our Enterprise customers get access to a named Solutions Engineer."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        On-Premise / Private Cloud              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Dedicated Infrastructure              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-general" role="button" aria-expanded="false" aria-controls="section-general">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        General            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-general">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Activity dashboard <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="View usage stats and ongoing conversations happening within your platform"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        REST API              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Separate development & production environments  <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Your account comes with two ptc apps: One for development and testing, and one for production. The development app has no limits and is free forever, so you can take the time you need to tune ptc to your wishes before you publish it to your users."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Team size              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        1 member              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        3 members              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Custom              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Priority access to our roadmap              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-chat-ui" role="button" aria-expanded="false" aria-controls="section-chat-ui">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Full-featured, pre-built Chat UI            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-chat-ui">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        File sharing              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Unlimited Storage <div><small>100mb max file size</small></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Unlimited Storage <div><small>100mb max file size</small></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Unlimited Storage <div><small>Custom max file size</small></div>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Location sharing              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Real-time message translation              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        UI localization (34+ languages)              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Customizable design              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Mask contact information <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Stop your users from sharing contact information such as email addresses & phone numbers"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Word blacklists <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="Blacklist certain words such as profanity to ensure that chat messages remain clear of offensive words"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Emojis              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        In-conversation search              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Text formatting              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Typing indicators              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Read indicators              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Chatbot interface              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-notifications" role="button" aria-expanded="false" aria-controls="section-notifications">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Notifications            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-notifications">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Email              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Reply-to email <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="If a user is sent a message while offline, ptc sends an email or SMS (or both, depending on your configuration). Our battle-tested infrastructure ensures direct and speedy delivery. Users can reply to the mail directly or jump back in to your platform - either way, their response will safely reach its destination."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Custom sender domain <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="White label your chat further by sending email notifications from your own custom domain name"></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        SMS              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Push              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-support" role="button" aria-expanded="false" aria-controls="section-support">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Support            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-support">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Chat              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Office hours              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Office hours (priority)              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Office hours (priority)              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Email              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        Office hours              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Office hours (priority)              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Office hours (priority)              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Phone              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        Office hours              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        Custom & SLA              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Code Review <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="We'll perform a 1-2 hour code review with your engineers to ensure you get the most out of ptc."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        <div>Designated Solutions Engineer <i className="fa ion-information-circled text-grey-500" data-toggle="tooltip" data-html="true" title="For assistance with on-boarding, optimization, and technical support, our Enterprise customers get access to a named Solutions Engineer."></i></div>              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-table__section">
                            <div className="pricing-table__row">
                                <h4 className="pricing-table__cell pricing-table__cell--desc pricing-table__cell--toggle">
                                    <a data-toggle="collapse" href="#section-data-security" role="button" aria-expanded="false" aria-controls="section-data-security">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.90625 4.81274L14.0938 11.0002L7.90625 17.1877" stroke="#95A7B1" stroke-width="2.0625" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Data, Security & Availability            </a>
                                </h4>
                                <span className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="growth"></span>
                                <span className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise"></span>
                            </div>
                            <div className="pricing-table__section-body collapse " id="section-data-security">
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        GDPR compliance              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Data import & export API              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Uptime SLA              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Contractually guaranteed at-rest encryption              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        On-Premise / Private Cloud              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                                <div className="pricing-table__row">
                                    <div className="pricing-table__cell pricing-table__cell--desc">
                                        Dedicated Infrastructure              </div>
                                    <div className="pricing-table__cell js-pricing-content is-active" data-pricing-type="basic">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="growth">
                                        —              </div>
                                    <div className="pricing-table__cell js-pricing-content" data-pricing-type="enterprise">
                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M11.5 2.06299C6.57191 2.06299 2.5625 6.0724 2.5625 11.0005C2.5625 15.9286 6.57191 19.938 11.5 19.938C16.4281 19.938 20.4375 15.9286 20.4375 11.0005C20.4375 6.0724 16.4281 2.06299 11.5 2.06299ZM16.1514 8.00514L10.3764 14.8801C10.313 14.9556 10.2342 15.0165 10.1452 15.0589C10.0563 15.1012 9.95925 15.1239 9.86074 15.1255H9.84914C9.75278 15.1255 9.6575 15.1052 9.56948 15.0659C9.48147 15.0267 9.40269 14.9694 9.33824 14.8978L6.86324 12.1478C6.80039 12.0811 6.75149 12.0025 6.71943 11.9167C6.68737 11.8309 6.67279 11.7395 6.67655 11.6479C6.6803 11.5564 6.70232 11.4665 6.74131 11.3836C6.7803 11.3007 6.83547 11.2264 6.90358 11.1651C6.97169 11.1038 7.05136 11.0567 7.13791 11.0267C7.22447 10.9966 7.31616 10.9842 7.4076 10.99C7.49904 10.9959 7.58838 11.02 7.67037 11.0609C7.75236 11.1018 7.82534 11.1587 7.88504 11.2282L9.83109 13.3904L15.0986 7.12084C15.2168 6.98423 15.384 6.89961 15.564 6.88526C15.7441 6.87092 15.9225 6.928 16.0608 7.04417C16.1991 7.16034 16.2861 7.32627 16.3031 7.50609C16.32 7.68591 16.2655 7.86517 16.1514 8.00514V8.00514Z' fill='#1E60E1' />
                                        </svg>              </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="heading-2 mt-2xl mb" id="calculator">What’s the best plan for me?</h2>
                <div className="card">
                    <div className="box box--white">
                        <div className="row">
                            <div className="col-md-6">
                                <form className="js-price-calculator">
                                    <div className="form-group">
                                        <label for="calculatorUsers">How many active users do you have per month?</label>
                                        <input className="form-control form-control-lg max-w-150" type="number" onChange={(e)=> setState({...state, v1: e.target.value})} name="calculatorUsers" />
                                    </div>
                                    <div className="form-group">
                                        <label for="calculatorGroupChatUsers">If you have group chats, what is the maximum number of users in a room?</label>
                                        <input className="form-control form-control-lg max-w-100" type="number" value="15" name="calculatorGroupChatUsers" />
                                    </div>

                                    <h3 className="heading-3 mb-lg mt-xl">Additional Features</h3>
                                    <div className="form-group">
                                        <label className="switch">
                                            <input type="checkbox" name="calculatorEmailSenderDomain" />
                                            <span className="switch__toggle"></span>
                                            Custom email sender domain
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="switch">
                                            <input type="checkbox" name="calculatorTranslation" />
                                            <span className="switch__toggle"></span>
                                            Real-time message translation
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="switch">
                                            <input type="checkbox" name="calculatorSLA" />
                                            <span className="switch__toggle"></span>
                                            Uptime & Support SLA
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="box pricing-calculator">=
                                    <div className="js-base-prices" style={{ display: 'none' }}>
                                        <span data-currency="usd" data-plan="basic">
                                            <span data-billed="month">279</span>
                                            <span data-billed="year">239</span>
                                            <span data-overrage-rate>0.04</span>
                                        </span>
                                        <span data-currency="eur" data-plan="basic">
                                            <span data-billed="month">249</span>
                                            <span data-billed="year">209</span>
                                            <span data-overrage-rate>0.035</span>
                                        </span>
                                        <span data-currency="usd" data-plan="growth">
                                            <span data-billed="month">569</span>
                                            <span data-billed="year">499</span>
                                            <span data-overrage-rate>0.03</span>
                                        </span>
                                        <span data-currency="eur" data-plan="growth">
                                            <span data-billed="month">499</span>
                                            <span data-billed="year">479</span>
                                            <span data-overrage-rate>0.025</span>
                                        </span>
                                    </div>
                                    <h5 className="mini-heading text-center">Recommended Plan</h5>
                                    <div className="pricing-calculator__plan text-center mt-sm mb-lg">
                                        {
                                            state?.v1 <= 10000 && (
                                        <div className="js-calculated-plan is-active" data-plan="basic">
                                            <strong className="text-logo">Basic</strong>
                                            -
                                            <span>
                                                <span>
                                                    <span className="js-price is-active" data-currency="usd">
                                                        <span className="js-price-billed is-active" data-billed="month">$99</span>
                                                        <span className="js-price-billed" data-billed="year"><span>$99</span></span>
                                                    </span>
                                                    {/* <span className="js-price" data-currency="eur">
                                                        <span className="js-price-billed is-active" data-billed="month">€249</span>
                                                        <span className="js-price-billed" data-billed="year"><strike>€249</strike> <span>€209</span></span>
                                                    </span> */}
                                                </span>
                                                / month
                                            </span>
                                        </div>
                                            )
                                        }
                                        {
                                            (state?.v1 > 10000 && state.v1 <= 25000) && (
                                        <div className="js-calculated-plan is-active" data-plan="growth">
                                            <strong className="text-blue-500">Growth</strong>
                                            -
                                            <span>
                                                <span className="js-price is-active" data-currency="usd">
                                                    <span className="js-price-billed is-active" data-billed="month">$199</span>
                                                    <span className="js-price-billed" data-billed="year"> <span>$199</span></span>
                                                </span>
                                                {/* <span className="js-price" data-currency="eur">
                                                    <span className="js-price-billed is-active" data-billed="month">€499</span>
                                                    <span className="js-price-billed" data-billed="year"><strike>€499</strike> <span>€479</span></span>
                                                </span> */}
                                            </span>
                                            / month
                                        </div>
                                            )
                                        }
                                        {
                                            state?.v1 > 25000 && (
                                        <div className="text-blue-800 js-calculated-plan is-active" data-plan="enterprise">
                                            <strong>Enterprise</strong>
                                        </div>
                                            )
                                        }
                                    </div>
                                    {
                                            state?.v1 > 25000 && (
                                    <div className="js-plan-content text-center" data-plan-type="enterprise">
                                        <p className="mb-sm">100,000+ MAU</p>
                                        <p className="mb-sm">Custom amount of users per chat room</p>
                                        <p className="mb-sm">Priority phone, chat & email</p>
                                        <p>Uptime & support guarantees (SLA)</p>
                                    </div>
                                            )}
                                    <table className="js-plan-content is-active pricing-calculator__table" data-plan-type="other">
                                        <tr>
                                            <td>
                                                {
                                                    tab === 'Basic' && (
                                                <div className="js-calculated-plan is-active" data-plan="basic">
                                                    10,000 included MAU
                                                </div>

                                                    )
                                                }
                                                 {
                                                    tab === 'Growth' && (
                                                        <div className="js-calculated-plan is-active" data-plan="growth">
                                                        25,000 included MAU
                                                    </div>

                                                    )
                                                }
                                                 {
                                                    tab === 'Enterprise' && (
                                                        <div className="js-calculated-plan is-active" data-plan="enterprise">
                                                        100,000+ MAU
                                                    </div>

                                                    )
                                                }
                                                
                                               
                                            </td>
                                            <td><strong>Included</strong></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="js-additional-users">0</span>
                                                additional at
                                                <span className="js-currency-symbol">$</span><span className="js-additional-rate">0</span>
                                                per user
                                            </td>
                                            <td>
                                                <strong>
                                                    <span className="js-currency-symbol">$</span><span className="js-additional-cost">0</span>
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="js-calculated-plan is-active" data-plan="basic">
                                                    Up to 20 users per chat room
                                                </div>
                                                <div className="js-calculated-plan" data-plan="growth">
                                                    Up to 40 users per chat room
                                                </div>
                                                <div className="js-calculated-plan" data-plan="enterprise">
                                                    1,000+ users per chat room
                                                </div>
                                            </td>
                                            <td><strong>Included</strong></td>
                                        </tr>
                                    </table>
                                    <div className="js-plan-content pricing-calculator__total text-center mb-lg mt-lg" data-plan-type="other">
                                        <strong className="text-logo">
                                            Total:
                                            <span className="js-currency-symbol">$</span><span className="js-calculated-total">279</span>
                                        </strong>
                                        / month
                                    </div>

                                    <div className="text-center mt-lg">
                                        <div className="js-calculated-plan is-active" data-plan="basic"><a className="btn btn-blue js-signup" data-track="TRY_FOR_FREE_STANDARD" href="/dashboard/signup/standard">Try for free</a></div>
                                        <div className="js-calculated-plan" data-plan="growth"><a className="btn btn-blue js-signup" data-track="TRY_FOR_FREE_PREMIUM" href="/dashboard/signup/premium">Try for free</a></div>
                                        <div className="js-calculated-plan" data-plan="enterprise"><a className="btn btn-blue" data-track="TRY_FOR_FREE_ENTERPRISE" href="/contact">Get in touch</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="heading-2 mt-2xl mb-lg">FAQs</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="heading-3 mb"> Is it possible to show the user's avatar or profile picture next to their chat messages?</h3>
                        <p className="mb-large">You can do this if you are on PlugtoChat’s Standard plan or greater. Go to your dashboard and click the role (formerly called configuration) heading.</p>
                        <h3 className="heading-3 mb">How come some Javascript SDK calls return fields with [suppressed]?</h3>
                        <p className="mb-large">We respect the privacy of our users and disallow you to access sensitive data through the Javascript SDK. You can instead make use of our REST API to access this data.</p>
                        <h3 className="heading-3 mb">Can I copy or export my data?</h3>
                        <p className="mb-large">Yes, you can easily export your data using our REST API or by contacting us for a copy.</p>
                        <h3 className="heading-3 mb">What happens when someone (inadvertently or on purpose) strips the content from the notification email (leaving it blank) and then replies anyway?</h3>
                        <p className="mb-large">Email notifications are sent from a unique email address that contains an authentication code. Anything user email to that address will be included in that conversation. We have also implemented some heuristics that help avoid posting a message that contains a signature or quoted-reply text before the message is posted.</p>

                        <h3 className="heading-3 mb">Would it be possible for our users to create their own (group) chats?</h3>
                        <p className="mb-large">A.Our chat engine will allow you to build this and then use it. Using the REST API or the JS SDK, you can create chat rooms programmatically. In other words, you can add a button to create a group chat with particular people, use our API to create the chat, and then drop the current user into the chat.</p>

                        <h3 className="heading-3 mb">How does PlugtoChat determine whether to send an sms/email notification to a user?</h3>
                        <p className="mb-large">The PlugtoChat system includes a heuristic that ensures that people who miss messages are notified quickly, without feeling like they are being A.spammed. An email or SMS notification will not be sent when someone is actively looking at a chat. After a user has not looked at a specific chat for a certain period of time, PlugtoChat sends a notification to all users that missed them. In this notification, all messages will be grouped into a single email to keep your user's mailbox from exploding.</p>

                        <h3 className="heading-3 mb"> How can I integrate PlugtoChat with Facebook Messenger, WhatsApp, Telegram, ...?</h3>
                        <p className="mb-large">A.Currently, PlugtoChat does not offer third-party integrations. With a little programming, it's possible to create a custom integration.
Using PlugtoChat webhooks, you can be notified when a user writes a message, which can be forwarded to a third-party service via their API. Use the PlugtoChat REST API (send message docs) to inject messages from third-party services into the PlugtoChat chat. The entire conversation will be mirrored on both PlugtoChat and the third-party service.</p>
                    
<h3 className="heading-3 mb">Can visitors start a chat without registering?</h3>
                        <p className="mb-large">A.PlugtoChat needs a user ID to identify a user. By creating anonymous user accounts, users can be identified with PlugtoChat by using their user id. With our HTML panel feature, you can ask the user for information during the chat.</p>

                        <h3 className="heading-3 mb">Can I change the color of the close button on the popup widget?</h3>
                        <p className="mb-large">A.Yes. You should disable the pop-up launcher entirely and create your own, however, you like. When calling create a popup, set the launcher property to "never". Then, call popup.show when the user clicks your custom launcher.</p>

                    </div>
                    <div className="col-md-6">
                        <h3 className="heading-3 mb">Which file formats/types can we send with PlugtoChat?</h3>
                        <p className="mb-large">A.PlugtoChat Standard plan customers can transfer files between users. PlugtoChat currently supports the following file types: 
mp4 | mpeg |qt | bmp | svg | psd | pdf | ai | 7z | zip | arj | bz2 | gz | lha | sit | tar | docx | xlsx | pptx | txt | md| log | avi | mkv | mov | webm | aiff |aif | midi | mid | gif | jpeg | jpg | png | tif | tiff|</p>
                        <h3 className="heading-3 mb">Is it possible to resize PlugtoChat to fit the area given?</h3>
                        <p className="mb-large">A.You can set the container's dimensions in your CSS to change PlugtoChat's height. To modify the width, you need to edit the width of two classes in themes: inbox-feed-panel and inbox-chat-panel.</p>
                        <h3 className="heading-3 mb">Is it possible to add a custom / additional feature to PlugtoChat?</h3>
                        <p className="mb-large">A.According to the issue, the urgency of the request, and how many users would benefit from the feature, we evaluate each custom feature request on a case-by-case basis. Please let us know if you would like to discuss a custom feature request.</p>
                        <h3 className="heading-3 mb">What are the options for showing only conversations with unread messages or filtering the inbox?</h3>
                        <p className="mb-large">A.PlugtoChat lets you filter conversations in the Inbox UI based on multiple properties. You can, for example, filter the conversation list by only showing conversations that are unread, conversations that the user can write in, or filter conversations by a custom parameter, such as a category or topic.</p>
                        <h3 className="heading-3 mb">Is it possible to change what is shown in the title and subtitle?</h3>
                        <p className="mb-large">A.Additionally, you can choose to hide either or both of the titles and subtitles of the chat window, if you wish. This can be done when you specify UI options for the Chat window.</p>

                        <h3 className="heading-3 mb"> Is it possible to upgrade or downgrade my subscription?</h3>
                        <p className="mb-large">A.By contacting us through our chat or sending an email, you can upgrade or downgrade your subscription.</p>

                        <h3 className="heading-3 mb">Is it possible to remove or replace the chat headers provided by PlugtoChat?</h3>
                        <p className="mb-large">A.You can remove or customize the chat headers that PlugtoChat uses by default. Check out the documentation associated with this feature or view the blog post for a more in-depth tutorial complete with code samples.</p>
                    
                        <h3 className="heading-3 mb">How can I handle user authentication?</h3>
                        <p className="mb-large">PlugtoChat embeds inside your app or website, so all users who are logged into your app must be "logged in" to talk. Follow our getting started guide to get started, ensure that Identity Verification is enabled so that PlugtoChat is no longer available when a user logs out.</p>

                        <h3 className="heading-3 mb">As an administrator, can I see a user's chat history?</h3>
                        <p className="mb-large">A.Yes, in the PlugtoChat dashboard there is an activity view where you can monitor the conversations of your users. You can pull the data of their conversations from the PlugtoChat dashboard or via our webhooks.</p>
                    </div>
                </div>
            </div>
            <div className="decorator-section mt-xl">
                <div className="container container-small">
                    <div className="card">
                        <div className="card-body">
                            <div className="row row-center">
                                <div className="col-sm-9">
                                    <p className="paragraph-responsive">“We needed chat and didn't want to build it ourselves because it needs to be really great. The ptc team is laser-focused on chat, and we're focused on building a great auction marketplace.“</p>
                                    <p className="mb-0">
                                        <strong>Harsha</strong>
                                        <br />
                                        Head of Product at FlapLive
                                    </p>
                                </div>
                                <div className="col-sm-3">
                                    {/* <svg className="img-responsive w-200" width="310" height="90" viewBox="0 0 310 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M266.924 20.374C265.059 20.374 263.54 21.8827 263.54 23.7361V23.8568C263.54 25.7102 265.059 27.2189 266.924 27.2189C268.791 27.2189 270.308 25.7102 270.308 23.8568V23.7361C270.308 21.8827 268.791 20.374 266.924 20.374ZM157.636 41.6551C158.122 42.7757 158.364 44.0947 158.364 45.5723C158.364 47.0499 158.122 48.3689 157.636 49.4913C157.154 50.6137 156.487 51.5602 155.658 52.3068C154.83 53.0499 153.878 53.6102 152.829 53.9706C151.784 54.3309 150.702 54.5137 149.613 54.5137C148.365 54.5137 147.209 54.2689 146.176 53.7861C145.148 53.3051 144.248 52.6533 143.501 51.8516C142.754 51.0482 142.17 50.0913 141.767 49.0085C141.367 47.9275 141.161 46.7723 141.161 45.5723C141.161 44.374 141.367 43.2068 141.767 42.1068C142.171 41.0033 142.756 40.0378 143.501 39.2344C144.246 38.4326 145.146 37.7826 146.176 37.2999C147.206 36.8171 148.364 36.5723 149.613 36.5723C150.702 36.5723 151.784 36.7551 152.829 37.1154C153.88 37.4775 154.831 38.0464 155.66 38.8102C156.489 39.5758 157.154 40.5326 157.636 41.6551ZM149.197 31.0895C146.965 31.0895 144.95 31.4947 143.215 32.2895C141.475 33.0878 139.998 34.162 138.827 35.4826C137.654 36.8068 136.742 38.3637 136.118 40.112C135.49 41.8654 135.171 43.7033 135.171 45.5723C135.171 47.4413 135.49 49.2671 136.118 51.0033C136.742 52.7326 137.654 54.2792 138.827 55.6051C139.999 56.9257 141.476 57.9999 143.213 58.7947C144.952 59.5913 146.965 59.9947 149.197 59.9947C150.96 59.9947 152.614 59.6999 154.115 59.1171C155.617 58.5361 156.87 57.7326 157.842 56.7257L158.127 56.4309V59.224H164.118V31.862H158.127V34.6551L157.842 34.3602C156.872 33.3551 155.618 32.5499 154.115 31.9671C152.611 31.3861 150.955 31.0895 149.197 31.0895ZM174.788 24.9223H168.798V50.793C168.798 53.3413 169.662 55.4051 171.366 56.9258C173.077 58.4533 175.687 59.2275 179.127 59.2275H183.493V54.0413H179.186C176.268 54.0413 174.788 52.5895 174.788 49.7257V37.0482H183.493V31.862H174.788V24.924V24.9223ZM207.825 41.6551C208.309 42.7792 208.553 44.0964 208.553 45.5723C208.553 47.0482 208.309 48.3654 207.825 49.4913C207.34 50.6137 206.676 51.5602 205.845 52.3068C205.017 53.0499 204.065 53.6102 203.016 53.9706C201.971 54.3309 200.889 54.5137 199.802 54.5137C198.552 54.5137 197.396 54.2689 196.363 53.7861C195.335 53.3051 194.435 52.6533 193.69 51.8516C192.941 51.0482 192.359 50.0913 191.956 49.0085C191.554 47.9275 191.35 46.7723 191.35 45.5723C191.35 44.374 191.554 43.2068 191.956 42.1068C192.359 41.0033 192.943 40.0378 193.69 39.2344C194.434 38.4326 195.333 37.7826 196.363 37.2999C197.393 36.8171 198.549 36.5723 199.802 36.5723C200.889 36.5723 201.971 36.7551 203.016 37.1154C204.067 37.4775 205.02 38.0464 205.847 38.8102C206.676 39.5758 207.341 40.5326 207.823 41.6551H207.825ZM199.385 31.0895C197.152 31.0895 195.139 31.4947 193.4 32.2895C191.66 33.0895 190.185 34.162 189.015 35.4826C187.841 36.8068 186.929 38.3637 186.303 40.112C185.678 41.8671 185.359 43.7033 185.359 45.5723C185.359 47.4395 185.678 49.2671 186.303 51.0033C186.929 52.7326 187.841 54.2792 189.015 55.6051C190.186 56.9257 191.663 57.9982 193.4 58.7947C195.139 59.5913 197.154 59.9947 199.385 59.9947C201.146 59.9947 202.8 59.6999 204.303 59.1171C205.804 58.5361 207.059 57.7309 208.03 56.7257L208.314 56.4309V59.224H214.305V31.862H208.314V34.6551L208.03 34.3602C207.059 33.3551 205.806 32.5499 204.303 31.9671C202.798 31.3861 201.142 31.0895 199.385 31.0895ZM263.96 59.2257H269.949V31.8602H263.96V59.2257ZM305.89 20.374C304.027 20.374 302.51 21.8827 302.51 23.7361V23.8568C302.51 25.7102 304.027 27.2189 305.89 27.2189C307.757 27.2189 309.274 25.7102 309.274 23.8568V23.7361C309.274 21.8827 307.757 20.374 305.89 20.374ZM302.926 59.2257H308.915V31.8602H302.926V59.2257ZM242.008 48.7826V31.8602H236.017V48.7826C236.017 51.8861 233.478 54.412 230.357 54.412C227.237 54.412 224.696 51.8861 224.696 48.7826V31.8602H218.706V48.5189C218.706 54.9085 223.933 60.1051 230.356 60.1051C233.625 60.1051 236.655 58.7861 238.892 56.3878L239.013 56.2585L239.134 56.3878C241.338 58.7499 244.449 60.1068 247.668 60.1068C254.093 60.1068 259.319 54.9085 259.319 48.5189V31.8602H253.33V48.7826C253.33 51.8861 250.79 54.412 247.668 54.412C244.548 54.412 242.008 51.8861 242.008 48.7826ZM292.225 43.3999C296.077 39.4068 297.991 34.5206 298.793 31.9344L298.816 31.8602H292.615C291.159 35.6344 287.822 41.8568 281.3 43.2499V20.8327H275.476V59.2257H281.3V49.1464C283.525 48.8292 285.634 48.1189 287.576 47.0326L294.042 59.2257H300.621L292.225 43.3999ZM116.097 35.4326C114.837 36.6878 113.83 38.1913 113.105 39.8982C112.379 41.6051 112.012 43.4947 112.012 45.5102C112.012 47.5275 112.379 49.424 113.105 51.1499C113.83 52.8792 114.839 54.3913 116.097 55.643C117.356 56.8964 118.866 57.8878 120.584 58.5913C122.303 59.293 124.202 59.6482 126.228 59.6482H134.237V54.312H126.594C125.374 54.312 124.233 54.0826 123.205 53.6309C122.177 53.1775 121.286 52.5516 120.556 51.7654C119.828 50.9809 119.249 50.0482 118.833 48.9895C118.42 47.9326 118.212 46.762 118.212 45.5102C118.212 44.2585 118.42 43.0878 118.833 42.0309C119.249 40.9723 119.828 40.0378 120.556 39.2551C121.289 38.4671 122.18 37.8482 123.208 37.4154C124.235 36.9844 125.375 36.7654 126.594 36.7654H134.235V31.4275H126.228C124.203 31.4275 122.303 31.7844 120.584 32.4861C118.862 33.1913 117.354 34.1826 116.097 35.4344V35.4326ZM90.1432 0.344727V89.9999H0V0.344727H90.1432ZM64.1403 19.3102H48.3393C33.1311 19.3102 20.8023 31.2758 20.8023 46.0344C20.8023 60.793 33.1311 72.7585 48.3393 72.7585H64.1403V19.3102Z" fill="#0033FF" />
                                    </svg> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pricing