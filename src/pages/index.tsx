import React from 'react'
import Head from 'next/head'

import logo from '../assets/logo.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <img src={logo} alt="" />
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
