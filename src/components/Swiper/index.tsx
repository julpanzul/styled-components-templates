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
    const [isActive, setIsActive] = useState(false)

    const totalWidth:number = calcTotalWidth(children.length, showCard)
    const slidePrev = (e) => {
        e.preventDefault()
        setTranslate(translate + translateVal())
    }
    
    const slideNext = (e) => {
        e.preventDefault()
        setTranslate(translate - translateVal())
    }

    const translateVal = () => (100 / showCard)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const getSliderWidth: number = sliderRef.current.offsetWidth
            const cardsFit: number = Math.floor(getSliderWidth / minWidth)
            setShowCard(cardsFit < cardToShow? cardsFit : cardToShow);
            setTranslate(0)
        }
    }, [])

    useEffect(() => {
        if(cardToShow > 1 && minWidth > 0) {
            setIsActive(true)

            if (typeof window !== "undefined") {
                let timeoutId = null;
                
                const resizeListener = () => {
                  clearTimeout(timeoutId)
                  timeoutId = setTimeout(() => {
                    const getSliderWidth: number = sliderRef.current.offsetWidth
                    const cardsFit: number = Math.floor(getSliderWidth / minWidth)
                    setShowCard(cardsFit < cardToShow? cardsFit : cardToShow);
                    setTranslate(0)
                  }, 500)
                }
                window.addEventListener("resize", resizeListener);
                return () => window.removeEventListener("resize", resizeListener);
            }
        }
    });

    const sliderStyle = (active:boolean) => {
        if(active || cardToShow === 1) {
            return {
                transform: `translateX(${translate}%)`,
                flexWrap: 'nowrap',
                gap: 'unset'
            }
        }

        return {
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
        }
    }

  return (
    <SliderContainer
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}>
        <SliderWrapper >
            <ListWrapper ref={sliderRef} style={sliderStyle(isActive)}>
                {React.Children.map(children, child => (
                    <SliderItem style={{ flex: `${isActive? 1 : 0} 0 ${100 / showCard}%`}}>
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