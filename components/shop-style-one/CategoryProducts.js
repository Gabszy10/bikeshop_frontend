import React, { Component } from 'react';
import Link from 'next/link';

class CategoryProducts extends Component {
    render() {
        return (
            <section className="category-products-area pb-60 pt-40">
                <div className="container col-lg-7 col-md-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-category-box">
                                <img src="https://cdn.shopify.com/s/files/1/2601/3352/files/florist-PH-bundledeals_1600x.jpg?v=1580265726" alt="image" />

                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-category-box">
                                <img src="https://cdn.shopify.com/s/files/1/2601/3352/files/florist-PH-boxedblooms_1_1600x.jpg?v=1580265673" alt="image" />

                                
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-category-box">
                                <img src="https://cdn.shopify.com/s/files/1/2601/3352/files/florist-PH-cakecollection_1600x.jpg?v=1580265790" alt="image" />

                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-category-box">
                                <img src="https://cdn.shopify.com/s/files/1/2601/3352/files/florist-PH-petitebikes_1600x.jpg?v=1580265763" alt="image" />

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CategoryProducts;
