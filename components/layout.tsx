'use client';

import styled from '@emotion/styled';
import Navbar from './navbar';
import Topbar from './topbar';

const Wrapper = styled.div`
  margin: 64px 0 calc(56px + env(safe-area-inset-bottom));
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Topbar />
      {children}
      <Navbar />
    </Wrapper>
  );
}
