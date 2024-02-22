"use client"
import { StyledMain } from "@/styles/Badge/listing";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter()
  return (
    <StyledMain>
      <Button onClick={() => router.push('/badge')} color="primary" variant="contained">
        Badge
      </Button>
    </StyledMain>
  );
}
