'use client';
import axios from 'axios';
import { useState, useRef } from 'react';
import { StyledLabel, StyledLinearProgress, StyledImg } from './styled';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { Typography } from '@mui/material';

export default function ImageUploader() {
  const inputFileRef = useRef(null);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const onUpload = async (event) => {
    event.preventDefault();
    setLoading(true)
    const file = inputFileRef.current.files[0];
    if (file?.type.includes('image')) {
      const response = await axios.put(`/api/image?filename=${file.name}`, file, {
        headers: { "content-type": file.type }
      })
      if (response.status === 200 && response?.data) {
        setImage(response?.data?.url);
      }
    } else {
      // handle error
    }
    setLoading(false)
  }
  return (
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
  );
}