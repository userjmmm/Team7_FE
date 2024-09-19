import MainBanner from '@/components/features/Main/MainBanner.tsx';

import { BannerData } from '@/types';

const bannerDummyData: BannerData[] = [
  {
    bannerId: 1,
    placeId: '1',
    description: '9.9 - 9.20',
    bannerImg: 'https://via.placeholder.com/1000',
    title: '도구리 팝업스토어',
  },
  {
    bannerId: 2,
    placeId: '2',
    description: '9.9 - 9.20',
    bannerImg: 'https://via.placeholder.com/1000',
    title: '숲속 캠핑',
  },
  {
    bannerId: 3,
    placeId: '3',
    description: '9.9 - 9.20',
    bannerImg: 'https://via.placeholder.com/1000',
    title: '도시 탐방',
  },
  {
    bannerId: 4,
    placeId: '4',
    description: '9.9 - 9.20',
    bannerImg: 'https://via.placeholder.com/1000',
    title: '산악 트레킹',
  },
  {
    bannerId: 5,
    placeId: '5',
    description: '9.9 - 9.20',
    bannerImg: 'https://via.placeholder.com/1000',
    title: '바다에서의 하루',
  },
];

export default function MainPage() {
  return (
    <>
      <MainBanner items={bannerDummyData} />
      {/* <InfluencerSection />
      <FirstSpotSection />
      <SecondSpotSection /> */}
    </>
  );
}
