import { Map } from 'react-kakao-maps-sdk';

export default function MapWindow() {
  const center = {
    lat: 35.889062,
    lng: 128.610283,
  };

  return <Map center={center} style={{ width: '100%', height: '570px' }} level={4} />;
}
