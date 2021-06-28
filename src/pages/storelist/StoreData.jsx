import React from 'react';
import { Link } from "react-router-dom";
const StoreData = (props) => {
    let count = 0;

    const { _id, storename, lon, location, storedmscode, storetype, teritory } = props.user;
    return (
        <tr>
            <td>{storename}</td>
            <td>{location}</td>
            <td>{storedmscode}</td>
            <td>{storetype}</td>
            <td>{lon}</td>
            <td>{teritory}</td>
            <td><button className="btn btn-success">Update</button></td>
            <td>
                <Link to={`/storeDetails/${_id}`}>
                    <button className='btn btn-info'>View</button>
                </Link>
            </td>


        </tr>

    );
};

export default StoreData;