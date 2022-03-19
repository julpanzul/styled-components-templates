import React, { useEffect, useState, useRef } from "react"
import {
    SliderItem,
  ListWrapper,
  SliderWrapper,
  SliderContainer,
  SliderControl,
  SliderNav,
} from "./SliderStyles";

const calcTotalWidth = (length:number, show:number) => {
    return ((length / show) * 100) - 100
}

function Swiper({children, cardToShow = 1, minWidth = 0}) {
    const [showCard, setShowCard] = useState(cardToShow)
    const [translate, setTranslate] = useState(0)
    const [showNav, setShowNav] = useState(false)
    const sliderRef = useRef(null);

    const totalWidth:number = calcTotalWidth(children.length, showCard)
    const slidePrev = () => (setTranslate(translate + translateVal()))
    const slideNext = () => (setTranslate(translate - translateVal()))
    const translateVal = () => (100 / showCard)
    useEffect(() => {
        if(cardToShow > 1 && minWidth > 0) {
            if (typeof window !== "undefined") {
                const getSliderWidth = () => (sliderRef.current.offsetWidth)
                const cardsFit = Math.floor(getSliderWidth() / minWidth)
                setShowCard(cardsFit < cardToShow? cardsFit : cardToShow);
                window.addEventListener("resize", getSliderWidth);
                return () => window.removeEventListener("resize", getSliderWidth);
            }
        }
    }, []);

  return (
    <SliderContainer
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}>
        <SliderWrapper>
            <ListWrapper ref={sliderRef} style={{transform: `translateX(${translate}%)`}}>
                {React.Children.map(children, child => (
                    <SliderItem style={{ flex: `1 0 ${100 / showCard}%`}}>
                        {React.cloneElement(child, {style: {margin:'0 auto'}})}
                    </SliderItem>
                ))}
            </ListWrapper>
        </SliderWrapper>
        <SliderControl style={showNav?{opacity: 1}:{opacity: 0}}>
            <SliderNav 
                direction="prev"
                onClick={slidePrev}
                disabled={translate + 1 > 0}/>
            <SliderNav 
                direction="next"
                onClick={slideNext}
                disabled={translate - 1 < -(totalWidth)}/>
        </SliderControl>
    </SliderContainer>
  )
}

export default Swiper