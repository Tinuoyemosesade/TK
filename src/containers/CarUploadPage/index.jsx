// import axios from 'axios';
import React, { useState } from 'react';
import { Navbar } from "../../components/navbar"

const CardUploadPage  = () => {

    const [selectedFile, setselectedFile] = useState(null)

    // On file select (from the pop up)
    const onFileChange = event => {
      // Update the state
      setselectedFile(event.target.files[0]);
    };

    // On file upload (click the upload button)
     const onFileUpload = () => {
         console.log(selectedFile)
      // // Create an object of formData
      // const formData = new FormData();

      // // Update the formData object
      // formData.append(
      //   "myFile",
      //   this.state.selectedFile,
      //   this.state.selectedFile.name
      // );

      // // Details of the uploaded file
      // console.log(this.state.selectedFile);

      
      // // Request made to the backend api
      // // Send formData object
      // axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    const fileData = () => {
      if (selectedFile) {

        return (
          <div>
            <Navbar isHome="" />
            <h2>File Details:</h2>
            <p>File Name: {selectedFile.name}</p>
            <p>File Type: {selectedFile.type}</p>
            <p>
              Last Modified:{" "}
              {selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };

      return (
        <div>
            <h1>
              image upload
            </h1>
            <h3>
              File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                  Upload!
                </button>
            </div>
          {fileData()}
        </div>
      );
    }


  export default CardUploadPage;