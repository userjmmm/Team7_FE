import { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import DropdownMenu from '@/components/Map/DropdownMenu';
import MapWindow from '@/components/Map/MapWindow';
import PlaceSection from '@/components/Map/PlaceSection';
import ToggleButton from '@/components/Map/ToggleButton';
import { Text } from '@/components/common/typography/Text';
import locationOptions from '@/utils/constants/LocationOptions';
import influencerOptions from '@/utils/constants/InfluencerOptions';
import { PlaceInfo, LocationData } from '@/types';
import { useGetPlaceList } from '@/api/hooks/useGetPlaceList';

export default function MapPage() {
  const [selectedInfluencer, setSelectedInfluencer] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<{ main: string; sub?: string; lat?: number; lng?: number }>({
    main: '',
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [mapBounds, setMapBounds] = useState<LocationData>({
    topLeftLatitude: 0,
    topLeftLongitude: 0,
    bottomRightLatitude: 0,
    bottomRightLongitude: 0,
  });

  const filters = useMemo(
    () => ({
      categories: selectedCategories,
      influencers: selectedInfluencer ? [selectedInfluencer] : [],
    }),
    [selectedCategories, selectedInfluencer],
  );

  const { data: placeList } = useGetPlaceList(mapBounds, filters);

  const handleInfluencerChange = (value: string) => {
    setSelectedInfluencer(value);
  };

  const handleLocationChange = (value: { main: string; sub?: string; lat?: number; lng?: number }) => {
    setSelectedLocation(value);
  };

  const handleCategorySelect = (selected: string[]) => {
    setSelectedCategories(selected);
  };

  const handleBoundsChange = useCallback((bounds: LocationData) => {
    setMapBounds(bounds);
  }, []);

  const filteredPlaces = useMemo(() => {
    if (!placeList) return [];
    return placeList.places.filter((place: PlaceInfo) => {
      const locationMatch = (() => {
        if (!selectedLocation.main) return true;
        const mainMatch =
          place.address.address1.includes(selectedLocation.main) ||
          place.address.address2.includes(selectedLocation.main);
        const subMatch = selectedLocation.sub
          ? place.address.address2.includes(selectedLocation.sub) ||
            (place.address.address3 && place.address.address3.includes(selectedLocation.sub))
          : true;
        return mainMatch && subMatch;
      })();
      const influencerMatch = !selectedInfluencer || place.influencerName === selectedInfluencer;
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(place.category);
      return locationMatch && influencerMatch && categoryMatch;
    });
  }, [placeList, selectedLocation, selectedInfluencer, selectedCategories]);

  const mapCenter = useMemo(
    () => ({
      lat: selectedLocation.lat ?? 37.5665,
      lng: selectedLocation.lng ?? 126.978,
    }),
    [selectedLocation],
  );

  return (
    <PageContainer>
      <Text size="l" weight="bold" variant="white">
        지도
      </Text>
      <DropdownContainer>
        <DropdownMenu
          options={locationOptions}
          multiLevel
          onChange={handleLocationChange}
          placeholder="위치"
          type="location"
        />
        <DropdownMenu
          options={influencerOptions}
          onChange={(value) => handleInfluencerChange(value.main)}
          placeholder="인플루언서"
          type="influencer"
        />
      </DropdownContainer>
      <ToggleButton options={['맛집', '카페', '팝업']} onSelect={handleCategorySelect} />
      <MapWindow onBoundsChange={handleBoundsChange} places={filteredPlaces} center={mapCenter} />
      <PlaceSection items={filteredPlaces} />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  padding: 6px 0;
`;

const DropdownContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  padding-top: 16px;
`;
