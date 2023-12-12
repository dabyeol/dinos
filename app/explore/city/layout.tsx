import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '방콕 - 태국',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
