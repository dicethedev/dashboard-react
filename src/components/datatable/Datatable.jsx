import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource'; 
import { Link  } from 'react-router-dom'
import { useState, useEffect } from 'react'
//for fetching data from firestore datatable
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebaseinit'

const Datatable = () => {

      //before
     // const [data, setData] = useState(userRows)

     //now
     const [data, setData] = useState([]);

     //this function is use to fetch data from the firestore Database ===========
     useEffect(() => {
       const fetchData = async () => {
            let list = []
            try {
            const querySnapshot = await getDocs(collection(db, "users"));
             querySnapshot.forEach((doc) => {
             list.push(doc.data())
           // console.log(doc.id, " => ", doc.data());
         });
         //setData is here
     //     setData(list);
          console.log(list)
           }catch(error) {
              console.log(error)
           }
       }
       fetchData()
     }, [])

     console.log(data)
     // ========= End of useState function ==================================

     const handleDelete = (id) => {
          setData(data.filter(item=>item.id !== id));
     }

     const actionColumn = [
     { field: "action", headerName: "Action", width: 200,
      renderCell:(params) => {
       return (
            <div className="cellAction">
                  <Link to="/users/test" style={{textDecoration: 'none'}}>
                 <div className="viewButton">View</div>
                 </Link>
                  <div className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}>Delete</div>
            </div>
          )
        }
     }
     //I add this actionColumn inside the columns in DataGrid Components
  ]

     return (
          <div className="datatable">
               <div className="datatableTitle">
                    Add New User
                     <Link to="/users/new" className="link">
                          Add New</Link>
               </div>
     <DataGrid
     className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
          </div>
     )
}

export default Datatable