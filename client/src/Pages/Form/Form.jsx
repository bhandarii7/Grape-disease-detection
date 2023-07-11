import React, { useState } from 'react'
import axios from 'axios';
import './form.css'

export default function Form () {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setResult('');
    setSelectedFile(file);
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('');
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', formData);
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  return (
    <div className='form' >
       <form id="upload-file" onSubmit={handleSubmit}>
        <label htmlFor="imageUpload" className="upload-label">
          <h4>Try Now &nbsp; <i class="fa-solid fa-upload"></i></h4>
        </label>
        <input type="file" name="file" id="imageUpload" accept=".png, .jpg, .jpeg" onChange={handleFileInputChange} />
        {selectedFile && (
          <div className="img-preview">
            <img src={previewSource} alt="Preview" />

          </div>
          
        )}
           { selectedFile &&(
            <button type="submit" className="predict" onClick={handleSubmit} disabled={!selectedFile}>
              Predict!
            </button>
           )

           }
      </form>

      <div className="result-section">
        <div className="loader" style={{ display: isLoading ? 'block' : 'none', margin:'auto' }}></div>
        <div id="result">
          <h2>{result}</h2>
        </div>
      </div>
    </div>
  );
}
