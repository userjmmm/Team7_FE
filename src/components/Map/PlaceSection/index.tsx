import styled from 'styled-components';

import PlaceItem from '@/components/Map/PlaceSection/PlaceItem';

import { PlaceData } from '@/types';

export default function PlaceSection({ items }: { items: PlaceData[] }) {
  return (
    <ListContainer>
      {items.map((place) => {
        return (
          <PlaceItem
            key={place.placeId}
            placeId={place.placeId}
            placeName={place.placeName}
            address={place.address}
            influencerName={place.influencerName}
            likes={place.likes}
          />
        );
      })}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 40px 20px;
`;
