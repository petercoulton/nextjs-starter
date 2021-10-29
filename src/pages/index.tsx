import Head from 'next/head'
import styled from 'styled-components'

import type { NextPage } from 'next'
import { SITE_NAME } from '@lib/constants'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="description"
          content="Generated by create next app, then fussed with, like a lot"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Title>It works!</Title>
      </Content>

      <Footer>
        <h1>Footer</h1>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Title = styled.h1``

const Content = styled.main`
  flex: 1 1 auto;
`

const Footer = styled.footer``

export default Home
