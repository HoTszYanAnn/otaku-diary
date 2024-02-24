import ImageUploader from "@/components/Collection/Add/ImageUploader";
import CollectionGridList from "@/components/Collection/Listing/CollectionGridList";
import SubHeaderBar from "@/components/Collection/Listing/SubHeader";
import { StyledMain } from "@/components/Collection/Listing/styled";
import { kv } from "@vercel/kv";

const CollectionList = () => {
  // await kv.set('setExample', 'xx');

  useEffect(() => {
    //isEdit reset list value
  }, [])

  return (
    <StyledMain>
      <SubHeaderBar />
      <CollectionGridList />
    </StyledMain>
  );
}

export default CollectionList