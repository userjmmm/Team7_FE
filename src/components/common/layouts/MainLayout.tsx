import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import Footer from './Footer';
import Header, { HEADER_HEIGHT } from './Header';

export default function MainLayout() {
  return (
    <Wrapper>
      <Header />
      <InnerWrapper>
        <Outlet />
        <Footer />
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
`;

const InnerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: ${HEADER_HEIGHT}px;
`;
