import * as React from 'react';
import { StyledImageListItem, StyledImage, StyledOverlayBox, StyledDeletedOverlay, StyledDeleteButton, StyledContainerBox, StyledBadge, StyledChipBox } from './styled';
import NumberInput from './Edit/NumberInput';
import { useParams } from 'next/navigation';
import { useCollectionItemQuantityById } from '@/store/collection-list';
import { Chip, IconButton, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const CollectionCard = ({ item }) => {
  const [newQuantity, { onChangeQuantity, onDeleteItem }] = useCollectionItemQuantityById(item.id)
  const params = useParams()

  const isEdit = params?.slug?.[0] === 'edit'
  const quantity = newQuantity ?? item.quantity ?? 0
  const isTempDeleted = newQuantity === -1
  const onChange = (value) => {
    onChangeQuantity({ id: item.id, quantity: value })
  }

  return (
    <StyledImageListItem key={item.id}>
      <StyledBadge color="primary" badgeContent={item.quantity} hidden={isEdit}>
        {(isEdit && !isTempDeleted) && <StyledDeleteButton color="white" size="small" onClick={() => onDeleteItem(item)}><DeleteOutlineIcon fontSize="small" /></StyledDeleteButton>}
        {isTempDeleted && <StyledDeletedOverlay><DeleteForeverOutlinedIcon color='white' /></StyledDeletedOverlay>}
        <StyledContainerBox>
          <StyledImage
            src={item.image}
            alt={item.name}
            loading="lazy"
            isEdit={isEdit}
          />
          <StyledOverlayBox isEdit={isEdit} isTempDeleted={isTempDeleted}>
            {(isEdit && !isTempDeleted) && <NumberInput onChange={onChange} value={quantity} />}
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