'use client';

import styled from '@emotion/styled';
import { Star } from '@phosphor-icons/react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: var(--text-xs);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-description);
`;

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: center;
`;

export default function Rating() {
  return (
    <Wrapper>
      <Stars>
        <Star size={16} weight="fill" color="#fa0" />
        <Star size={16} weight="fill" color="#fa0" />
        <Star size={16} weight="fill" color="#fa0" />
        <Star size={16} weight="fill" color="#fa0" />
        <Star size={16} weight="fill" color="#ddd" />
      </Stars>
      4.0 (123)
    </Wrapper>
  );
}
