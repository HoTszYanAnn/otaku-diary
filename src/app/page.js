"use client"
import { StyledMain } from "@/styles/Collection/listing";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function Home() {
  const router = useRouter()

  return (
    <StyledMain>
      <Button onClick={() => router.push('/collection')} color="primary" variant="contained">
        Collection
      </Button>
    </StyledMain>
  );
}
