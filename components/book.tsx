'use client';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 120px;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 4px;
`;

const Paper = styled.div<{ index: number }>`
  width: 100%;
  top: ${({ index }) => index * 2}px;
  bottom: ${({ index }) => index * 2}px;
  left: ${({ index }) => index * 2}px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: ${({ index }) => -index};
  position: absolute;
  border-radius: 8px;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${({ color }) => color};
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  border-radius: 8px;
  text-align: left;
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;
  color: #fff;
  line-height: 1.4;
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
