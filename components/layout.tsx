'use client';

import styled from '@emotion/styled';
import Navbar from './navbar';
import Topbar from './topbar';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
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
