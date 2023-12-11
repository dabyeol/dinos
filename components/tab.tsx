'use client';

import styled from '@emotion/styled';
import { Icon } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Wrapper = styled(Link)<{ selected?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  color: ${({ selected }) =>
    selected ? 'var(--color-primary)' : 'var(--color-description)'};
`;

interface TabProps {
  Icon: Icon;
  href: string;
}

export default function Tab({ Icon, href }: TabProps) {
  const pathname = usePathname();

  return (
    <Wrapper href={href} selected={pathname === href}>
      <Icon size={24} weight="fill" />
    </Wrapper>
  );
}
