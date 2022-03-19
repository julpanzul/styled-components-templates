import React from 'react'
import MovieCard from '../components/Card/MovieCard/MovieCard'
import Layout from '../components/Layout/Layout'
import Swiper from '../components/Slider/Swiper'
import { Row, Col, Button, Container, Hero, Section, SectionContent, SectionHeader, SectionTitle } from '../styles/GlobalComponents'
import styled from 'styled-components'

const promos = [
    {id: 0, title: 'Promo 1'},
    {id: 1, title: 'Promo 2'},
    {id: 2, title: 'Promo 3'}
]

function ecommerce() {
    const fetchMovies = () => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push({ id: i, title: "Product " + i, score: "$5", type: "NestFood" });
        }
        return arr
    }
  return (
    <Layout title="Movie List">
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
                <SectionTitle>Promo Product</SectionTitle>
                <Button onClick={() => console.log('show all')}>Show all</Button>
            </SectionHeader>
            <SectionContent>
                <Row>
                    {promos.map((item, i) => (
                        <Col key={i}>
                            <PromoCard>{item.title}</PromoCard>
                        </Col>
                    ))}
                </Row>
            </SectionContent>
          </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Featured Groceries</SectionTitle>
            <Button onClick={() => console.log('show all')}>Show all</Button>
          </SectionHeader>
          <SectionContent>
            <Swiper cardToShow={8} minWidth={100}>
              {fetchMovies().map((item, i) => (
                <MiniCard key={i}>
                    <h3>{item.title}</h3>
                </MiniCard>
              ))}
            </Swiper>
          </SectionContent>
          </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Popular Products</SectionTitle>
            <Button onClick={() => console.log('show all')}>Show all</Button>
          </SectionHeader>
          <SectionContent>
            <Swiper cardToShow={5} minWidth={160}>
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

export default ecommerce

const MiniCard = styled.div`
    color: #fff;
    width: 100px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: salmon;
    border-radius: 5px;
`

const PromoCard = styled.div`
    background-color: darkcyan;
    color: #fff;
    text-align: center;
    margin: 0 .5em;
    padding: 1.5em 0;
    border-radius: 10px;
`
