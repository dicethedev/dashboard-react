//temporary data
export const userColumns = [
      { field: 'id', headerName: 'ID', width: 70 },
      {field: "user", headerName: "user", width: 230, renderCell: (params) => {
        return (
             <div className="cellWithImg">
                  <img src={params.row.img} alt="avatar" className="cellImg" />
                  {params.row.username}
             </div>
        )
      }
     },

     {
          field: "email", headerName: "Email", width: 230
     }, 

     {
          field: "age", headerName: "Age", width: 100
     },
     
     {
          field: "status", headerName: "Status", width: 160,
          renderCell: (params) => {
             return <div className={`cellWithStatus ${params.row.status}`}>
                  {params.row.status}
             </div>
          }
     }
]

export const userRows = [
     {
          id: 1,
          username: "John",
          img: "https://images.pexels.com/photos/1277631/pexels-photo-1277631.jpeg?cs=srgb&dl=pexels-fernanda-latronico-1277631.jpg&fm=jpg",
          email: "snowjohn@gmail.com",
          status: "active",
          age: 35,
     },

     {
         id: 2,
          username: "Precious",
          img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg",
          email: "precioussamuel@gmail.com",
          status: "passive",
          age: 17,
     },

         {
         id: 3,
          username: "Blessing",
          img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
           email: "blessingsamuel@gmail.com",
          status: "pending",
          age: 25,
     },

         {
         id: 4,
          username: "Stark",
          img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
          email: "stark@gmail.com",
          status: "active",
          age: 45,
     },

         {
         id: 5,
          username: "Esther",
          img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg",
          email: "esther@gmail.com",
          status: "passive",
          age: 65,
     },

           {
         id: 6,
          username: "Melisandre",
          img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg",
          email: "melisandre@gmail.com",
          status: "active",
          age: 15,
     },


           {
         id: 7,
          username: "Comfort",
          img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg",
          email: "comfort@gmail.com",
          status: "passive",
          age: 65,
     },


           {
         id: 8,
          username: "Johnson",
          img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg",
          email: "esther@gmail.com",
          status: "active",
          age: 75,
     },
               {
         id: 9,
          username: "Frances",
          img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg",
          email: "frances@gmail.com",
          status: "pending",
          age: 30,
     },

               {
         id: 10,
          username: "Roxie",
          img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-daniel-xavier-1239291.jpg&fm=jpg",
          email: "snow@gmail.com",
          status: "active",
          age: 50,
     },

]

// ======= This info was provided from Material Icons
// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
// //     valueGetter: (params) =>
// //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     renderCell: (params) => {
//          return (
//              <>
//               <span>{params.row.lastname}</span>
//                <p>{params.row.age}</p>
//              </>
//          )
//     }
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

