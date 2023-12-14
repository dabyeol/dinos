'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Like from './like';
import Rating from './rating';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: stretch;
  justify-content: center;
  width: 100%;
`;

const Img = styled(Image)`
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  object-fit: cover;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.span`
  width: 100%;
  font-size: var(--text-lg);
  font-weight: 600;
`;

const Description = styled.span`
  width: 100%;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-description);
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

interface PlaceListProps {
  src: string;
  title: string;
  description: string;
}

export default function PlaceList({ src, title, description }: PlaceListProps) {
  return (
    <Wrapper>
      <Img src={src} width={64} height={64} alt="place" />
      <Right>
        <Text>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
        <Icons>
          <Rating />
          <Like count={456} />
        </Icons>
      </Right>
    </Wrapper>
  );
}
