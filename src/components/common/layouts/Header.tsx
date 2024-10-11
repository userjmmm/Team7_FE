import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
import styled from 'styled-components';

import LoginModal from '@/components/common/modals/LoginModal';
import { Text } from '@/components/common/typography/Text';

import Logo from '@/assets/images/Logo.svg';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleLogout = () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoContainer>
          <LogoImage src={Logo} alt="인플레이스 로고" />
          <Text size="l" weight="bold" variant="mint">
            인플레이스
          </Text>
        </LogoContainer>
      </LogoLink>
      <Nav>
        {isLoggedIn ? (
          <>
            <NavItem to="/map">
              <Text size="xs" variant="white" weight="normal">
                지도
              </Text>
            </NavItem>
            <NavItem to="/influencer">
              <Text size="xs" variant="white" weight="normal">
                인플루언서
              </Text>
            </NavItem>
            <NavItem to="/my">
              <Text size="xs" variant="white" weight="normal">
                마이페이지
              </Text>
            </NavItem>
            <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
          </>
        ) : (
          <>
            <NavItem to="/map">
              <Text size="xs" variant="white" weight="normal">
                지도
              </Text>
            </NavItem>
            <NavItem to="/influencer">
              <Text size="xs" variant="white" weight="normal">
                인플루언서
              </Text>
            </NavItem>
            <LoginModal currentPath={location.pathname}>
              {(openModal) => <LoginButton onClick={openModal}>로그인</LoginButton>}
            </LoginModal>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
}

export const HEADER_HEIGHT = 80;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  box-sizing: border-box;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 22px;
  margin-right: 10px;
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
