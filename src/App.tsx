import { Route, Routes } from 'react-router-dom';

import MainLayout from '@/components/common/layouts/MainLayout';

import DetailPage from '@/pages/Detail';
import InfluencerPage from '@/pages/Influencer';
import MainPage from '@/pages/Main';
import MapPage from '@/pages/Map';
import MyPage from '@/pages/My';

import GlobalStyle from './global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="/influencer" element={<InfluencerPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/my" element={<MyPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
