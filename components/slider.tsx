'use client';

import styled from '@emotion/styled';

const Wrapper = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap || 16}px;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  padding: 24px;
  margin: -24px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface SliderProps {
  gap?: number;
  children: React.ReactNode;
}

export default function Slider({ gap, children }: SliderProps) {
  return <Wrapper gap={gap}>{children}</Wrapper>;
}
