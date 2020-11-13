import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Image src="/logo.svg" alt="imagem" width={600} height={400} />
      <h1>Next.JS + React.Js</h1>
      <p>
        with typescript, eslint, prettier, editorconfig, babel,
        styled-components, next-images and inline-react-svg
      </p>
    </Container>
  )
}

export default Home
