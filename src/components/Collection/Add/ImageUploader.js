'use client';
import axios from 'axios';
import { useState, useRef } from 'react';
import { StyledLabel, StyledLinearProgress, StyledImg } from './styled';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { Typography } from '@mui/material';
import Compressor from 'compressorjs';

export default function ImageUploader({ onUploadFinish, image }) {
  const inputFileRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const onUpload = async (event) => {
    event.preventDefault();
    setLoading(true)
    const file = inputFileRef.current.files[0];
    if (file?.type.includes('image')) {
      new Compressor(file, {
        maxWidth: '300',
        maxHeight: '300',
        success: async (compressedResult) => {
          // compressedResult has the compressed file.
          // Use the compressed file to upload the images to your server.        
          const formData = new FormData();
          formData.append('image', compressedResult)
          const response = await axios.post(
            // use imgbb free image host
            `https://api.imgbb.com/1/upload?key=7e574468e5ad30ac87dd9625945872e9&name=${file.name}`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
          console.log(response)
          if (response.status === 200 && response?.data?.data?.display_url) {
            onUploadFinish(response?.data?.data?.display_url);
          }
          setLoading(false)
        },
        error: (e) => {
          console.log(e)
          setLoading(false)
        }
      });
    } else {
      setLoading(false)
      // handle error
    }
  }
  return (
    <div>
      <StyledLabel>
        <input name="file" ref={inputFileRef} type="file" required style={{ display: 'none' }} onChange={onUpload} />
        {image && <StyledImg
          src={image}
          alt={'uploaded-image'}
          loading="lazy"
        />}
        <AddPhotoAlternateOutlinedIcon color="primary" fontSize="large" style={{ height: 60, width: 60, margin: 'auto', marginTop: 55, display: 'block' }} />
        <Typography align='center' color="primary" mt={2} paragraph>
          バッジの画像を変更
        </Typography>
        {loading && <StyledLinearProgress />}
      </StyledLabel>
    </div>
  );
}