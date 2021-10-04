import useData from '../../hooks/useData';
import Images from '../Images/Images'; 

// Gallery Section 
const Gallery = () => {
    const [data] = useData();
    return (
        <div>
            <div className="py-5"> 
            </div>
            <h1>Welcome to Our Gallery</h1>
            <div className="container py-5">
                <div className="course row g-5">
                    {
                        data.map(course => <Images
                            key={course.key}
                            course={course}
                        ></Images>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;