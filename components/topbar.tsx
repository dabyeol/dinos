'use client';

import { getUnsplashUrl } from '@/lib/utils';
import styled from '@emotion/styled';
import { CaretDown, MagnifyingGlass } from '@phosphor-icons/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ListIcon from './list-icon';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 24px;
  overflow: hidden;
  background-color: var(--color-float);
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`;

const Selected = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Profile = styled(Image)`
  border-radius: 100%;
  object-fit: cover;
`;

export default function Topbar() {
  const pathname = usePathname();

  return (
    <Wrapper>
      <Left>
        <Selected>
          {pathname.startsWith('/city') ? (
            <ListIcon
              title="방콕"
              description="23.11.12 ~ 23.12.11"
              countryCode="th"
            />
          ) : (
            <ListIcon title="탐색" />
          )}
          <CaretDown size={16} weight="bold" color="var(--color-description)" />
        </Selected>
      </Left>
      <Right>
        <MagnifyingGlass size={20} />
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
