'use client';

import styled from '@emotion/styled';
import { Compass, House, List, UsersThree } from '@phosphor-icons/react';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background-alt);
  position: sticky;
  bottom: 0;
  z-index: 100;
  justify-self: flex-end;
`;

const Tab = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function Navbar() {
  return (
    <Wrapper>
      <Tab>
        <House size={32} weight="fill" color="var(--color-primary)" />
      </Tab>
      <Tab>
        <Compass size={32} weight="fill" color="var(--color-description)" />
      </Tab>
      <Tab>
        <UsersThree size={32} weight="fill" color="var(--color-description)" />
      </Tab>
      <Tab>
        <List size={32} weight="fill" color="var(--color-description)" />
      </Tab>
    </Wrapper>
  );
}
