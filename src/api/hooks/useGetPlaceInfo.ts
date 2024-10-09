import { useSuspenseQuery } from '@tanstack/react-query';
import { PlaceInfo } from '@/types';
import { fetchInstance } from '../instance';

export const getPlaceInfoPath = (id: string) => `/place/${id}`;
export const getPlaceInfo = async (id: string) => {
  const response = await fetchInstance.get<PlaceInfo>(getPlaceInfoPath(id));
  return response.data;
};
export const useGetPlaceInfo = (id: string) => {
  return useSuspenseQuery({ queryKey: ['placeInfo', id], queryFn: () => getPlaceInfo(id) });
};
