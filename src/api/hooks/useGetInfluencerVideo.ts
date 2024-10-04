import { useSuspenseQuery } from '@tanstack/react-query';

import { fetchInstance } from '../instance';
import { SpotData } from '@/types';

export const getInfluencerVideoPath = () => `/videos`;

export const getInfluencerVideo = async (influencers: string) => {
  const response = await fetchInstance.get<SpotData[]>(getInfluencerVideoPath(), {
    params: {
      influencers,
    },
  });
  return response.data;
};

export const useGetInfluencerVideo = (influencers: string) => {
  return useSuspenseQuery({
    queryKey: ['InfluencerVideo', influencers],
    queryFn: () => getInfluencerVideo(influencers),
  });
};
