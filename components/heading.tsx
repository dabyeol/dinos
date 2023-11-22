'use client';

import styled from '@emotion/styled';
import CircleFlag from './circle-flag';
import Like from './like';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 6px;
`;

const Title = styled.div`
  font-size: var(--text-lg);
  font-weight: bold;
  color: var(--color-heading);
`;

const Description = styled.div`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-description);
`;

interface HeadingProps {
  title: string;
  description?: string;
  countryCode?: string;
  count: number;
}

export default function Heading({
  title,
  description,
  countryCode,
  count,
}: HeadingProps) {
  return (
    <Wrapper>
      <Left>
        {countryCode && <CircleFlag countryCode={countryCode} size={24} />}
        <Text>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </Text>
      </Left>
      <Like count={count} />
    </Wrapper>
  );
}
