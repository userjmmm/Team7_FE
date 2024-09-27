import { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import LoginModal from '@/components/common/modals/LoginModal';
import { Text } from '@/components/common/typography/Text';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="src/assets/images/Logo.svg" alt="인플레이스 로고" />
        <Text size="l" weight="bold" variant="mint">
          인 플레이스
        </Text>
      </LogoContainer>
      <Nav>
        {isLoggedIn ? (
          <>
            <NavItem to="/my">
              <Text size="s" variant="white" weight="normal">
                마이페이지
              </Text>
            </NavItem>
            <LoginButton onClick={handleLoginToggle}>로그아웃</LoginButton>
          </>
        ) : (
          <>
            <NavItem to="/influencer">
              <Text size="s" variant="white" weight="normal">
                인플루언서
              </Text>
            </NavItem>
            <LoginModal>{(openModal) => <LoginButton onClick={openModal}>로그인</LoginButton>}</LoginModal>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
}
export const HEADER_HEIGHT = 60;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #292929;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  cursor: pointer;
`;

const LoginButton = styled.div`
  margin-left: 20px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
`;
