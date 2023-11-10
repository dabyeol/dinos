import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: "%s | Dino's",
    default: "Dino's",
  },
  description: '디노스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
