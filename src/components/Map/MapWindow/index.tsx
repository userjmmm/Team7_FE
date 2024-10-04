import { useState } from 'react';
import { FaUndoAlt } from 'react-icons/fa';
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

  const handleResetCenter = () => {
    if (map) {
      map.setCenter(new kakao.maps.LatLng(center.lat, center.lng));
    }
  };

  return (
    <MapContainer>
      <ButtonContainer>
        <Button onClick={handleSearchNearby} theme="mint" size="small" style={{ margin: '5px', fontSize: '16px' }}>
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
      <ResetButtonContainer>
        <Button
          onClick={handleResetCenter}
          theme="mint"
          size="small"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        >
          <FaUndoAlt />
        </Button>
      </ResetButtonContainer>
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

const ResetButtonContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 10;
`;
