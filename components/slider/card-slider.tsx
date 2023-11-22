'use client';

import styled from '@emotion/styled';
import Titlebar from '../titlebar';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
`;

const Slider = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: -24px;
  padding: 24px;
  overflow: auto;
  gap: 16px;
`;

interface CardSliderProps {
  title?: string;
  children: React.ReactNode;
}

export default function CardSlider({ title, children }: CardSliderProps) {
  return (
    <Wrapper>
      {title && <Titlebar title={title} small />}
      <Slider>{children}</Slider>
    </Wrapper>
  );
}
