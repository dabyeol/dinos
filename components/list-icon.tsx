'use client';

import styled from '@emotion/styled';
import CircleFlag from './circle-flag';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Description = styled.div`
  font-size: var(--text-2xs);
  font-weight: 500;
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
