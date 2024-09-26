import { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaComment } from 'react-icons/fa';

import styled from 'styled-components';

import { Paragraph } from '@/components/common/typography/Paragraph';
import { Text } from '@/components/common/typography/Text';

type LoginModalProps = {
  children: (openModal: () => void) => React.ReactNode;
};

export default function LoginModal({ children }: LoginModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  if (!isOpen) {
    return children(openModal);
  }

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Logo src="src/assets/images/Logo.svg" alt="인플레이스 로고" />
        <TitleWrapper>
          <Paragraph size="xl" weight="bold">
            인 플레이스
          </Paragraph>
        </TitleWrapper>
        <KakaoLoginButton>
          <FaComment />
          <span>
            <Text size="s" weight="normal">
              카카오 로그인
            </Text>
          </span>
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
`;

const ModalContainer = styled.div`
  position: relative;
  width: 426px;
  height: 540px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const Logo = styled.img`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
`;

const TitleWrapper = styled.div`
  position: absolute;
  left: 30%;
  right: 30%;
  top: 46%;
  text-align: center;
`;

const KakaoLoginButton = styled.button`
  position: absolute;
  left: 4%;
  right: 4%;
  top: 68%;
  bottom: 20%;
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
