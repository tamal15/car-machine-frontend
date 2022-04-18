import React, { useEffect, useState } from 'react';

const ManageDelete = () => {
    const [service,setService]=useState([])

    useEffect(()=>{
        fetch('https://agile-depths-45745.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    const handleDelete=id=>{
        const url=`https://agile-depths-45745.herokuapp.com/services/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('deleted')
                const remaining=service.filter(services=>services._id !==id)
                setService(remaining)
               }
        })
          

    }
    return (
        <div>
            <h2>all service</h2>

            {
                service.map(services=><div key={services._id}>
                    <h3>{services.name}</h3>
                    <button onClick={()=>handleDelete(services._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageDelete;