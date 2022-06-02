
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["TXT"];

function DragDrop({setState}) {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    console.log(file);

    let pdfData = new FormData();
    pdfData.append( "pdf", file );
    //pdfData.append()

    fetch('https://txttojsondemo.herokuapp.com/users/parse', {
      method: 'POST',
      headers: {
        "Accept": "application/json"
      },
      body: pdfData
    })
    .then(resp => resp.json())
    .then(r => {
      let state = r[0];
      setState({
        fullName: state["FIRST_NAME"] + " " + state["LAST_NAME"],
        phoneNumber: state["NUMBER"],
        email: state["EMAIL"],
        address: state["ADDRESS"],
        password: state["PASSWORD"]
      });
    })
  };

  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;
