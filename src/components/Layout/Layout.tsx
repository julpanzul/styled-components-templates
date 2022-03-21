import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import { Container } from "../../styles/GlobalComponents";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header style={{ borderBottom: "1px solid #eee" }}>
      <Container>
        <Navbar />
      </Container>
    </header>
    <main>{children}</main>
    <footer>
      <Container textAlign={'center'}>
        <p>Copyright 2022</p>
      </Container>
    </footer>
  </>
)

export default Layout
