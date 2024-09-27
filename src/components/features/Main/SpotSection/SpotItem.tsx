import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Paragraph } from '@/components/common/typography/Paragraph';

import { SpotData } from '@/types';

function extractYoutubeVideoId(url: string) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w-]*)(&(amp;)?[\w?=]*)?/);
  return match && match[1] ? match[1] : null;
}

export default function SpotItem({ videoId, videoAlias, videoUrl, place }: SpotData) {
  return (
    <Wrapper to={`/detail/${place.placeId}`}>
      <Image
        src={`https://img.youtube.com/vi/${extractYoutubeVideoId(videoUrl)}/maxresdefault.jpg`}
        alt={String(videoId)}
      />
      <Paragraph size="l" weight="bold" variant="white">
        {videoAlias}
      </Paragraph>
      <Paragraph size="m" weight="normal" variant="white">
        <FaMapMarkerAlt size={20} color="#55EBFF" />
        {place.placeName}
      </Paragraph>
    </Wrapper>
  );
}
const Wrapper = styled(Link)`
  width: 426px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-content: end;
  line-height: 30px;

  svg {
    margin-right: 2px;
  }
`;

const Image = styled.img`
  width: 426px;
  height: 240px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 6px;
`;
