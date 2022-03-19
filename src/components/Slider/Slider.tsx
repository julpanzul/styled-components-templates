import { useRef, useState, useEffect } from "react/cjs/react.development";
import MovieCard from "../Card/MovieCard/MovieCard";
import {
  Item,
  ListWrapper,
  SliderWrapper,
  SliderContainer,
  SliderControl,
  SliderNav,
} from "./SliderStyles";

function Sliders({ movies = [], ...rest }) {
  const [cardToShow, setCardToShow] = useState(6);
  const [translate, setTranslate] = useState(0);
  
  const totalPage = Math.floor(movies.length / cardToShow);
  const totalWidth = (movies.length / cardToShow) * 100 - 100
  
  const translateVal = () => {
    if(rest.slide <= cardToShow) return (100 / cardToShow) * rest.slide

    const val = totalWidth;

    if (val > 100) {
      return val / totalPage;
    }

    return val;
  };
  
  const sliderRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getWidth = () => {
        return sliderRef.current.offsetWidth;
      }
      setCardToShow(Math.floor(getWidth() / 160));
      window.addEventListener("resize", getWidth);
      return () => window.removeEventListener("resize", getWidth);
    }
  }, []);

  const slidePrev = () => {
    setTranslate(translate + translateVal());
  };

  const slideNext = () => {
    setTranslate(translate - translateVal());
  };

  const sliderStyle = () => {
    return {
      transform: `translate3d(${translate}%, 0 , 0)`,
      transition: "ease .5s",
    };
  };

  return (
    <SliderContainer>
      <SliderWrapper>
        <ListWrapper ref={sliderRef} style={sliderStyle()}>
          {movies.map((movie, i) => (
            <Item key={i} style={{ flex: `1 0 ${100 / cardToShow}%` }}>
              <MovieCard movie={movie} />
            </Item>
          ))}
        </ListWrapper>
      </SliderWrapper>
      <SliderControl>
        <SliderNav
          direction="prev"
          onClick={slidePrev}
          disabled={translate + 1 > 0}
        />
        <SliderNav
          direction="next"
          onClick={slideNext}
          disabled={translate - 1 < -(totalWidth)}
        />
      </SliderControl>
    </SliderContainer>
  );
}

export default Sliders;
