import Link from 'next/link'
import styled from 'styled-components'
import { Button } from '../../../styles/GlobalComponents'

function BlogCard({project, dir = 'column', maxWidth=500, minWidth=400, centered=false}) {
  return (
    <Card 
      dir={dir}
      maxWidth={maxWidth} 
      minWidth={minWidth} 
      centered={centered}>
      {project.image &&
        <CardImage>
          {project.image.map((img, i) => (
            <Image key={i}/>
          ))}
        </CardImage>
      }
      <CardContent>
        {project.title &&
        <h3>{project.title}</h3>
        }
        {project.tech &&
          <Categories>
            {project.tech.map((item, i) => (
              <Label key={i}>{item}</Label>
              ))}
          </Categories>
        }
        <Button>
          <Link href={project.path || '/'}>
            <a>See Project</a>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default BlogCard

const Categories = styled.div`
  flex-grow: 1;
  padding: 1em 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: .5em;
`

const Label = styled.span`
  display: inline-block;
  background-color: darkmagenta;
  color: #fff;
  font-size: .8rem;
  padding: 0.3em .5em;
  border-radius: 3px;
`

const Card = styled.div`
  flex: 1 0 300px;
  max-width: ${(props) => (props.maxWidth)}px;
  margin: ${(props) => props.centered? '0 auto' : ''};
  border-radius: 10px;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex: 1 0 ${(props) => (props.minWidth)}px;
    max-width: ${(props) => (props.maxWidth)}px;
    flex-direction: ${(props) => props.dir? props.dir : 'column'};
  }
`
const CardImage = styled.div`
  flex: 0 0 150px;
  min-height: 170px;
  width: 100%;
  background-color: #eee;
`
const CardContent = styled.div`
  width: 100%;
  padding: .5em .8em;
  background-color: darkcyan;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &>h3 {
    margin-top: .5em;
  }
`

const Image = styled.div`
  background-color: salmon;
`