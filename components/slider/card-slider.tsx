'use client';

import styled from '@emotion/styled';
import Slider from '../slider';
import Titlebar from '../titlebar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
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
