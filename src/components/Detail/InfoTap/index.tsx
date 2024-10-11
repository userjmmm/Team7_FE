import { useState } from 'react';

import styled from 'styled-components';

import { Paragraph } from '@/components/common/typography/Paragraph';

import FacilitySign from './FacilitySign';
import MenuList from './MenuList';
import MenuModal from './MenuModal';
import OpenHour from './OpenHour';
import { FacilityInfo, Menu, OpenHourData } from '@/types';
import { Text } from '@/components/common/typography/Text';

type Props = {
  facilityInfo: FacilityInfo;
  openHour: OpenHourData;
  menuInfos: {
    menuImgUrls: [string];
    menuList: [Menu];
    timeExp: Date;
  };
};
export default function InfoTap({ facilityInfo, openHour, menuInfos }: Props) {
  const [moreMenu, setMoreMenu] = useState(false);
  return (
    <Wrapper>
      <FacilitySign facilityInfo={facilityInfo} />
      <PeriodWrapper>
        <Paragraph size="s" weight="bold" variant="white">
          운영 시간
        </Paragraph>
        <OpenHour openHour={openHour} />
      </PeriodWrapper>
      <MenuWrapper>
        <TitleContainer>
          <Text size="s" weight="bold" variant="white">
            메뉴
          </Text>
          <Text size="xxs" weight="normal" variant="grey">
            업데이트 {new Date(menuInfos.timeExp).toLocaleDateString()}
          </Text>
        </TitleContainer>
        <MenuContainer>
          <MenuModal images={menuInfos.menuImgUrls} />
          <MenuList lists={menuInfos.menuList.slice(0, moreMenu ? menuInfos.menuList.length : 4)} />
          <MoreMenuBtn onClick={() => setMoreMenu(!moreMenu)}>{moreMenu ? '메뉴 접기' : '메뉴 더보기'}</MoreMenuBtn>
        </MenuContainer>
      </MenuWrapper>
      <Paragraph size="s" weight="bold" variant="white">
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
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
