'use client';

import styled from '@emotion/styled';

const Wrapper = styled.div<{ gap?: number; padding?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap || 16}px;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  padding: ${({ padding }) => padding || 24}px;
  margin: -${({ padding }) => padding || 24}px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface SliderProps {
  gap?: number;
  padding?: number;
  children: React.ReactNode;
}

export default function Slider({ gap, padding, children }: SliderProps) {
  return (
    <Wrapper gap={gap} padding={padding}>
      {children}
    </Wrapper>
  );
}
