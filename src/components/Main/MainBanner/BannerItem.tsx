import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { BannerData } from '@/types';

export default function BannerItem({ bannerId, placeId, description, bannerImg, title }: BannerData) {
  return (
    <Wrapper to={`/detail/${placeId}`}>
      <Image src={bannerImg} alt={`배너-${bannerId}번`} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}
const Wrapper = styled(Link)`
  width: 100%;
  flex: 0 0 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 100px;
  left: 50px;

  color: white;
  font-size: 46px;
  font-weight: bolder;
`;

const Description = styled.h1`
  position: absolute;
  bottom: 40px;
  left: 50px;

  font-size: 36px;
  font-weight: bolder;
  color: white;
`;
