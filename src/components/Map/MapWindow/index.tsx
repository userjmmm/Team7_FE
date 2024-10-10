import { useState, useCallback, useEffect, useRef } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { TbCurrentLocation } from 'react-icons/tb';
import Button from '@/components/common/Button';
import { LocationData, PlaceInfo } from '@/types';

interface MapWindowProps {
  onBoundsChange: (bounds: LocationData) => void;
  places: PlaceInfo[];
  center: { lat: number; lng: number };
}

export default function MapWindow({ onBoundsChange, places, center }: MapWindowProps) {
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [mapCenter, setMapCenter] = useState(center);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const updateBounds = useCallback(() => {
    if (!mapRef.current) return;

    const bounds = mapRef.current.getBounds();
    const newBounds: LocationData = {
      topLeftLatitude: bounds.getNorthEast().getLat(),
      topLeftLongitude: bounds.getSouthWest().getLng(),
      bottomRightLatitude: bounds.getSouthWest().getLat(),
      bottomRightLongitude: bounds.getNorthEast().getLng(),
    };
    onBoundsChange(newBounds);
  }, [onBoundsChange]);

  const handleSearchNearby = useCallback(() => {
    updateBounds();
  }, [updateBounds]);

  const handleResetCenter = useCallback(() => {
    if (mapRef.current && userLocation) {
      mapRef.current.setCenter(new kakao.maps.LatLng(userLocation.lat, userLocation.lng));
      updateBounds();
    }
  }, [userLocation, updateBounds]);

  const handleCenterChanged = (map: kakao.maps.Map) => {
    const newCenter = map.getCenter();
    setMapCenter({
      lat: newCenter.getLat(),
      lng: newCenter.getLng(),
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newCenter = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setMapCenter(newCenter);
          setUserLocation(newCenter);
          if (mapRef.current) {
            mapRef.current.setCenter(new kakao.maps.LatLng(newCenter.lat, newCenter.lng));
            updateBounds();
          }
        },
        (err) => {
          console.error('Geolocation error:', err);
        },
      );
    } else {
      console.warn('Geolocation is not supported by this browser.');
    }
  }, [updateBounds]);

  useEffect(() => {
    setMapCenter(center);
    if (mapRef.current) {
      mapRef.current.setCenter(new kakao.maps.LatLng(center.lat, center.lng));
      updateBounds();
    }
  }, [center, updateBounds]);

  return (
    <MapContainer>
      <ButtonContainer>
        <Button onClick={handleSearchNearby} theme="mint" size="small" style={{ margin: '5px', fontSize: '16px' }}>
          주변 찾기
        </Button>
      </ButtonContainer>
      <Map
        center={mapCenter}
        style={{ width: '100%', height: '100%' }}
        level={4}
        onCreate={(map) => {
          mapRef.current = map;
        }}
        onCenterChanged={handleCenterChanged}
        onZoomChanged={updateBounds}
        onDragEnd={updateBounds}
      >
        {userLocation && (
          <MapMarker
            position={userLocation}
            image={{
              src: 'https://i.ibb.co/KKMSvsJ/pngwing-com.png',
              size: { width: 100, height: 80 },
            }}
          />
        )}
        {places.map((place) => {
          const lat = parseFloat(place.latitude);
          const lng = parseFloat(place.longitude);
          if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
          return <MapMarker key={place.placeId} position={{ lat, lng }} title={place.placeName} />;
        })}
      </Map>
      <ResetButtonContainer>
        <Button
          onClick={handleResetCenter}
          theme="white"
          size="small"
          style={{ width: '30px', height: '30px', boxShadow: '0px 2px 2px #707070' }}
        >
          <TbCurrentLocation size={20} />
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
