'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import CircleFlag from './circle-flag';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Icon = styled(Image)`
  border-radius: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  color: var(--color-heading);
  font-weight: 700;
`;

const Description = styled.div`
  font-size: var(--text-2xs);
  font-weight: 600;
  color: var(--color-description);
`;

interface ListIconProps {
  title: string;
  description?: string;
  countryCode?: string;
}

export default function ListIcon({
  title,
  description,
  countryCode,
}: ListIconProps) {
  return (
    <Wrapper>
      <CircleFlag countryCode={countryCode} size={32} />
      <div>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </div>
    </Wrapper>
  );
}
