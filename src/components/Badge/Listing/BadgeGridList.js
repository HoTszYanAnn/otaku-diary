"use client"
import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import BadgeCard from './BadgeCard';
import axios from "axios";

export default function BadgeGridList() {
  const [badgeDataList, setBadgeDataList] = useState([])
  const fetchBadgeFullList = async () => {
    const response = await axios.get(`/api/badge/list`);
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
        <BadgeCard item={item} />
      ))}
    </ImageList>
  );
}
