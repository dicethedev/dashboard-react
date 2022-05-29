import './newPage.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState, useEffect } from 'react'
import { addDoc, collection, doc, setDoc, serverTimestamp } from "firebase/firestore"; 
import { db, auth, storage } from '../../firebaseinit';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL, connectStorageEmulator } from "firebase/storage";



const NewPage = ({inputs, title}) => {
     
     //useState functions declarations ======
     //uploading of image
     const [file, setFile] = useState("");
     // console.log(file)
     const [data, setData] = useState({});
     const [percentage, setPercentage] = useState(null);
     //End of useState

     //=== useEffect
     useEffect(()=> {
       const uploadFile = () => {
         
          const name = new Date().getTime() + file.name
          console.log(name);
         const storageRef = ref(storage, file.name);
         const uploadTask = uploadBytesResumable(storageRef, file);

         uploadTask.on(
              "state_changed",
              (snapshot) => {
                   const progress = 
                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                     console.log('Upload is ' + progress + '% done');
                     //new line added
                     setPercentage(progress)
                     //went down to button to disabled the send button with condition
                     switch (snapshot.state) {
                          case 'paused':
                               console.log('Upload is paused');
                               break;
                         case 'running':
                              console.log('Upload is running');
                              break;
                              default:
                                   break;
                     }
              },
              (error) => {
                   console.log(error)
              },
              () => {

                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                      setData((previous)=>({...previous, img:downloadURL}))
                    //   console.log('File available at', downloadURL);
                 });
              }
         );
       }

       file && uploadFile();
     },[file])

     // ======== handleInput ========
     const handleInput = (e) => {
          const id = e.target.id;
          const value = e.target.value;

          setData({ ...data, [id]: value });
     };

     console.log(data)

     // ========== End of handleInput ========


     //========== handleADD ===============
     const handleAdd = async (e) => {
          e.preventDefault()

          try {
               const res =  await createUserWithEmailAndPassword( auth, data.email, data.password)
        await setDoc(doc(db, "users", res.user.uid), {
             //this data is coming from the formInput that will be created newly
         ...data, 
         timeStamp: serverTimestamp()
         });
       }catch(err) {
          console.error(err);
     }

     //  console.log(res.id)
     }

     // ============= End of handleAdd ==============

     return (
            <div className="new">
              <Sidebar />
              <div className="newContainer">
                <Navbar />
                <div className="top">
                     <h1>{title}</h1>
                </div>
                <div className="bottom">
                     <div className="left">
                       <img 
                       src={
                            file 
                            ? URL.createObjectURL(file) 
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                         } 
                          alt=""
                           />
                     </div>
                     <div className="right">
                          <form onSubmit={handleAdd}>
                               <div className="formInput">
                                    <label htmlFor="file">
                                      Image: <DriveFolderUploadIcon className="icon" />
                                   </label>
                                <input type="file" id="file" 
                                onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                               </div>

                                 {/* map through all the inputField from formSource */}
                                 {inputs.map((input) => (
                                 <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>

                                    {/* this input here working with firestore database */}
                                    <input 
                                    id={input.id}
                                    type={input.type} placeholder={input.placeholder}
                                    onChange={handleInput} />
                               </div>
                               ))}
                               
                               <button disabled={percentage !== null && percentage < 100} type="submit">
                                    Send</button>
                          </form>
                          </div>
                </div>
             </div>
          </div>
     )
}

export default NewPage
