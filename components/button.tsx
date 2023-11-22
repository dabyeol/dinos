'use client';

import styled from '@emotion/styled';

const Wrapper = styled.div<{ primary?: boolean }>`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ primary }) =>
    primary ? 'var(--color-primary)' : 'var(--color-secondary)'};
  border-radius: 16px;
  font-weight: bold;
  color: ${({ primary }) => (primary ? '#fff' : 'var(--color-heading)')};
  cursor: pointer;
  box-shadow: ${({ primary }) =>
    primary ? '0px 2px 8px 0px rgba(0, 153, 102, 0.5)' : 'none'};
`;

interface ButtonProps {
  title: string;
  primary?: boolean;
}

export default function Button({ title, primary }: ButtonProps) {
  return <Wrapper primary={primary}>{title}</Wrapper>;
}
