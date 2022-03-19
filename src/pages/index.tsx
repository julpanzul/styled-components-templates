import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import BlogCard from '../components/Card/BlogCard/BlogCard'
import MovieCard from '../components/Card/MovieCard/MovieCard'
import Layout from '../components/Layout/Layout'
import Swiper from '../components/Slider/Swiper'
import { Hero, Row, Col, Flex, Container, Section, SectionContent, SectionHeader, SectionTitle, Button, Input, Select } from '../styles/GlobalComponents'
import { projects } from '../utils/sample-data'

const IndexPage = () => {
  const [dir, setDir] = useState(false)
  const fetchMovies = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({ id: i, title: "Movie " + i, score: "5.5", type: "TV" });
    }

    return arr;
  };
  return(
    <Layout title="Home | Next.js + TypeScript Example">
      <Section>
          <SectionContent>
            <Swiper>
              {fetchMovies().map((item, i) => (
                <Hero key={i}>
                  {item.title}
                </Hero>
              ))}
            </Swiper>
          </SectionContent>
      </Section>
      
      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Projects</SectionTitle>
            <Button onClick={() => setDir(!dir)}>Show all</Button>
          </SectionHeader>
          <SectionContent>
            <Flex>
              {projects.map((project, i) => (
                <BlogCard 
                key={i} 
                project={project} 
                dir={dir? 'column' : 'row'} 
                maxWidth={600}
                minWidth={500}
                centered/>
              ))}
            </Flex>
          </SectionContent>
          </Container>
      </Section>
      
      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Movies</SectionTitle>
            <Button onClick={() => console.log('show all')}>Show all</Button>
          </SectionHeader>
          <SectionContent>
            <Swiper cardToShow={6} minWidth={160}>
              {fetchMovies().map((item, i) => (
                <MovieCard key={i} movie={item}/>
              ))}
            </Swiper>
          </SectionContent>
          </Container>
      </Section>
      <Section>
        <Row>
          <Col sm={4} xs={0} bg={'salmon'}>
            <Hero style={{maxWidth: '300px'}}>Lorem ipsum dolor sit amet.</Hero>
          </Col>
          <Col sm={8} xs={12} bg={'darkcyan'}>
            <Flex fullwidth nowrap>

            <Input />
            <Button nowrap>Hello semua!</Button>
            <Select>
              <option value="1">Opsi 1</option>
              <option value="2">Opsi 2</option>
              <option value="3">Opsi 3</option>
              <option value="4">Opsi 4</option>
            </Select>
            </Flex>
          </Col>
        </Row>
      </Section>
  </Layout>
  )
}

export default IndexPage
