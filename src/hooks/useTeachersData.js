import { useEffect, useState } from 'react';


const useTeachersData = () => {
    const [teachersData, setTeachersData] = useState([])
    useEffect(() => {
        fetch("./ourteacher.json")
            .then(res => res.json())
            .then(data => setTeachersData(data));
    }, []);
    return [teachersData]
};

export default useTeachersData;