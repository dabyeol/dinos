'use client';

import styled from '@emotion/styled';
import { Compass, House, List, UsersThree } from '@phosphor-icons/react';
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
  return (
    <Wrapper>
      <Tab href="/" Icon={House} />
      <Tab href="/explore" Icon={Compass} />
      <Tab href="/community" Icon={UsersThree} />
      <Tab href="/list" Icon={List} />
    </Wrapper>
  );
}
