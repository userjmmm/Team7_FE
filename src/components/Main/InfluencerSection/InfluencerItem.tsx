import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Paragraph } from '@/components/common/typography/Paragraph';

import { InfluencerData } from '@/types';

export default function InfluencerItem({
  influencerId,
  influencerName,
  influencerImgUrl,
  influencerJob,
}: InfluencerData) {
  return (
    <Wrapper to={`/influencer/${influencerId}`}>
      <Image src={influencerImgUrl} alt={influencerName} />
      <Paragraph size="m" weight="bold" variant="white">
        {influencerName}
      </Paragraph>
      <Paragraph size="xs" weight="normal" variant="white">
        {influencerJob}
      </Paragraph>
    </Wrapper>
  );
}
const Wrapper = styled(Link)`
  width: 170px;
  height: 278px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 30px;
`;

const Image = styled.img`
  width: 168px;
  height: 208px;
  object-fit: cover;
  margin-bottom: 8px;
  border-radius: 6px;
`;
