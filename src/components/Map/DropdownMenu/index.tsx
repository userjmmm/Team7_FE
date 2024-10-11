import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';
import useDetectClose from '@/hooks/useDetectClose';

interface Option {
  label: string;
  lat?: number;
  lng?: number;
  subOptions?: Option[];
}

interface DropdownMenuProps {
  options: Option[];
  multiLevel?: boolean;
  onChange: (value: { main: string; sub?: string; lat?: number; lng?: number }) => void;
  placeholder?: string;
  type: 'location' | 'influencer';
}

export default function DropdownMenu({
  options,
  multiLevel = false,
  onChange,
  placeholder = '',
  type,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useDetectClose({ onDetected: () => setIsOpen(false) });
  const [selectedMainOption, setSelectedMainOption] = useState<Option | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<Option | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleMainOptionClick = (option: Option) => {
    setSelectedMainOption(option);
    setSelectedSubOption(null);
    onChange({ main: option.label, lat: option.lat, lng: option.lng });
    if (!multiLevel || !option.subOptions) {
      setIsOpen(false);
    }
  };

  const handleSubOptionClick = (subOption: Option) => {
    setSelectedSubOption(subOption);
    onChange({
      main: selectedMainOption!.label,
      sub: subOption.label,
      lat: subOption.lat,
      lng: subOption.lng,
    });
    setIsOpen(false);
  };

  const renderMainOptions = () => {
    return filteredOptions.map((option) => (
      <DropdownItem
        key={option.label}
        label={option.label}
        onClick={() => handleMainOptionClick(option)}
        type={type}
        isSelected={selectedMainOption === option}
      />
    ));
  };

  const renderSubOptions = () => {
    if (!selectedMainOption || !selectedMainOption.subOptions) return null;
    return selectedMainOption.subOptions.map((subOption) => (
      <DropdownItem
        key={subOption.label}
        label={subOption.label}
        onClick={() => handleSubOptionClick(subOption)}
        type={type}
      />
    ));
  };

  const displayValue = selectedSubOption
    ? `${selectedMainOption?.label} ${selectedSubOption?.label}`
    : selectedMainOption?.label || placeholder;

  return (
    <DropdownContainer ref={ref} type={type}>
      <DropdownButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {displayValue}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </DropdownButton>
      {isOpen && (
        <DropdownMenuContainer multiLevel={multiLevel} hasSubOptions={!!selectedMainOption?.subOptions}>
          <SearchInputContainer>
            <SearchInput placeholder="검색" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <SearchIcon />
          </SearchInputContainer>
          <OptionsContainer multiLevel={multiLevel} hasSubOptions={!!selectedMainOption?.subOptions}>
            <MainOptions>{renderMainOptions()}</MainOptions>
            {multiLevel && selectedMainOption?.subOptions && <SubOptions>{renderSubOptions()}</SubOptions>}
          </OptionsContainer>
        </DropdownMenuContainer>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div<{ type: 'location' | 'influencer' }>`
  position: relative;
  min-width: ${(props) => (props.type === 'location' ? '130px' : '200px')};
  max-width: ${(props) => (props.type === 'location' ? '400px' : '300px')};
`;

const DropdownButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 10px 14px;
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  color: #004cff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const DropdownMenuContainer = styled.div<{ multiLevel: boolean; hasSubOptions: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${(props) => (props.multiLevel && props.hasSubOptions ? '200%' : '100%')};
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 4px;
  max-height: 300px;
  z-index: 1000;
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-right: 30px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #004cff;
  cursor: pointer;
`;

const OptionsContainer = styled.div<{ multiLevel: boolean; hasSubOptions: boolean }>`
  display: flex;
  max-height: 250px;
  overflow-y: auto;
`;

const MainOptions = styled.div`
  flex: 1;
  max-height: 250px;
  overflow-y: auto;
`;

const SubOptions = styled.div`
  flex: 1;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  max-height: 250px;
  overflow-y: auto;
`;
