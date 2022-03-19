import styled from 'styled-components'
import Link from 'next/link'

function Banner({ item }) {
  return (
      <Box>
          <Heading>{item.title}</Heading>
          <Text>{item.desc}</Text>
            <NavLink path={item.path}>
                Details
            </NavLink>
      </Box>
  )
}

export default Banner

const Box = styled.div`
    @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 1.3rem;
        width: 75%;
        padding: 0 3em;
        
    }
`

const Heading = styled.h1`
    /* font-size: 3rem; */
    margin: 2em 0 1em;
`
const Text = styled.p`
    /* font-size: 2rem; */
    margin-bottom: 1em;
`

const NavLink = ({path, children}) => {
    return (
        <Link href={path}>
            <BgLink>{children}</BgLink>  
        </Link>
    )
}

const BgLink = styled.a`
    padding: 0.5em 1em;
    border-radius: 5px;
    background-color: rgba(0, 0, 0,.2);
    cursor: pointer;
    &:hover {
        background-color: rgba(21, 43, 39,.4);
    }
`