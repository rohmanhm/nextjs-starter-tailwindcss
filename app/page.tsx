'use client';

import { Button } from '@/components/Button';

export default function Page() {
  return (
    <div>
      hello world
      <br />
      <Button onClick={() => alert('Hi')}>Click me</Button>
    </div>
  );
}
