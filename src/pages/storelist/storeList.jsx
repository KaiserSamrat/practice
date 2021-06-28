import './storeList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
// import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import StoreData from './StoreData';
// import { MDBDataTable } from 'mdbreact';
export default function StoreList() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://salesx.herokuapp.com/api/v1/stores/');
      console.log(res.data.stores)
      setData(res.data.stores)
    }
    fetchUsers()
  }, [])


  return (
    <div >

      <h3 className='text-center mt-4 text-dark '>Store Information</h3>
      <table className="table table-striped mt-4 table-success" id='myTable'>
        <thead>
          <tr>

            <th>Store </th>
            <th>location</th>
            <th>Store Code</th>
            <th>Store type</th>
            <th>lon</th>
            <th>Teritory</th>
            <th>Update</th>
            <th>View d</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(user => <StoreData user={user} key={user._id}></StoreData>)
          }
        </tbody>
      </table>
    </div>
  );
}
