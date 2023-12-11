'use client';

import styled from '@emotion/styled';
import CircleFlag from './circle-flag';
import Like from './like';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 6px;
  align-items: flex-end;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-size: var(--text-lg);
  font-weight: 600;
`;

const Description = styled.div`
  font-size: var(--text-sm);
  font-weight: 500;
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
