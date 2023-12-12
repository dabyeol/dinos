'use client';

import styled from '@emotion/styled';
import { Heart } from '@phosphor-icons/react';
import { Variants, motion } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-description);
  cursor: pointer;
  user-select: none;
`;

const Icon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;

  * {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const LikeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const TextVariants: Variants = {
  hidden: {
    color: 'var(--color-description)',
  },
  visible: {
    color: 'var(--color-text)',
  },
};

interface LikeProps {
  count: number;
}

export default function Like({ count }: LikeProps) {
  const [like, setLike] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLike(!like);
  };

  return (
    <Wrapper onClick={toggleLike}>
      <motion.div
        variants={TextVariants}
        initial="hidden"
        animate={like ? 'visible' : 'hidden'}
      >
        {like ? count + 1 : count}
      </motion.div>
      <Icon>
        <Heart />
        <motion.div
          variants={LikeVariants}
          initial="hidden"
          animate={like ? 'visible' : 'hidden'}
        >
          <Heart weight="fill" color="var(--color-heart)" />
        </motion.div>
      </Icon>
    </Wrapper>
  );
}
