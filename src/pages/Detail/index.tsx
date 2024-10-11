import { Suspense, useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import Button from '@/components/common/Button';
import { Text } from '@/components/common/typography/Text';
import InfoTap from '@/components/Detail/InfoTap';
import ReviewTap from '@/components/Detail/ReviewTap';
import VisitModal from '@/components/Detail/VisitModal';

import useExtractYoutubeVideoId from '@/libs/youtube/useExtractYoutube';
import { useGetPlaceInfo } from '@/api/hooks/useGetPlaceInfo';
import Loading from '@/components/common/layouts/Loading';

export default function DetailPage() {
  const [activeTab, setActiveTab] = useState<'info' | 'review'>('info');
  const [visitModal, setVisitModal] = useState(false);
  const { id } = useParams() as { id: string };
  const { data: infoData } = useGetPlaceInfo(id);
  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={`https://img.youtube.com/vi/${useExtractYoutubeVideoId(infoData.videoUrl)}/maxresdefault.jpg`}
          alt="장소사진"
        />
        <GradientOverlay />
        <TitleContainer>
          <Text size="26px" weight="bold" variant="white">
            {infoData.placeName}
          </Text>
          <ButtonWrapper>
            <Button
              variant="visit"
              style={{
                width: '120px',
                height: '30px',
                fontSize: '14px',
                fontWeight: 'bold',
                gap: '4px',
              }}
              onClick={() => setVisitModal(!visitModal)}
            >
              <RiKakaoTalkFill size={20} color="yellow" />
              방문할래요
            </Button>
            <a href={infoData.videoUrl}>
              <FaYoutube size={46} color="red" style={{ marginTop: '4px' }} />
            </a>
          </ButtonWrapper>
        </TitleContainer>
      </ImageContainer>
      <TapContainer>
        <Tap $active={activeTab === 'info'} onClick={() => setActiveTab('info')}>
          정보
        </Tap>
        <Tap $active={activeTab === 'review'} onClick={() => setActiveTab('review')}>
          리뷰
        </Tap>
      </TapContainer>
      <InfoContainer>
        {activeTab === 'info' ? (
          <InfoTap facilityInfo={infoData.facilityInfo} openHour={infoData.openHour} menuInfos={infoData.menuInfos} />
        ) : (
          <Suspense fallback={<Loading size={50} />}>
            <ReviewTap placeLikes={infoData.placeLikes} id={id} />
          </Suspense>
        )}
      </InfoContainer>
      {visitModal ? <VisitModal placeName={infoData.placeName} onClose={() => setVisitModal(false)} /> : null}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  aspect-ratio: 3 / 1;
  object-fit: cover;
  object-position: center;
  display: block;
`;
const TitleContainer = styled.div`
  position: absolute;
  width: 90%;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;
const Tap = styled.button<{ $active: boolean }>`
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ $active }) => ($active ? '#55ebff' : 'white')};
  border: none;
  border-bottom: 3px solid ${({ $active }) => ($active ? '#55ebff' : 'white')};
  background: none;
  cursor: pointer;
  transition:
    color 0.3s ease,
    border-bottom 0.3s ease;
`;
const TapContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const InfoContainer = styled.div`
  padding-top: 20px;
`;
const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.9) 100%);
  z-index: 9;
  pointer-events: none;
`;
