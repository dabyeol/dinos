'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled(Link)`
  position: relative;
  z-index: 0;
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 144px;
  height: 144px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`;

const Background = styled(Image)`
  position: absolute;
  object-fit: cover;
  z-index: -1;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 12px;
  background: linear-gradient(transparent, #000);
`;

const Description = styled.div`
  width: 100%;
  font-size: var(--text-xs);
  font-weight: 500;
  color: #eee;
`;

const Title = styled.div`
  width: 100%;
  font-size: var(--text-sm);
  font-weight: 600;
  color: #fff;
`;

interface ImageCardRectProps {
  title: string;
  description?: string;
  src: string;
}

export default function ImageCardRect({
  title,
  description,
  src,
}: ImageCardRectProps) {
  return (
    <Wrapper href="/explore/city">
      <Background src={src} width={144} height={144} alt="title" />
      <Text>
        <Description>{description}</Description>
        <Title>{title}</Title>
      </Text>
    </Wrapper>
  );
}
