import img from "../../images/img.png"

// Static About us page for now 
const About = () => {
    return (
        <div className="py-5">
            <h1>This is About Us</h1>
            <div className="d-flex container">
                <div className="w-50" >
                    <img className="img-fluid p-5" src={img} alt="" />
                </div>
                <div className="w-50 p-3">
                    <p>Since its founding in 1895, The New York Public Library has unwaveringly served New York City, no matter the circumstances. The COVID-19 pandemic brought forth unprecedented challenges for our city and our patrons. But as it has always done, the Library quickly adapted to ensure communities could still access the information and resources they needed. While constantly monitoring the rapidly changing circumstances, the Library increased its core digital services—from e-book access to online learning support for students, remote research services, online programs, and virtual one-on-one job support. And as soon as it could, the Library reopened select physical locations—now expanded to more than 50 neighborhood branches—for grab-and-go service.

                        The Library was founded on the ideals of free and open access to knowledge and opportunity for everyone. The challenges of 2020 and 2021 did not deter, but rather reaffirmed Learn English central objective to serve New Yorkers through even the most turbulent times—a testament to the enduring legacy of the Library as one of the city’s most essential civic institutions.</p>
                </div>
            </div>
        </div>
    );
};

export default About;