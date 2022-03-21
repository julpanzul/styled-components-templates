import styled from 'styled-components'
import Link from 'next/link'
import { Heading, Text } from '../../styles/GlobalComponents'

function Banner({ item }) {
  return (
      <Box minH={'30vh'}>
          <div className="details" style={{marginBottom: '2em'}}>
            <Heading fontSize={'1.5'} mb={1}>{item.title}</Heading>
            <Text>{item.desc}</Text>
          </div>
            <NavLink path={item.path}>
                Details
            </NavLink>
      </Box>
  )
}

export default Banner

const Box = styled.div`
    min-height: ${(props) => props.minH};

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.3rem;
        width: 90%;
        padding: 0 1em;
    }
    
    @media ${(props) => props.theme.breakpoints.lg} {
        width: 75%;
        padding: 0 3em;
    }
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
    background-color: darkcyan;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: rgba(21, 43, 39,.4);
    }
`