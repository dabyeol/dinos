'use client';

import styled from '@emotion/styled';
import { Icon } from '@phosphor-icons/react';
import { useState } from 'react';

const Wrapper = styled.button<{ selected?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? '#fff' : 'var(--color-description)')};
  background-color: ${({ selected }) =>
    selected ? 'var(--color-primary)' : 'var(--color-secondary)'};
  border: none;
  border-radius: 8px;
`;

interface FilterProps {
  Icon: Icon;
  title: string;
}

export default function Filter({ Icon, title }: FilterProps) {
  const [selected, setSelected] = useState(false);

  return (
    <Wrapper selected={selected} onClick={() => setSelected(!selected)}>
      <Icon weight="fill" />
      <div>{title}</div>
    </Wrapper>
  );
}
