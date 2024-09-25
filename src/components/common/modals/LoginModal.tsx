import { FaComment } from 'react-icons/fa';

import styled from 'styled-components';

import { Paragraph } from '@/components/common/typography/Paragraph';
import { Text } from '@/components/common/typography/Text';

export default function LoginModal() {
  return (
    <ModalContainer>
      <CloseButton>X</CloseButton>
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
  );
}

const ModalContainer = styled.div`
  position: relative;
  width: 426px;
  height: 540px;
  background: #ffffff;
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
  justify-contnet: center;
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
