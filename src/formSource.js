//Before
// export const userInputs = [

//      {
//           id: 1,
//           label: 'username',
//           type: 'text',
//           placeholder: 'john_snow',
//      },

//        {
//           id: 2,
//           label: 'Name $ Username',
//           type: 'text',
//           placeholder: 'John Snow',
//      },
     
//        {
//           id: 3,
//           label: 'Email',
//           type: 'email',
//           placeholder: 'john_snow@gmail.com',
//      },

//        {
//           id: 4,
//           label: 'Phone',
//           type: 'text',
//           placeholder: '+1 234 567 89',
//      },

//        {
//           id: 5,
//           label: 'Password',
//           type: 'password',
//      },

//        {
//           id: 6,
//           label: 'Address',
//           type: 'text',
//            placeholder: 'Elton St. 234 Garden Yd. NewYork',
//      },

//          {
//           id: 7,
//           label: 'Country',
//           type: 'text',
//            placeholder: 'USA',
//      },
// ];


//all the ID here are use on firestore database on Firebase
//Now
export const userInputs = [

     {
          id: "userName",
          label: 'username',
          type: 'text',
          placeholder: 'john_snow',
     },

       {
          id: "displayName",
          label: 'Name and Username',
          type: 'text',
          placeholder: 'John Snow',
     },
     
       {
          id: "email",
          label: 'Email',
          type: 'email',
          placeholder: 'john_snow@gmail.com',
     },

       {
          id: "phone",
          label: 'Phone',
          type: 'text',
          placeholder: '+1 234 567 89',
     },

       {
          id: "password",
          label: 'Password',
          type: 'password',
     },

       {
          id: "address",
          label: 'Address',
          type: 'text',
           placeholder: 'Elton St. 234 Garden Yd. NewYork',
     },

         {
          id: "country",
          label: 'Country',
          type: 'text',
           placeholder: 'USA',
     },
];


export const productInputs = [
     {
          id: 1,
          label: 'Title',
          type: 'text',
          placeholder: 'Apple Macbook Pro',
     },

         {
          id: 2,
          label: 'Description',
          type: 'text',
          placeholder: 'Description',
     },

         {
          id: 3,
          label: 'Category',
          type: 'text',
          placeholder: 'Computers',
     },

         {
          id: 4,
          label: 'Price',
          type: 'text',
          placeholder: '100',
     },

         {
          id: 5,
          label: 'Stock',
          type: 'text',
          placeholder: ' in Stock',
     },
]