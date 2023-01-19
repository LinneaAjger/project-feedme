import React, { useEffect, useRef } from 'react'

const UploadWidget = () => {
 const myWidget = cloudinary.createUploadWidget({
  cloudName: 'dmitjxc0w',
  uploadPreset:'feedme-project',
  folder: 'widgetUpload',
 },
 (error, result) => {
   if (!error && result && result.event === "success") {
     console.log("Done! Here is the image info: ", result.info);
   } else {
    console.log(error)
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