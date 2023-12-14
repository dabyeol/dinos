'use client';

import styled from '@emotion/styled';
import { Icon } from '@phosphor-icons/react';
import { useState } from 'react';

const Wrapper = styled.button<{ selected?: boolean; color?: string }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ selected }) => (selected ? '#fff' : 'var(--color-description)')};
  background-color: ${({ selected, color }) =>
    selected ? color : 'var(--color-float)'};
  border: none;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
`;

interface LocationProps {
  Icon: Icon;
  title: string;
  color: string;
  select?: boolean;
}

export default function Location({
  Icon,
  title,
  color,
  select,
}: LocationProps) {
  const [selected, setSelected] = useState(select);

  return (
    <Wrapper
      selected={selected}
      onClick={() => setSelected(!selected)}
      color={color}
    >
      <Icon size={16} weight="fill" />
      {title}
    </Wrapper>
  );
}
