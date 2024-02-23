import * as React from 'react';
import { StyledImageListItem, StyledImage, StyledBox } from './styled';
import NumberInput from './Edit/NumberInput';
import { useParams } from 'next/navigation';

export default function CollectionCard({ item }) {
  const params = useParams()
  const isEdit = params?.slug?.[0] === 'edit'
  return (
    <StyledImageListItem key={item.id}>
      <StyledImage
        src={item.image}
        alt={item.name}
        loading="lazy"
      />
      <StyledBox>
        {isEdit ? <NumberInput /> : (<>{item.quantity}</>)}
      </StyledBox>
    </StyledImageListItem>
  );
}