import * as React from 'react';
import { StyledImageListItem, StyledImage, StyledOverlayBox, StyledQuantityBox, StyledDeleteButton, StyledContainerBox, StyledBadge, StyledChipBox } from './styled';
import NumberInput from './Edit/NumberInput';
import { useParams } from 'next/navigation';
import { useCollectionItemQuantityById } from '@/store/collection-list';
import { Chip, IconButton, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CollectionCard = ({ item }) => {
  const [newQuantity, { onChangeQuantity }] = useCollectionItemQuantityById(item.id)
  const params = useParams()

  const isEdit = params?.slug?.[0] === 'edit'
  const quantity = newQuantity ?? item.quantity ?? 0
  const onChange = (value) => {
    onChangeQuantity({ id: item.id, quantity: value })
  }

  return (
    <StyledImageListItem key={item.id}>
      <StyledBadge color="primary" badgeContent={item.quantity} hidden={isEdit}>
        {isEdit && <StyledDeleteButton color="white" size="small"><DeleteOutlineIcon fontSize="small" /></StyledDeleteButton>}
        <StyledContainerBox>
          <StyledImage
            src={item.image}
            alt={item.name}
            loading="lazy"
            isEdit={isEdit}
          />
          <StyledOverlayBox isEdit={isEdit}>
            {isEdit && <NumberInput onChange={onChange} value={quantity} />}
            {!isEdit &&
              <StyledChipBox>
                <Chip label={item.name} color='primary' size="small" />
              </StyledChipBox>
            }
          </StyledOverlayBox>
        </StyledContainerBox>
      </StyledBadge>
    </StyledImageListItem >
  );
}

export default CollectionCard