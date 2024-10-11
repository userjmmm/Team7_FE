import { HttpResponse, http } from 'msw';
import { getBannerPath, getCoolVideoPath, getInfluencerPath, getNewVideoPath } from '@/api/hooks/useGetMain';
import { BASE_URL } from '@/api/instance';
import { getInfluencerVideoPath } from '@/api/hooks/useGetInfluencerVideo';

export const mainHandlers = [
  http.get(`${BASE_URL}${getBannerPath()}`, () => {
    return HttpResponse.json([
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
    ]);
  }),
  http.get(`${BASE_URL}${getCoolVideoPath()}`, () => {
    return HttpResponse.json([
      {
        videoId: 1,
        videoAlias: '성시경이 갔다가 못 돌아온 바로 그곳',
        videoUrl: 'https://youtu.be/qbqquv_8wM0?si=j7LiU5DSfTVpKa1I',
        place: {
          placeId: 1,
          placeName: '이선장네',
        },
      },
      {
        videoId: 2,
        videoAlias: '풍자가 기절한 바로 그곳',
        videoUrl: 'https://youtu.be/g5P0vpGSbng?si=RB71ZAx12kDas9a6',
        place: {
          placeId: 2,
          placeName: '풍자또가',
        },
      },
      {
        videoId: 3,
        videoAlias: '히밥이 다 못먹은 가성비 그곳',
        videoUrl: 'https://youtu.be/cz1EvePzqfM?si=L5ZsKV4DXikGIuEP',
        place: {
          placeId: 3,
          placeName: '가성비집',
        },
      },
    ]);
  }),
  http.get(`${BASE_URL}${getNewVideoPath()}`, () => {
    return HttpResponse.json([
      {
        videoId: 1,
        videoAlias: '성시경이 갔다가 못 돌아온 바로 그곳',
        videoUrl: 'https://youtu.be/qbqquv_8wM0?si=j7LiU5DSfTVpKa1I',
        place: {
          placeId: 1,
          placeName: '이선장네',
        },
      },
      {
        videoId: 2,
        videoAlias: '풍자가 기절한 바로 그곳',
        videoUrl: 'https://youtu.be/g5P0vpGSbng?si=RB71ZAx12kDas9a6',
        place: {
          placeId: 2,
          placeName: '참조은식당',
        },
      },
      {
        videoId: 3,
        videoAlias: '히밥이 다 못먹은 가성비 그곳',
        videoUrl: 'https://youtu.be/cz1EvePzqfM?si=L5ZsKV4DXikGIuEP',
        place: {
          placeId: 3,
          placeName: '많이줘',
        },
      },
    ]);
  }),
  http.get(`${BASE_URL}${getInfluencerVideoPath()}`, () => {
    return HttpResponse.json([
      {
        videoId: 1,
        videoAlias: '성시경이 갔다가 못 돌아온 바로 그곳',
        videoUrl: 'https://youtu.be/qbqquv_8wM0?si=j7LiU5DSfTVpKa1I',
        place: {
          placeId: 1,
          placeName: '이선장네',
        },
      },
      {
        videoId: 2,
        videoAlias: '풍자가 기절한 바로 그곳',
        videoUrl: 'https://youtu.be/qbqquv_8wM0?si=j7LiU5DSfTVpKa1I',
        place: {
          placeId: 2,
          placeName: '참조은식당',
        },
      },
    ]);
  }),
  http.get(`${BASE_URL}${getInfluencerPath()}`, () => {
    return HttpResponse.json([
      {
        influencerId: 1,
        influencerName: '이하늬',
        influencerImgUrl: 'https://via.placeholder.com/100',
        influencerJob: '모델',
        likes: true,
      },
      {
        influencerId: 2,
        influencerName: '박서준',
        influencerImgUrl: 'https://via.placeholder.com/100',
        influencerJob: '배우',
        likes: false,
      },
      {
        influencerId: 3,
        influencerName: '아이유',
        influencerImgUrl: 'https://via.placeholder.com/100',
        influencerJob: '가수',
        likes: false,
      },
      {
        influencerId: 4,
        influencerName: '이영자',
        influencerImgUrl: 'https://via.placeholder.com/100',
        influencerJob: '방송인',
        likes: false,
      },
      {
        influencerId: 5,
        influencerName: '정해인',
        influencerImgUrl: 'https://via.placeholder.com/100',
        influencerJob: '배우',
        likes: false,
      },
      {
        influencerId: 7,
        influencerName: '정해인',
        influencerImgUrl: 'https://via.placeholder.com/100',
        influencerJob: '배우',
        likes: false,
      },
      {
        influencerId: 8,
        influencerName: '정해인',
        influencerImgUrl: 'https://via.placeholder.com/100',
        influencerJob: '배우',
        likes: true,
      },
      {
        influencerId: 9,
        influencerName: '정해인',
        influencerImgUrl: 'https://via.placeholder.com/100',
        influencerJob: '배우',
        likes: false,
      },
    ]);
  }),
];
export default mainHandlers;
