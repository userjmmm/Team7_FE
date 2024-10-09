import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PlaceItem from '@/components/Map/PlaceSection/PlaceItem';
import { PlaceInfo } from '@/types';

export default function PlaceSection({ items }: { items: PlaceInfo[] }) {
  const navigate = useNavigate();

  const handlePlaceClick = (placeId: number) => {
    navigate(`/detail/${placeId}`);
  };

  return (
    <ListContainer>
      {items.map((place) => {
        return <PlaceItem key={place.placeId} {...place} onClick={() => handlePlaceClick(place.placeId)} />;
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
