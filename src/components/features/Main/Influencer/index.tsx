import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Text } from '@/components/common/typography/Text';

import InfluencerItem from './InfluencerItem';
import { InfluencerData } from '@/types';

export default function InfluencerSection({ influencers }: { influencers: InfluencerData[] }) {
  const navigate = useNavigate();
  return (
    <Container>
      <TitleContainer>
        <Text size="l" weight="bold">
          <Text size="xxl" weight="bold" variant="mint">
            인플루언서
          </Text>
          가 방문한 장소를 찾아볼까요?
        </Text>
        <MoreBtn onClick={() => navigate('/influencer')}>더보기</MoreBtn>
      </TitleContainer>
      <ListContainer>
        {influencers.map((influencer) => {
          return (
            <InfluencerItem
              key={influencer.influencerId}
              influencerId={influencer.influencerId}
              influencerName={influencer.influencerName}
              influencerImgUrl={influencer.influencerImgUrl}
              influencerJob={influencer.influencerJob}
            />
          );
        })}
      </ListContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  color: white;
`;
const MoreBtn = styled.button`
  font-size: 18px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
`;
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
