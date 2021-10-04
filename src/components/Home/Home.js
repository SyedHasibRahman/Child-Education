import React from 'react';
import About from '../About/About';
import ContactUS from '../ContactUS/ContactUS';
import HomeSlider from '../HomeSlider/HomeSlider';
import CoursesForHome from '../CoursesForHome/CoursesForHome';

// Home Page with Home Components
const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <CoursesForHome></CoursesForHome>
            <About></About>
            <ContactUS></ContactUS>
        </div>
    );
};

export default Home;