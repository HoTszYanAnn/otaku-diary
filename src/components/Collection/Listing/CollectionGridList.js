"use client"
import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import CollectionCard from './CollectionCard';
import axios from "axios";

export default function CollectionGridList() {
  const [badgeDataList, setBadgeDataList] = useState([])
  const fetchBadgeFullList = async () => {
    const response = await axios.get(`/api/collection/list`);
    if (response?.status === 200 && response?.data) {
      setBadgeDataList(response?.data)
    }
    return
  }
  useEffect(() => {
    fetchBadgeFullList()
  }, [])
  return (
    <ImageList gap={8}>
      {badgeDataList.map((item) => (
        <CollectionCard item={item} />
      ))}
    </ImageList>
  );
}
