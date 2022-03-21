import React from 'react'
import styled from 'styled-components'
import Swiper from '../../components/Swiper'
import { Container, Section, SectionContent } from '../../styles/GlobalComponents'

const movie_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function movies() {
  return (
    <Section>
      <h1>Title</h1>
      <Swiper cardToShow={4} minWidth={160}>
        {movie_list.map((movie, i) => (
          <Card key={i}>
            Movie {movie}
          </Card>
        ))}
      </Swiper>
    </Section>
  )
}

export default movies

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 220px;
  background-color: slateblue;
  font-size: 1.5rem;
  border-radius: 5px;
  color: #fff;
  margin: 0 auto;
`