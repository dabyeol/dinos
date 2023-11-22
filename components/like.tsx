'use client';

import styled from '@emotion/styled';
import { Heart } from '@phosphor-icons/react';
import { Variants, motion } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--color-description);
  cursor: pointer;
  user-select: none;
`;

const Icon = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  * {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

// const HeartOutline = styled(Heart)`
//   width: 100%;
//   height: 100%;
//   position: absolute;
// `;

// const HeartFill = styled(Heart)`
//   width: 100%;
//   height: 100%;
//   position: absolute;
// `;

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
    color: 'var(--color-heading)',
  },
};

interface LikeProps {
  count: number;
}

export default function Like({ count }: LikeProps) {
  const [like, setLike] = useState(false);

  return (
    <Wrapper onClick={() => setLike(!like)}>
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
