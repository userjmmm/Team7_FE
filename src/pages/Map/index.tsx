import React from 'react';

import styled from 'styled-components';

import DropdownMenu from '@/components/Map/DropdownMenu';
import MapWindow from '@/components/Map/MapWindow';
import PlaceSection from '@/components/Map/PlaceSection';
import ToggleButton from '@/components/Map/ToggleButton';
import { Text } from '@/components/common/typography/Text';

import { PlaceData } from '@/types';

const dummyOptionsInfluencer = [
  { label: '성시경' },
  { label: '풍자' },
  { label: '히밥' },
  { label: '임영웅' },
  { label: '백종원' },
  { label: '짱구 대디' },
  { label: '아리의 인형방' },
  { label: '쯔양' },
];

const dummyOptionsLocation = [
  {
    label: '서울특별시',
    subOptions: [
      { label: '강남구' },
      { label: '서초구' },
      { label: '송파구' },
      { label: '마포구' },
      { label: '용산구' },
    ],
  },
  {
    label: '부산광역시',
    subOptions: [
      { label: '해운대구' },
      { label: '부산진구' },
      { label: '동래구' },
      { label: '남구' },
      { label: '북구' },
    ],
  },
  {
    label: '대구광역시',
    subOptions: [{ label: '중구' }, { label: '동구' }, { label: '서구' }, { label: '남구' }, { label: '북구' }],
  },
  {
    label: '인천광역시',
    subOptions: [{ label: '중구' }, { label: '동구' }, { label: '미추홀구' }, { label: '연수구' }, { label: '남동구' }],
  },
  {
    label: '광주광역시',
    subOptions: [{ label: '동구' }, { label: '서구' }, { label: '남구' }, { label: '북구' }, { label: '광산구' }],
  },
];

const dummyPlaces: PlaceData[] = [
  {
    placeId: 1,
    placeName: '료코',
    address: {
      address1: '경상북도',
      address2: '경주시',
      address3: '황리단길',
    },
    category: '',
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
    category: '',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 3,
    placeName: '고향돼지국밥',
    address: {
      address1: '대구광역시',
      address2: '동구',
      address3: '',
    },
    category: '',
    influencerName: '히밥',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 4,
    placeName: '걸리버막창 동성로점',
    address: {
      address1: '대구광역시',
      address2: '중구',
      address3: '',
    },
    category: '임영웅',
    influencerName: '임영웅',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 5,
    placeName: '이화국수',
    address: {
      address1: '대구광역시',
      address2: '달서구',
      address3: '',
    },
    category: '',
    influencerName: '백종원',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 6,
    placeName: '오복반점',
    address: {
      address1: '대구광역시',
      address2: '달성군',
      address3: '',
    },
    category: '',
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
    category: '',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 8,
    placeName: '마룸모',
    address: {
      address1: '대구광역시',
      address2: '북구',
      address3: '',
    },
    category: '',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 9,
    placeName: '마룸모',
    address: {
      address1: '대구광역시',
      address2: '북구',
      address3: '',
    },
    category: '',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
  {
    placeId: 10,
    placeName: '마룸모',
    address: {
      address1: '대구광역시',
      address2: '북구',
      address3: '',
    },
    category: '',
    influencerName: '성시경',
    longitude: '',
    latitude: '',
    likes: false,
  },
];

export default function MapPage() {
  const [selectedInfluencer, setSelectedInfluencer] = React.useState<string>('');
  const [selectedLocation, setSelectedLocation] = React.useState<string>('');

  const handleInfluencerChange = (value: string) => {
    setSelectedInfluencer(value);
    console.log('Selected influencer:', value); // 변경 예정
  };

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    console.log('Selected location:', value); // 변경 예정
  };

  return (
    <PageContainer>
      <Text size="l" weight="bold" variant="white">
        지도
      </Text>
      <DropdownContainer>
        <DropdownMenu
          options={dummyOptionsLocation}
          multiLevel
          onChange={handleLocationChange}
          placeholder="위치"
          type="location"
        />
        <DropdownMenu
          options={dummyOptionsInfluencer}
          onChange={handleInfluencerChange}
          placeholder="인플루언서"
          type="influencer"
        />
      </DropdownContainer>
      <ToggleButton options={['맛집', '카페', '팝업']} onSelect={(selected) => console.log(selected)} />
      {/* 콘솔 삭제 예정 */}
      <MapWindow />
      <PlaceSection items={dummyPlaces} />
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
