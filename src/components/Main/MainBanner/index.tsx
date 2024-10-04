import { useState } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';

import styled from 'styled-components';

import BannerItem from '@/components/Main/MainBanner/BannerItem';

import { BannerData } from '@/types';

export default function MainBanner({ items }: { items: BannerData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBtnPrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleBtnNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };
  return (
    <Container>
      <PrevBtn onClick={handleBtnPrevClick} disabled={currentIndex === 0}>
        <GrPrevious size={40} />
      </PrevBtn>
      <NextBtn onClick={handleBtnNextClick} disabled={currentIndex === items.length - 1}>
        <GrNext size={40} />
      </NextBtn>
      <CarouselContainer>
        {items.length > 0 && (
          <BannerItem
            key={items[currentIndex].bannerId}
            bannerId={items[currentIndex].bannerId}
            placeId={items[currentIndex].placeId}
            description={items[currentIndex].description}
            bannerImg={items[currentIndex].bannerImg}
            title={items[currentIndex].title}
          />
        )}
      </CarouselContainer>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const PrevBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 10px;
  z-index: 1;
  color: white;
`;

const NextBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  z-index: 1;
  color: white;
`;

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
