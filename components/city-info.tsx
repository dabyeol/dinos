'use client';

import styled from '@emotion/styled';
import { Icon } from '@phosphor-icons/react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-description);
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

interface CityInfoProps {
  Icon: Icon;
  title: string;
  value: string;
}

export default function CityInfo({ Icon, title, value }: CityInfoProps) {
  return (
    <Wrapper>
      <Left>
        <Icon size={16} />
        <div>{title}</div>
      </Left>
      {value}
    </Wrapper>
  );
}
