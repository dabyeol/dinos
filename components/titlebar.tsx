'use client';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.h1<{ small?: boolean }>`
  flex: 1;
  font-size: ${props => (props.small ? 'var(--text-xl)' : 'var(--text-2xl)')};
  color: var(--color-heading);
`;

const More = styled.div`
  color: var(--color-description);
  font-weight: 500;
`;

interface TitlebarProps {
  title: string;
  small?: boolean;
  more?: boolean;
}

export default function Titlebar({ title, small, more }: TitlebarProps) {
  return (
    <Wrapper>
      <Title small={small}>{title}</Title>
      {more && <More>더보기</More>}
    </Wrapper>
  );
}
