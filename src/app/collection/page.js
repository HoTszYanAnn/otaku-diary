import ImageUploader from "@/components/Collection/Add/ImageUploader";
import CollectionGridList from "@/components/Collection/Listing/CollectionGridList";
import SubHeaderBar from "@/components/Collection/Listing/SubHeader";
import { StyledMain } from "@/styles/Collection/listing";
import { kv } from "@vercel/kv";

export default async function Home() {
  // await kv.set('setExample', 'xx');

  return (
    <StyledMain>
      <SubHeaderBar />
      <CollectionGridList />
    </StyledMain>
  );
}
