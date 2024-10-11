import { useMutation } from '@tanstack/react-query';

import { fetchInstance } from '../instance';
import { RequestInfluencerLike } from '@/types';

export const postInfluencerLikePath = () => `/influencers/likes`;
const postInfluencerLike = async ({ influencerId, likes }: RequestInfluencerLike) => {
  const response = await fetchInstance.post(postInfluencerLikePath(), {
    influencerId,
    likes,
  });
  return response.data;
};

export const usePostInfluencerLike = () => {
  return useMutation({
    mutationFn: ({ influencerId, likes }: RequestInfluencerLike) => postInfluencerLike({ influencerId, likes }),
  });
};
