'use client';

import { Container, Section } from '@/lib/styles';
import Image from 'next/image';

import PlaceCard from '@/components/card/place-card';
import Location from '@/components/location';
import Slider from '@/components/slider';
import { getUnsplashUrl } from '@/lib/utils';
import styled from '@emotion/styled';
import {
  Buildings,
  Coffee,
  FirstAid,
  FlagPennant,
  ForkKnife,
  Heart,
  MagnifyingGlass,
  ShoppingCart,
  Tent,
} from '@phosphor-icons/react';

const MapImage = styled(Image)`
  z-index: -1;
  object-fit: cover;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  font-weight: 500;
  color: var(--color-description);
  background-color: var(--color-float);
  border-radius: 16px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`;

export default function Map() {
  return (
    <Container
      style={{
        padding: '24px 16px',
        justifyContent: 'space-between',
        height: 'calc(100vh - 64px - 56px - env(safe-area-inset-bottom))',
      }}
    >
      <MapImage src="/images/map.png" fill alt="map" />

      <Slider gap={12} padding={16}>
        <Location Icon={Heart} title="찜" color="var(--color-heart)" />
        <Location Icon={Coffee} title="카페" color="#c62" select />
        <Location Icon={Buildings} title="공유오피스" color="#0af" select />
        <Location Icon={ForkKnife} title="음식점" color="#f70" select />
        <Location Icon={FlagPennant} title="여행지" color="#0c8" select />
        <Location Icon={ShoppingCart} title="마트" color="#a0f" select />
        <Location Icon={FirstAid} title="약국/병원" color="#f33" select />
        <Location Icon={Tent} title="숙소" color="#fa0" select />
      </Slider>

      <Section style={{ gap: 16 }}>
        <Search>
          <MagnifyingGlass size={24} />
          검색
        </Search>
        <PlaceCard
          src={getUnsplashUrl('clBJIFl1p0E')}
          title="WeWork Asia Centre"
          description="공유오피스"
        />
      </Section>
    </Container>
  );
}
