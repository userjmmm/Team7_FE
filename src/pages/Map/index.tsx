import { useState, useMemo } from 'react';
import styled from 'styled-components';
import DropdownMenu from '@/components/Map/DropdownMenu';
import MapWindow from '@/components/Map/MapWindow';
import PlaceSection from '@/components/Map/PlaceSection';
import ToggleButton from '@/components/Map/ToggleButton';
import { Text } from '@/components/common/typography/Text';
import locationOptions from '@/utils/constants/LocationOptions';
import influencerOptions from '@/utils/constants/InfluencerOptions';
import { PlaceData } from '@/types';

const dummyPlaces: PlaceData[] = [
  {
    placeId: 1,
    placeName: '료코',
    address: {
      address1: '경상북도',
      address2: '경주시 황남동',
      address3: '',
    },
    category: '맛집',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: true,
  },
  {
    placeId: 2,
    placeName: '군위식당',
    address: {
      address1: '대구광역시',
      address2: '중구',
      address3: '',
    },
    category: '카페',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 3,
    placeName: '고향돼지국밥',
    address: {
      address1: '대전광역시',
      address2: '서구',
      address3: '',
    },
    category: '맛집',
    influencerName: '히밥',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 4,
    placeName: '걸리버막창 동성로점',
    address: {
      address1: '부산광역시',
      address2: '부산진구',
      address3: '',
    },
    category: '카페',
    influencerName: '임영웅',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 5,
    placeName: '이화국수',
    address: {
      address1: '충청남도',
      address2: '천안시',
      address3: '',
    },
    category: '맛집',
    influencerName: '백종원',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 6,
    placeName: '오복반점',
    address: {
      address1: '전라북도',
      address2: '임실군',
      address3: '',
    },
    category: '카페',
    influencerName: '히밥',
    longitude: '',
    latitude: '',
    likes: true,
  },
  {
    placeId: 7,
    placeName: '수성구1번지',
    address: {
      address1: '대구광역시',
      address2: '수성구',
      address3: '',
    },
    category: '맛집',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 8,
    placeName: '마룸모',
    address: {
      address1: '서울특별시',
      address2: '강남구',
      address3: '',
    },
    category: '카페',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 9,
    placeName: '마룸모',
    address: {
      address1: '경기도 시흥시',
      address2: '',
      address3: '',
    },
    category: '맛집',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 10,
    placeName: '마룸모',
    address: {
      address1: '강원도 춘천시',
      address2: '',
      address3: '',
    },
    category: '카페',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
];

export default function MapPage() {
  const [selectedInfluencer, setSelectedInfluencer] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<{ main: string; sub?: string }>({ main: '' });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleInfluencerChange = (value: string) => {
    setSelectedInfluencer(value);
  };

  const handleLocationChange = (value: { main: string; sub?: string }) => {
    setSelectedLocation(value);
  };

  const handleCategorySelect = (selected: string[]) => {
    setSelectedCategories(selected);
  };

  const filteredPlaces = useMemo(() => {
    return dummyPlaces.filter((place) => {
      const locationMatch =
        place.address.address1.includes(selectedLocation.main) &&
        (!selectedLocation.sub || place.address.address2.includes(selectedLocation.sub));
      const influencerMatch = !selectedInfluencer || place.influencerName === selectedInfluencer;
      const categoryMatch =
        selectedCategories.length === 0 || (place.category && selectedCategories.includes(place.category));

      return locationMatch && influencerMatch && categoryMatch;
    });
  }, [selectedLocation, selectedInfluencer, selectedCategories]);

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
      <MapWindow />
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
