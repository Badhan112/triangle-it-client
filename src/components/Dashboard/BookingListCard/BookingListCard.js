import React, { useEffect, useState } from 'react';

const BookingListCard = ({ booking }) => {
    const { bookedServiceId, status } = booking;
    const [serviceInfo, setServiceInfo ] = useState({});
    useEffect(() => {
        fetch(`https://cryptic-waters-19850.herokuapp.com/services/${bookedServiceId}`)
        .then(res => res.json())
        .then(data => setServiceInfo(data));
    }, [bookedServiceId])

    return (
        <div className='col-lg-6 col-md-12 col-sm-12 p-3'>
            <div className='shadow bg-white p-3 rounded-3'>
                <div className='d-flex justify-content-between'>
                    <img src={`data:${serviceInfo?.image?.contentType};base64, ${serviceInfo?.image?.img}`} style={{width: '100px'}} className='img-fluid rounded-3' alt=""/>
                    <h5 className='p-3 bg-light text-center'>{status}</h5>
                </div>
                <h3 className='my-4'>{serviceInfo.title}</h3>
                <p>{serviceInfo.description}</p>
            </div>
        </div>
    );
};

export default BookingListCard;