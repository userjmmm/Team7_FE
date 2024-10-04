import { useState } from 'react';

import styled from 'styled-components';

import { Paragraph } from '@/components/common/typography/Paragraph';

import FacilitySign from './FacilitySign';
import MenuList from './MenuList';
import MenuModal from './MenuModal';
import OpenHour from './OpenHour';

const menuImgUrls = [
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/700',
];
const menuList = [
  {
    price: 14000,
    recommend: false,
    menu: '국내산 돼지 안심을 료코만의',
  },
  {
    price: 3000,
    recommend: false,
    menu: '리조또',
  },
  {
    price: 14000,
    recommend: false,
    menu: '국내산 돼지 안심을 료코만의 방식으로 숙성 및 조리하여 육즙과 부드러움의 특징을 살린 메뉴',
  },
  {
    price: 3000,
    recommend: false,
    menu: '리조또',
  },
];
const time = {
  periodList: [
    {
      timeName: '영업시간',
      timeSE: '10:00 - 22:00',
      dayOfWeek: '월',
    },
    {
      timeName: '영업시간',
      timeSE: '10:00 - 22:00',
      dayOfWeek: '화',
    },
    {
      timeName: '영업시간',
      timeSE: '10:00 - 22:00',
      dayOfWeek: '수',
    },
    {
      timeName: '영업시간',
      timeSE: '10:00 - 22:00',
      dayOfWeek: '목',
    },
    {
      timeName: '영업시간',
      timeSE: '10:00 - 22:00',
      dayOfWeek: '금',
    },
  ],
  offdayList: [
    {
      holidayName: '공휴일',
      weekAndDay: '토',
      temporaryHolidays: 'N',
    },
  ],
};
export default function InfoTap() {
  const [moreMenu, setMoreMenu] = useState(false);
  return (
    <Wrapper>
      <FacilitySign
        facilityInfo={{
          wifi: true,
          pet: true,
          parking: true,
          forDisabled: true,
          nursery: true,
          smokingRoom: true,
        }}
      />
      <PeriodWrapper>
        <Paragraph size="m" weight="bold" variant="white">
          운영 시간
        </Paragraph>
        <OpenHour openHour={time} />
      </PeriodWrapper>
      <MenuWrapper>
        <Paragraph size="m" weight="bold" variant="white">
          메뉴
        </Paragraph>
        <MenuContainer>
          <MenuModal images={menuImgUrls} />
          <MenuList lists={menuList.slice(0, moreMenu ? menuList.length : 4)} />
          <MoreMenuBtn onClick={() => setMoreMenu(!moreMenu)}>{moreMenu ? '메뉴 접기' : '메뉴 더보기'}</MoreMenuBtn>
        </MenuContainer>
      </MenuWrapper>
      <Paragraph size="m" weight="bold" variant="white">
        지도 보기
      </Paragraph>
      {/* todo - <Map /> */}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const MenuWrapper = styled.div``;
const PeriodWrapper = styled.div``;
const MenuContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MoreMenuBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  padding-top: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
