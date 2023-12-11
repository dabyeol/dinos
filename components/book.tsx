'use client';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 180px;
  margin-right: 4px;
`;

const Paper = styled.div<{ index: number }>`
  position: absolute;
  top: ${({ index }) => index * 2}px;
  bottom: ${({ index }) => index * 2}px;
  left: ${({ index }) => index * 2}px;
  z-index: ${({ index }) => -index};
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
`;

const Cover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  text-align: left;
  background-color: ${({ color }) => color};
  border-radius: 8px;
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;
  line-height: 1.4;
  color: #fff;
  text-align: left;
`;

interface BookProps {
  title: string;
  color: string;
}

export default function Book({ title, color }: BookProps) {
  return (
    <Wrapper>
      {[...Array(3)].map((_, index) => (
        <Paper key={index} index={index} />
      ))}
      <Cover color={color}>
        <Title>{title}</Title>
      </Cover>
    </Wrapper>
  );
}
