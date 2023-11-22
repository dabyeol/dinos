'use client';

import { getUnsplashUrl } from '@/lib/utils';
import styled from '@emotion/styled';
import { CaretDown, MagnifyingGlass } from '@phosphor-icons/react';
import Image from 'next/image';
import ListIcon from './list-icon';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background-alt);
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`;

const Selected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Profile = styled(Image)`
  border-radius: 100%;
  object-fit: cover;
`;

export default function Topbar() {
  return (
    <Wrapper>
      <Left>
        <Selected>
          <ListIcon title="탐색" />
          <CaretDown size={16} weight="bold" color="var(--color-description)" />
        </Selected>
      </Left>
      <Right>
        <MagnifyingGlass size={20} color="var(--color-heading)" />
        <Profile
          src={getUnsplashUrl('8Vt2haq8NSQ')}
          width={32}
          height={32}
          alt="Profile"
          priority
        />
      </Right>
    </Wrapper>
  );
}
