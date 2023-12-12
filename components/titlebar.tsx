'use client';

import styled from '@emotion/styled';
import { Icon } from '@phosphor-icons/react';

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

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

interface TitlebarProps {
  title: string;
  small?: boolean;
  more?: boolean;
  Icon1?: Icon;
  Icon2?: Icon;
}

export default function Titlebar({
  title,
  small,
  more,
  Icon1,
  Icon2,
}: TitlebarProps) {
  return (
    <Wrapper>
      {small ? <h2>{title}</h2> : <h1>{title}</h1>}
      {more && <More>더보기</More>}

      {Icon1 && (
        <Icons>
          {Icon1 && <Icon1 size={24} />}
          {Icon2 && <Icon2 size={24} />}
        </Icons>
      )}
    </Wrapper>
  );
}
