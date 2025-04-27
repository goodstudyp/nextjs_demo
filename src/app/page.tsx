"use client";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <div>
        <button onClick={handleClick}>Dashboard</button>
      <h1>Hello World</h1>
    </div>
  );
}
  