'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled(Image)`
  border-radius: 100%;
`;

interface MinimapProps {
  src: string;
}

export default function Minimap({ src }: MinimapProps) {
  return <Wrapper src={src} width={144} height={144} alt="minimap" />;
}
