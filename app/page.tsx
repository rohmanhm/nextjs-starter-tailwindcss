'use client';

import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div>
      hello world
      <br />
      <Button onClick={() => alert('Hi')}>Click me</Button>
    </div>
  );
}
