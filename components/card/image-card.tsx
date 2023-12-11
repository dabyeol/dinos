'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Heading from '../heading';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

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
