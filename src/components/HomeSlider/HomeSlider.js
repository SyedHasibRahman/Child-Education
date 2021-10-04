import React from 'react';
import './HomeSlider.css'
import img from "../../images/banner.png"
import img2 from "../../images/banner2.png"
import img3 from "../../images/banner3.png"
import { Link } from 'react-router-dom';

// Slider for home page 
const HomeSlider = () => {
    return (
        <div className="py-3">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="/Courses"><img src={img} className="d-block w-100" alt="..." /></Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/Courses"><img src={img2} className="d-block w-100" alt="..." /></Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/Courses"><img src={img3} className="d-block w-100" alt="..." /></Link>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HomeSlider;