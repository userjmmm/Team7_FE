import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '../typography/Text';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterNav>
          <NavItem to="/service">
            <Text size="xxs" weight="bold" variant="white">
              서비스 이용 약관
            </Text>
          </NavItem>
          <NavItem to="/privacy">
            <Text size="xxs" weight="bold" variant="white">
              개인정보 처리방침
            </Text>
          </NavItem>
          <NavItem to="/marketing">
            <Text size="xxs" weight="bold" variant="white">
              마케팅 수신 동의
            </Text>
          </NavItem>
          <NavItem to="/customer">
            <Text size="xxs" weight="bold" variant="white">
              고객센터
            </Text>
          </NavItem>
          <NavItem to="/business">
            <Text size="xxs" weight="bold" variant="white">
              비즈니스
            </Text>
          </NavItem>
        </FooterNav>
        <FooterInfo>
          <CompanyInfo>
            <Text size="xxs" weight="normal" variant="#979797">
              (주)방금 그곳
            </Text>
            <Text size="xxs" weight="normal" variant="#979797">
              Copyright 2024. banggeumgugot Co.,Ltd. All rights reserved
            </Text>
            <Text size="xxs" weight="normal" variant="#979797">
              주소 : 대구광역시 북구 대학로 80
            </Text>
            <Text size="xxs" weight="normal" variant="#979797">
              문의전화 : (053)123-12345 | 이메일 : abc@kakao.com
            </Text>
            <Text size="xxs" weight="normal" variant="#979797">
              대표전화 : (053)777-7777 | FAX : (053)123-4567
            </Text>
          </CompanyInfo>
          <SocialLinks>
            <SocialNavItem href="https://kakao.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="src/assets/images/kakao-icon.svg" alt="카카오톡" />
              <Text size="xxs" weight="normal" variant="white">
                카카오톡
              </Text>
            </SocialNavItem>
            <SocialNavItem href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="src/assets/images/insta-icon.svg" alt="인스타그램" />
              <Text size="xxs" weight="normal" variant="white">
                인스타그램
              </Text>
            </SocialNavItem>
            <SocialNavItem href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="src/assets/images/facebook-icon.svg" alt="페이스북" />
              <Text size="xxs" weight="normal" variant="white">
                페이스북
              </Text>
            </SocialNavItem>
          </SocialLinks>
        </FooterInfo>
      </FooterSection>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background: #2F2F2F;
  width: 100%;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const FooterInfo = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  align-items: flex-start;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  position: relative;
  top: 4px;
  flex-shrink: 0;
`;

const NavItem = styled(Link)`
  font-family: 'Merriweather', sans-serif;
  line-height: 24px;
  text-decoration: none;
`;

const SocialNavItem = styled.a`
  font-family: 'Merriweather', sans-serif;
  line-height: 24px;
  text-decoration: none;
`;