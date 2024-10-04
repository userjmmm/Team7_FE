import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import styled from 'styled-components';

import Button from '@/components/common/Button';

export default function MapWindow() {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const center = {
    lat: 35.889062,
    lng: 128.610283,
  };

  const handleSearchNearby = () => {
    // 변경 예정
    if (map) {
      const currentCenter = map.getCenter();
      console.log('현재 중심 좌표:', currentCenter.getLat(), currentCenter.getLng());
    }
  };

  return (
    <MapContainer>
      <ButtonContainer>
        <Button
          onClick={handleSearchNearby}
          theme="mint"
          size="responsive"
          style={{ width: '160px', padding: '10px 20px', margin: '5px' }}
        >
          주변 찾기
        </Button>
      </ButtonContainer>
      <Map center={center} style={{ width: '100%', height: '100%' }} level={4} onCreate={setMap}>
        {map && (
          <MapMarker
            position={{
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            }}
          />
        )}
      </Map>
    </MapContainer>
  );
}

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 570px;
  padding: 10px 0;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;
