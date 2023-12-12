'use client';

import styled from '@emotion/styled';
import { Icon } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Wrapper = styled(Link)<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 12px;
  font-size: var(--text-2xs);
  font-weight: 600;
  color: ${({ selected }) =>
    selected ? 'var(--color-primary)' : 'var(--color-description)'};
`;

interface TabProps {
  Icon: Icon;
  href: string;
  title: string;
}

export default function Tab({ Icon, href, title }: TabProps) {
  const pathname = usePathname();

  return (
    <Wrapper
      href={href}
      selected={
        pathname === href ||
        (href !== '/' && href !== '/city' && pathname.startsWith(href))
      }
    >
      <Icon size={24} weight="fill" />
      {title}
    </Wrapper>
  );
}
