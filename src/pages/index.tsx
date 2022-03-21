import Link from 'next/link'
import { useState } from 'react'
import BlogCard from '../components/Card/BlogCard/BlogCard'
import MovieCard from '../components/Card/MovieCard/MovieCard'
import Layout from '../components/Layout/Layout'
import Swiper from '../components/Swiper'
import { Hero, Flex, Container, Section, SectionContent, SectionHeader, SectionTitle, Button, } from '../styles/GlobalComponents'
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
    <Layout title="Home | Next Project Template">
      <Section mt={2}>
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
      
      <Section mb={2}>
        <Container>
          <SectionHeader>
            <SectionTitle>Projects</SectionTitle>
            <Button onClick={() => setDir(!dir)} border={1}>Show all</Button>
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
      
      <Section mb={2}>
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
  </Layout>
  )
}

export default IndexPage
