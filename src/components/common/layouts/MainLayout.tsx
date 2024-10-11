import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header, { HEADER_HEIGHT } from './Header';
import Loading from './Loading';

export default function MainLayout() {
  return (
    <Wrapper>
      <Header />
      <InnerWrapper>
        <Suspense fallback={<Loading size={50} />}>
          <Outlet />
        </Suspense>
        <Footer />
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  position: relative;
`;

const InnerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: calc(${HEADER_HEIGHT}px + 26px);
`;
