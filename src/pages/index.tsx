import React from 'react'
import Head from 'next/head'

import Logo from '../assets/logo.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Logo />
        <h1>Hello World</h1>
      </main>
    </Container>
  )
}

export default Home
