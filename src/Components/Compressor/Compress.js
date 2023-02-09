import React,{useState} from 'react'
import axios from 'axios';
import { FileUploader } from "react-drag-drop-files";
import Compressorstyles from "./compressor.scss";


export default function Compress() {

  const fileTypes = ["JPG", "PNG", "GIF"];

  const [file, setfile] = useState()

  const handleChange = (fileUp) => {

    // setfile(file);
    setfile(URL.createObjectURL(fileUp));

    console.log(file)
  };

  const compressImage = () => {

    axios.post('https://images.abstractapi.com/v1/url/', {
      api_key: "e74f110c08b74a8e88da1c541b796c9c",
      url: file,
      lossy: true
    }, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
    <style style={Compressorstyles}></style>
    <section className="compressionBody bg-dark">
      <div className="container bg-dark">
            <div className="row">
                <div className="col-12">
                  <h1 className='mt-5 pt-5 text-light text-center'>
                    Compress images and optimize it
                  </h1>
                  <p className="text-center desc">
                  Compress <b>JPG</b>, <b>PNG</b>, <b>SVG</b> with the best quality and compression. Reduce the filesize of your images at once.
                  </p>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} classes="forminput mx-auto"/>
                    <button className='btn btn-light mb-5 btn-lg text-center m-auto d-block' onClick={compressImage}>Compress</button>
                    <img alt="not fount" width={"250px"} src={file} />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
