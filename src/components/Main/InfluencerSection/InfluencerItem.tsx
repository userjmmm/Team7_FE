import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { MdLocationOn } from 'react-icons/md';
import { Paragraph } from '@/components/common/typography/Paragraph';
import backCard from '@/assets/images/back-card.png';
import { InfluencerData } from '@/types';

export default function InfluencerItem({
  influencerId,
  influencerName,
  influencerImgUrl,
  influencerJob,
}: InfluencerData) {
  return (
    <Wrapper to={`/influencer/${influencerId}`}>
      <ImageContainer>
        <FrontImage src={influencerImgUrl} alt={influencerName} />
        <BackImageWrapper>
          <MdLocationOn size={50} color="#55EBFF" />
          <Paragraph size="m" variant="white" weight="bold">
            지도 보기
          </Paragraph>
        </BackImageWrapper>
      </ImageContainer>
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

const ImageContainer = styled.div`
  width: 168px;
  height: 208px;
  position: relative;
  border-radius: 6px;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${Wrapper}:hover & {
    transform: rotateY(180deg);
  }
`;

const FrontImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  object-fit: cover;
  margin-bottom: 8px;
  border-radius: 6px;
`;

const BackImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${backCard});
  background-size: cover;
  background-position: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  border-radius: 6px;
`;
