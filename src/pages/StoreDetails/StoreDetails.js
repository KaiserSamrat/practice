import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopImage from '../../Images/shop.png'

const StoreDetails = () => {
    const { id } = useParams();
    const [storeDetails, setStoreDetails] = useState({})
    useEffect(() => {
        fetch(`https://salesx.herokuapp.com/api/v1/stores/${id}`)
            .then(res => res.json())
            .then(data => { setStoreDetails(data.singleStore); })
    }, [])
    return (
        <div class="card w-75 mt-5 ms-4" >
            <h3 className='text-center mt-2'>Shop Details</h3>
            <div class="card-body">
                <h5 class="card-title">Store : <span className='text-danger font-weight-bold'>{storeDetails.storename}</span></h5>
                <h5 class="card-title">Location: <span className='text-danger font-weight-bold'>{storeDetails.location}</span> </h5>
                <h5 class="card-title">Teritory: <span className='text-danger font-weight-bold'>{storeDetails.teritory}</span> </h5>
                <h5 class="card-title">Type: <span className='text-danger font-weight-bold'>{storeDetails.storetype}</span> </h5>
                <h5 class="card-title">Code: <span className='text-danger font-weight-bold'>{storeDetails.storedmscode}</span></h5>
                <h5 class="card-title">Lat: <span className='text-danger font-weight-bold'>{storeDetails.lat}</span></h5>
                <h5 class="card-title">Lon: <span className='text-danger font-weight-bold'>{storeDetails.lon}</span></h5>


            </div>
        </div>
    );
};

export default StoreDetails;