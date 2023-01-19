import React, { useEffect, useRef } from 'react'

const UploadWidget = () => {
 const myWidget = window.cloudinary.createUploadWidget({
  cloudname: 'dmitjxc0w',
  uploadPreset:'feedmeproject'
 },
 (error, result) => {
   if (!error && result && result.event === "success") {
     console.log("Done! Here is the image info: ", result.info);
   }
  }
 )
 

  return (
   <button onClick={() => myWidget.open()}>
    upload
   </button>
  )
}

export default UploadWidget