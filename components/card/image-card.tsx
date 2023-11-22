'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Heading from '../heading';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  aspect-ratio: 2 / 1;
  border-radius: 16px;

  img {
    object-fit: cover;
  }
`;

interface ImageCardProps {
  src: string;
  title: string;
}

export default function ImageCard({ src, title }: ImageCardProps) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={src} fill alt={title} />
      </ImageWrapper>
      <Heading title={title} count={123} />
    </Wrapper>
  );
}
