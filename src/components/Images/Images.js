import React from 'react';

// Images for gallery 
const Images = (props) => {
    const { picture } = props.course;
    return (
        <div className="col-md-4 col-sm-1 shadow p-3">
            <div className=" rounded border border-info h-100">
                <img className="course-img img-fluid" src={picture} alt="" />
            </div>
        </div>
    );
};

export default Images;