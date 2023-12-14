'use client';

import styled from '@emotion/styled';
import PlaceList from '../place-list';

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  background-color: var(--color-float);
  border-radius: 16px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`;

interface PlaceCardProps {
  src: string;
  title: string;
  description: string;
}

export default function PlaceCard({ src, title, description }: PlaceCardProps) {
  return (
    <Wrapper>
      <PlaceList src={src} title={title} description={description} />
    </Wrapper>
  );
}
