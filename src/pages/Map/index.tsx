import MapWindow from '@/components/Map/MapWindow';
import PlaceSection from '@/components/Map/PlaceSection';
import { Text } from '@/components/common/typography/Text';

import { PlaceData } from '@/types';

export default function MapPage() {
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

  return (
    <>
      <Text size="l" weight="bold" variant="white">
        지도
      </Text>
      <MapWindow />
      <PlaceSection items={dummyPlaces} />
    </>
  );
}
