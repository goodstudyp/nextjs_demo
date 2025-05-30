import { ReactNode } from 'react';

export default function TestLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
