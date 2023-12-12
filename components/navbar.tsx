'use client';

import styled from '@emotion/styled';
import {
  Compass,
  House,
  List,
  MapTrifold,
  UsersThree,
} from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import Tab from './tab';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
  background-color: var(--color-float);
  box-shadow: 0 -2px 8px rgb(0 0 0 / 10%);
`;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Wrapper>
      {pathname.startsWith('/city') ? (
        <>
          <Tab href="/city" Icon={House} title="도시" />
          <Tab href="/city/map" Icon={MapTrifold} title="지도" />
          <Tab href="/city/community" Icon={UsersThree} title="커뮤니티" />
          <Tab href="/city/list" Icon={List} title="목록" />
        </>
      ) : (
        <>
          <Tab href="/" Icon={House} title="도시" />
          <Tab href="/explore" Icon={Compass} title="탐색" />
          <Tab href="/community" Icon={UsersThree} title="커뮤니티" />
          <Tab href="/list" Icon={List} title="목록" />
        </>
      )}
    </Wrapper>
  );
}
