'use client';

import styled from '@emotion/styled';

const Wrapper = styled.button<{ primary?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  font-weight: ${({ primary }) => (primary ? 'bold' : '600')};
  color: ${({ primary }) =>
    primary ? 'var(--color-text-alt)' : 'var(--color-text)'};
  background-color: ${({ primary }) =>
    primary ? 'var(--color-primary)' : 'var(--color-secondary)'};
  border: none;
  border-radius: 16px;
  box-shadow: ${({ primary }) =>
    primary ? '0 2px 8px rgb(0 153 102 / 0.5)' : 'none'};
`;

interface ButtonProps {
  title: string;
  primary?: boolean;
}

export default function Button({ title, primary }: ButtonProps) {
  return <Wrapper primary={primary}>{title}</Wrapper>;
}
