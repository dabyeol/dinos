'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled.div`
  flex: none;
  width: 144px;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  z-index: 0;
`;

const Background = styled(Image)`
  position: absolute;
  object-fit: cover;
  z-index: -1;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  background: linear-gradient(transparent, black);
  gap: 4px;
`;

const Description = styled.div`
  width: 100%;
  font-size: var(--text-xs);
  font-weight: 600;
  color: #eee;
`;

const Title = styled.div`
  width: 100%;
  font-size: var(--text-sm);
  font-weight: 700;
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
    <Wrapper>
      <Background src={src} width={144} height={144} alt="title" />
      <Text>
        <Description>{description}</Description>
        <Title>{title}</Title>
      </Text>
    </Wrapper>
  );
}
