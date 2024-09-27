import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Text } from '@/components/common/typography/Text';

import InfluencerSection from './InfluencerSection';
import SpotSection from './SpotSection';
import { InfluencerData, SpotData } from '@/types';

type Props = {
  type: string;
  prevSubText?: string;
  mainText: string;
  SubText: string;
  items: InfluencerData[] | SpotData[];
};

export default function BaseLayout({ type, prevSubText = '', mainText, SubText, items }: Props) {
  const navigate = useNavigate();
  return (
    <Container>
      <TitleContainer>
        <Text size="l" weight="bold">
          {prevSubText || ''}
          <Text size="xxl" weight="bold" variant="mint">
            {mainText}
          </Text>
          {SubText}
        </Text>
        {type === 'influencer' ? <MoreBtn onClick={() => navigate('/influencer')}>더보기</MoreBtn> : null}
      </TitleContainer>
      {type === 'influencer' ? (
        <InfluencerSection items={items as InfluencerData[]} />
      ) : (
        <SpotSection items={items as SpotData[]} />
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
