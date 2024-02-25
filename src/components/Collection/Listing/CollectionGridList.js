"use client"
import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import CollectionCard from './CollectionCard';
import axios from "axios";
import { useCollectionList } from '@/store/collection-list';

export default function CollectionGridList() {
  const [list, { fetchCollectionFullListFromBE }] = useCollectionList()

  useEffect(() => {
    fetchCollectionFullListFromBE()
  }, [])

  return (
    <ImageList gap={8}>
      {list.map((item) => (
        <CollectionCard item={item} key={item.id} />
      ))}
    </ImageList>
  );
}
