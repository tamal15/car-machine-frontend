import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service,setService]=useState({})
    const { serviceId } = useParams();

    useEffect(()=>{
        fetch(`https://agile-depths-45745.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h2>name: {service.name}</h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;