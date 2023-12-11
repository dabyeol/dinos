'use client';

import styled from '@emotion/styled';
import Titlebar from '../titlebar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
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
