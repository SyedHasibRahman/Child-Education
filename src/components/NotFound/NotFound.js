import React from 'react';
import img from "../../images/404.gif"
// 404 page 
const NotFound = () => {
    return (
        <div>
            <h1>404 Page Not Found.</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;