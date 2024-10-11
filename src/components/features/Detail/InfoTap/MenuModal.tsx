import { useState } from 'react';
import { BsCardImage } from 'react-icons/bs';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import styled from 'styled-components';

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react';

export default function MenuModal({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <ImageWrapper>
        <BsCardImage size={26} color="white" onClick={() => openModal(0)} />
        {images.slice(0, 2).map((src, index) => (
          <Image
            src={src}
            alt={`Menu Image ${index + 1}`}
            onClick={() => openModal(index)}
            style={{ width: '525px' }}
            cursor="pointer"
          />
        ))}
      </ImageWrapper>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent
          maxWidth="800px"
          alignItems="center"
          backgroundColor="white"
          height="700px"
          margin="50px auto"
          position="relative"
        >
          <ModalHeader padding="20px 0px" fontSize="20px">
            Menu {currentImageIndex + 1}/{images.length}
          </ModalHeader>
          <ModalCloseButton
            position="absolute"
            right={20}
            top={20}
            background="none"
            border="none"
            fontSize="20px"
            color="grey"
            cursor="pointer"
          />
          <ModalBody display="flex" justifyContent="center" width="90%" height="70%">
            <Button onClick={prevImage}>
              <GrFormPrevious size={30} color="grey" />
            </Button>
            <Image
              src={images[currentImageIndex]}
              alt={`Menu Image ${currentImageIndex + 1}`}
              width="100%"
              height="auto"
              objectFit="cover"
            />
            <Button onClick={nextImage}>
              <GrFormNext size={30} color="grey" />
            </Button>
          </ModalBody>
          <ThumbnailWrapper>
            <ThumbnailContainer>
              {images.map((src, index) => (
                <Thumbnail
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  isActive={currentImageIndex === index}
                />
              ))}
            </ThumbnailContainer>
          </ThumbnailWrapper>
        </ModalContent>
      </Modal>
    </>
  );
}
const ImageWrapper = styled.div`
  width: 1060px;
  display: flex;
  gap: 10px;
  height: 320px;
  position: relative;
  svg {
    position: absolute;
    right: 16px;
    bottom: 14px;
    cursor: pointer;
  }
`;
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const ThumbnailWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  margin-top: 10px;
  background-color: #f8f8f8;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Thumbnail = styled.img<{ isActive: boolean }>`
  width: 80px;
  aspect-ratio: 2/1.8;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? '2px solid #55ebff' : '2px solid transparent')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
  transition:
    border 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;
