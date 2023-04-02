import React, { Component } from 'react';
import Link from 'next/link';

class OfferArea extends Component {
    render() {
        return (
            <section className="offer-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img src={require("../../images/cake.jpg")} alt="image" />

                                <div className="category">
                                    <h4>CAKE</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>CAKE</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Birthday</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Anniversary</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Monthsary</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="offer-box">
                                <img src={require("../../images/flowers.jpg")} alt="image" />

                                <div className="category">
                                    <h4>Flowers</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>Flowers</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Woman Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Man Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Sunglasses</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Belts</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Hats</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Scrafs</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="offer-box">
                                <img src={require("../../images/bundle.jpg")} alt="image" />

                                <div className="category">
                                    <h4>Bundle</h4>
                                </div>

                                <div className="box-inner">
                                    <h3>Bundle</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Woman Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Man Accessories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Sunglasses</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Belts</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Hats</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Scrafs</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferArea;
