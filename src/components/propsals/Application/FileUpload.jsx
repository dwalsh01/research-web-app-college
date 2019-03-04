import React, { useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

export default function FileUpload(props) {
  const [files, setFiles] = useState(props.fileList);
  const handleUpdateFiles = uploadedFiles => {
    setFiles(uploadedFiles);
    props.onChange(uploadedFiles);
  };
  return (
    <div>
      <FilePond files={files} onupdatefiles={item => handleUpdateFiles(item)} allowMultiple />
    </div>
  );
}
