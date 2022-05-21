import React from 'react';
import { MdPerson } from 'react-icons/md';
import { BsWallet } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './Home.css'
const Home = () => {
    let iconStyles = { color: "gray", fontSize: "1.5em" };
    return (
        <div className='main'>
            <div className="row data-cards">
                <div className="col-12 col-lg-6 col-xl">


                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center gx-0">
                                <div className="col">


                                    <h6 className="text-uppercase text-muted mb-2">
                                        Total Customers
                                    </h6>


                                    <span className="h2 mb-0">
                                        34
                                    </span>
                                </div>
                                <div className="col-auto">


                                    <span className="h2 fe fe-dollar-sign text-muted mb-0">
                                        <MdPerson style={iconStyles} />
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-6 col-xl">


                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center gx-0">
                                <div className="col">


                                    <h6 className="text-uppercase text-muted mb-2">
                                        Monthly New Subscriptions
                                    </h6>


                                    <span className="h2 mb-0">
                                        0
                                    </span>

                                </div>
                                <div className="col-auto">


                                    <span className="h2 fe fe-briefcase text-muted mb-0">
                                        <BsWallet style={iconStyles} />
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-6 col-xl">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center gx-0">
                                <div className="col">


                                    <h6 className="text-uppercase text-muted mb-2">
                                        Monthly Revenue
                                    </h6>


                                    <span className="h2 mb-0">
                                        $ 0
                                    </span>

                                </div>
                                <div className="col-auto">
                                    <span className="h2 fe fe-briefcase text-muted mb-0">
                                        <AiOutlineShoppingCart style={iconStyles} />
                                    </span>

                                    <div className="chart chart-sparkline">

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home;