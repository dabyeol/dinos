import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '커뮤니티',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
