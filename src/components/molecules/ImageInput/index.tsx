'use client'

import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone';

export default function ImageInput() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({onDrop})

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
    </li>
  ));

  return (
    <div>
    <div {...getRootProps()} className="flex justify-center items-center w-full h-48 bg-gray-100 text-gray-500 border-2 border-gray-300 border-dashed rounded-lg mb-4">
      <input {...getInputProps()}/>
      Drop an image
    </div>
    <aside className="mb-10">
        <h4 className="font-bold">Files:</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  )
}
