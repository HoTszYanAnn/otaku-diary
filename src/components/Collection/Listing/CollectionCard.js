import * as React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import InfoIcon from '@mui/icons-material/Info';

export default function CollectionCard({ item }) {

  return (
    <ImageListItem key={item.id}>
      <img
        src={`https://qwevqaggtpc6qyfi.public.blob.vercel-storage.com/${item.image}`}
        alt={item.displayName}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.count}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${item.displayName}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
}