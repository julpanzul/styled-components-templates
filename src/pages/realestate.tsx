import React from 'react'
import BlogCard from '../components/Card/BlogCard/BlogCard'
import Layout from '../components/Layout/Layout'
import { Row, Col, Input, Container, Flex, Section, SectionContent, SectionHeader, SectionTitle } from '../styles/GlobalComponents'
import styled from 'styled-components'

const properties = () => {
    const arr = []
    for (let i = 0; i < 10; i++) {
        arr.push({id: i, title: 'Apartement ' + i, price: '500'})        
    }
    return arr
}

function realestate() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Section mt={2}>
        <Container>
          <SectionHeader>
            <SectionTitle>Projects</SectionTitle>
          </SectionHeader>
          <SectionContent>
              <Row>
                  <Col lg={3} md={0}>
                      <Filter>
                          <h3>Filter</h3>
                    </Filter>
                    </Col>
                  <Col lg={9}>
                    <div style={{paddingLeft: '1em'}}>
                      <Flex>
                        {properties().map((item, i) => (
                          <BlogCard 
                              key={i} 
                              project={item} 
                              dir={'row'} 
                              maxWidth={800}
                              minWidth={500}
                              centered/>
                      ))}
                      </Flex>
                    </div>
                  </Col>
              </Row>
          </SectionContent>
          </Container>
      </Section>
    </Layout>
  )
}

export default realestate

const Filter = styled.div`
    background-color: #ddd;
    padding: 1em;
    color: #000;
    height: 800px;
    border-radius: 10px;
`