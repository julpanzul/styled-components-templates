import React from 'react'
import Layout from '../components/Layout/Layout'
import { Heading } from '../styles/GlobalComponents'
import styled from 'styled-components'

function page404() {
    return (
    <Layout title={'404 | Page Not Found'}>
        <FullPage>
            <Heading fontSize={2}>
                404, Page Not Found
            </Heading>
        </FullPage>
    </Layout>
  )
}

export default page404

const FullPage = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
`