import Button from '#/components/Button'
import Head from 'next/head'
import React from 'react'
import tw from 'twin.macro'

const IndexPage = () => {
  return (
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        tw`bg-gradient-to-b`,
      ]}
    >
      <Head>
        <title>Hello World</title>
      </Head>
      hello world
      <br />
      <Button onClick={() => alert('Hi')}>Click me</Button>
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
        <Button size="small">Close</Button>
      </div>
    </div>
  )
}

export default IndexPage
