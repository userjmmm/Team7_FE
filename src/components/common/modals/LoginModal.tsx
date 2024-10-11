import { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaComment } from 'react-icons/fa';

import styled from 'styled-components';

import { Paragraph } from '@/components/common/typography/Paragraph';
import { Text } from '@/components/common/typography/Text';

import Logo from '@/assets/images/Logo.svg';

import { BASE_URL } from '@/api/instance';

type LoginModalProps = {
  children: (openModal: () => void) => React.ReactNode;
  currentPath: string;
};

export default function LoginModal({ children, currentPath }: LoginModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleKakaoLogin = () => {
    localStorage.setItem('redirectPath', currentPath);
    window.location.href = `${BASE_URL}/oauth2/authorization/kakao`;
  };

  if (!isOpen) {
    return children(openModal);
  }

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <TitleWrapper>
          <LogoImage src={Logo} alt="인플레이스 로고" />
          <Paragraph size="l" weight="bold">
            인플레이스
          </Paragraph>
        </TitleWrapper>
        <KakaoLoginButton onClick={handleKakaoLogin}>
          <FaComment />
          <Text size="s" weight="normal">
            카카오 로그인
          </Text>
        </KakaoLoginButton>
      </ModalContainer>
    </ModalOverlay>,
    document.body,
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 4%;
  top: 4%;
  font-weight: 700;
  font-size: 32px;
  color: #4e4e4e;
  background: none;
  border: none;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 100px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const KakaoLoginButton = styled.button`
  width: 80%;
  height: 60px;
  background: #fee500;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  svg {
    width: 22px;
    height: 22px;
    margin-right: 8px;
    flex-shrink: 0;
  }

  span {
    flex-grow: 1;
    text-align: center;
  }
`;
