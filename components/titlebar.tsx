'use client';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

const More = styled.div`
  font-weight: 500;
  color: var(--color-description);
`;

interface TitlebarProps {
  title: string;
  small?: boolean;
  more?: boolean;
}

export default function Titlebar({ title, small, more }: TitlebarProps) {
  return (
    <Wrapper>
      {small ? <h2>{title}</h2> : <h1>{title}</h1>}
      {more && <More>더보기</More>}
    </Wrapper>
  );
}
