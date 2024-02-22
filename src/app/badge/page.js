import ImageUploader from "@/components/Badge/Add/ImageUploader";
import BadgeGridList from "@/components/Badge/Listing/BadgeGridList";
import SubHeaderBar from "@/components/Badge/Listing/SubHeader";
import { StyledMain } from "@/styles/Badge/listing";
import { kv } from "@vercel/kv";

export default async function Home() {
  // await kv.set('setExample', 'xx');

  return (
    <StyledMain>
      <SubHeaderBar />
      <BadgeGridList />
    </StyledMain>
  );
}
