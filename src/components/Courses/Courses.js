import useData from '../../hooks/useData';
import Course from '../Course/Course';

// Display Course Components
const Courses = () => {
    const [data] = useData();
    return (
        <div className="container py-5">
            <div className="course row g-5">
                {
                    data.map(course => <Course
                        key={course.key}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;