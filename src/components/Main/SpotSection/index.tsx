import styled from 'styled-components';

import SpotItem from './SpotItem';
import { SpotData } from '@/types';

export default function SpotSection({ items }: { items: SpotData[] }) {
  return (
    <ListContainer>
      {items.map((spot) => {
        return (
          <SpotItem
            key={spot.videoId}
            videoId={spot.videoId}
            videoAlias={spot.videoAlias}
            videoUrl={spot.videoUrl}
            place={spot.place}
          />
        );
      })}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 40px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
