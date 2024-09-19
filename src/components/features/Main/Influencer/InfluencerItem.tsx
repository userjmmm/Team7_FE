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
      <Paragraph size="l" weight="bold" variant="white">
        {influencerName}
      </Paragraph>
      <Paragraph size="s" weight="normal" variant="white">
        {influencerJob}
      </Paragraph>
    </Wrapper>
  );
}
const Wrapper = styled(Link)`
  width: 216px;
  height: 356px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 30px;
`;

const Image = styled.img`
  width: 216px;
  height: 270px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 6px;
`;
