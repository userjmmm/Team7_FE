import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PlaceItem from '@/components/Map/PlaceSection/PlaceItem';
import { PlaceInfo, LocationData } from '@/types';
import { useGetPlaceList } from '@/api/hooks/useGetPlaceList';

interface PlaceSectionProps {
  mapBounds: LocationData;
  filters: {
    categories: string[];
    influencers: string[];
  };
}

export default function PlaceSection({ mapBounds, filters }: PlaceSectionProps) {
  const navigate = useNavigate();
  const { data: placeList } = useGetPlaceList(mapBounds, filters);

  const filteredPlaces = useMemo(() => {
    if (!placeList) return [];
    return placeList.places.filter((place: PlaceInfo) => {
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(place.category);
      const influencerMatch = filters.influencers.length === 0 || filters.influencers.includes(place.influencerName);
      return categoryMatch && influencerMatch;
    });
  }, [placeList, filters]);

  const handlePlaceClick = (placeId: number) => {
    navigate(`/detail/${placeId}`);
  };

  return (
    <ListContainer>
      {filteredPlaces.map((place) => (
        <PlaceItem key={place.placeId} {...place} onClick={() => handlePlaceClick(place.placeId)} />
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 40px 20px;
`;
