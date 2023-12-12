'use client';

import styled from '@emotion/styled';
import {
  CurrencyDollar,
  ThermometerSimple,
  WifiNone,
} from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../heading';

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  img {
    z-index: -1;
    object-fit: cover;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  font-size: var(--text-xs);
  color: #fff;
  background: linear-gradient(transparent, #000);
`;

const Label = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap || 2}px;
  align-items: center;
  justify-content: center;
`;

interface CityCardProps {
  src: string;
  countryCode: string;
  title: string;
  description: string;
  temperatureLow: number;
  temperatureHigh: number;
  internetSpeed: number;
  costOfLiving: number;
}

export default function CityCard({
  src,
  countryCode,
  title,
  description,
  temperatureLow,
  temperatureHigh,
  internetSpeed,
  costOfLiving,
}: CityCardProps) {
  return (
    <Wrapper href={`/explore/city`}>
      <ImageWrapper>
        <Image src={src} fill alt={title} />
        <Text>
          <Label>
            <ThermometerSimple size={16} />
            {temperatureLow}°/{temperatureHigh}°
          </Label>
          <Label gap={4}>
            <WifiNone size={16} weight="fill" />
            {internetSpeed}
          </Label>
          <Label>
            <CurrencyDollar size={16} />
            {costOfLiving.toLocaleString()}
          </Label>
        </Text>
      </ImageWrapper>
      <Heading
        title={title}
        count={123}
        countryCode={countryCode}
        description={description}
      />
    </Wrapper>
  );
}
