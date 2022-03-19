import React from 'react'
import Banner from '../components/Banner/Banner'
import MovieCard from '../components/Card/MovieCard/MovieCard'
import Layout from '../components/Layout/Layout'
import Swiper from '../components/Slider/Swiper'
import { banner_list } from '../constant/banner_list'
import { Button, Container, Section, SectionContent, SectionHeader, SectionTitle } from '../styles/GlobalComponents'

function movies() {
    const fetchMovies = () => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push({ id: i, title: "Movie " + i, score: "5.5", type: "TV" });
        }
        return arr
    }
  return (
    <Layout title="Movie List">
      <Section>
        <Container>
          <SectionContent>
            <Swiper>
                {banner_list.map((item, i) => (
                  <Banner key={i} item={item} />
                ))}
            </Swiper>
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
      <Section></Section>
    </Layout>
  )
}

export default movies
