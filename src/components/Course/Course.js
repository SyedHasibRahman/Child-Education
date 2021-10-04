import React from 'react';
import { Link } from 'react-router-dom';
import "./Course.css"

// Display Course Components part
const Course = (props) => {
    const { picture, name, price, description } = props.course
    return (

        <div className="col-md-4 col-sm-1 shadow p-3">
            <div className=" rounded border border-warning h-100">
                <img className="course-img img-fluid" src={picture} alt="" />
                <h2>{name}</h2>
                <Link to="/courses"><button className="btn-warning rounded px-5">Price: ${price}</button></Link>
                <p className="p-3">{description}</p>
            </div>
        </div>
    );
};

export default Course;