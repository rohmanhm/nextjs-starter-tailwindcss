import Head from 'next/head';

import { Button } from '@/components/Button';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Hello World</title>
      </Head>
      hello world
      <br />
      <Button onClick={() => alert('Hi')}>Click me</Button>
    </div>
  );
};

export default IndexPage;
