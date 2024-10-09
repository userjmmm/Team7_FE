import { useState, useCallback, useEffect } from 'react';
import { FaUndoAlt } from 'react-icons/fa';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import styled from 'styled-components';

import Button from '@/components/common/Button';

export default function MapWindow() {
  const [mapInstance, setMapInstance] = useState<kakao.maps.Map | null>(null);
  const [mapState, setMapState] = useState({
    center: {
      lat: 35.889062,
      lng: 128.610283,
    },
    errMsg: null as string | null,
    isLoading: true,
  });

  const handleSearchNearby = useCallback(() => {
    if (!mapInstance) return;

    const bounds = mapInstance.getBounds();
    const topLeftLongitude = bounds.getSouthWest().getLng();
    const topLeftLatitude = bounds.getNorthEast().getLat();
    const bottomRightLongitude = bounds.getNorthEast().getLng();
    const bottomRightLatitude = bounds.getSouthWest().getLat();

    const message = `북서쪽 좌표는 위도 ${topLeftLatitude}, 경도 ${topLeftLongitude} 이고 <br> 
                    남동쪽 좌표는 위도 ${bottomRightLatitude}, 경도 ${bottomRightLongitude} 입니다`;

    console.log(message);
  }, [mapInstance]);

  const handleResetCenter = () => {
    if (mapInstance) {
      mapInstance.setCenter(new kakao.maps.LatLng(mapState.center.lat, mapState.center.lng));
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMapState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setMapState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setMapState((prev) => ({
        ...prev,
        errMsg: '위치 정보를 사용할 수 없습니다.',
        isLoading: false,
      }));
    }
  }, []);

  return (
    <MapContainer>
      <ButtonContainer>
        <Button onClick={handleSearchNearby} theme="mint" size="small" style={{ margin: '5px', fontSize: '16px' }}>
          주변 찾기
        </Button>
      </ButtonContainer>
      <Map center={mapState.center} style={{ width: '100%', height: '100%' }} level={4} onCreate={setMapInstance}>
        {!mapState.isLoading && <MapMarker position={mapState.center} />}
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
