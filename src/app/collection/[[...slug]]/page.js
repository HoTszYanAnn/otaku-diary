"use client"
import CollectionGridList from "@/components/Collection/Listing/CollectionGridList";
import SubHeaderBar from "@/components/Collection/Listing/SubHeader";
import { StyledMain } from "@/components/Collection/Listing/styled";
import { useCollectionListAction } from "@/store/collection-list";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const CollectionList = () => {
  const [, { resetCollectionEditList }] = useCollectionListAction()
  const params = useParams()
  const isEdit = params?.slug?.[0] === 'edit'
  useEffect(() => {
    resetCollectionEditList()
    return () => {
      resetCollectionEditList()
    }
  }, [isEdit])

  return (
    <StyledMain>
      <SubHeaderBar />
      <CollectionGridList />
    </StyledMain>
  );
}

export default CollectionList