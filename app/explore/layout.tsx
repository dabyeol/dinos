import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '탐색',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
