import Link from 'next/link'
import React from 'react'
import Banner from '../../components/Banner/Banner'
import MovieCard from '../../components/Card/MovieCard/MovieCard'
import Layout from '../../components/Layout/Layout'
import Swiper from '../../components/Swiper'
import { banner_list } from '../../constant/banner_list'
import { Button, Container, Section, SectionContent, SectionHeader, SectionTitle, Heading, Text } from '../../styles/GlobalComponents'

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
      <Section mt={3}>
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
      <Section mt={1}>
        <Container>
          <SectionHeader>
            <SectionTitle>
              <Heading fontSize={'1.5'}>
                Popular Movies
              </Heading>
            </SectionTitle>
            <Link href="/">
              <Button size={'sm'} border={1}>Show all</Button>
            </Link>
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

export default movies
