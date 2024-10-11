import { LuParkingCircle, LuParkingCircleOff, LuBaby } from 'react-icons/lu';
import { MdOutlinePets, MdSmokeFree, MdSmokingRooms } from 'react-icons/md';
import { TbDisabled } from 'react-icons/tb';
import styled from 'styled-components';
import { CiWifiOn, CiWifiOff } from 'react-icons/ci';
import { Paragraph } from '@/components/common/typography/Paragraph';
import { FacilityInfo } from '@/types';

const facilities = {
  wifi: {
    icon: { Y: <CiWifiOn size={34} color="white" />, N: <CiWifiOff size={46} color="white" /> },
    label: 'WIFI',
  },
  parking: {
    icon: {
      Y: <LuParkingCircle size={60} color="white" strokeWidth={1} />,
      N: <LuParkingCircleOff size={60} color="white" strokeWidth={1} />,
    },
    label: '주차',
  },
  pet: {
    icon: { Y: <MdOutlinePets size={34} color="white" />, N: null },
    label: '동물출입',
  },
  forDisabled: {
    icon: { Y: <TbDisabled size={34} color="white" strokeWidth={1} />, N: null },
    label: '휠체어사용',
  },
  nursery: {
    icon: { Y: <LuBaby size={34} color="white" strokeWidth={1} />, N: null },
    label: '유아시설',
  },
  smokingRoom: {
    icon: { Y: <MdSmokingRooms size={34} color="white" />, N: <MdSmokeFree size={34} color="white" /> },
    label: '흡연실',
  },
};

export default function FacilitySign({ facilityInfo }: { facilityInfo: FacilityInfo }) {
  return (
    <Wrapper>
      {Object.entries(facilities).map(([key, { icon, label }]) => {
        const iconElement = facilityInfo[key as keyof FacilityInfo] === 'Y' ? icon.Y : icon.N;
        if (iconElement === null) return null;
        return (
          <SignWrapper key={key}>
            {key === 'parking' ? iconElement : <Sign>{iconElement}</Sign>}
            <Paragraph size="xs" weight="normal" variant="white">
              {label}
            </Paragraph>
          </SignWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 18px;
`;

const Sign = styled.div`
  border: 3px solid white;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;

const SignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
  align-items: center;
`;
