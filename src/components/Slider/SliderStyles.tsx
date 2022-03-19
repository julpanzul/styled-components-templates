import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";

export const SliderItem = styled.div`
  scroll-snap-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    scroll-snap-align: none;
  }
`

export const SliderContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
`;

export const SliderWrapper = styled.div`
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;

  @media ${(props) => props.theme.breakpoints.sm} {
    overflow: hidden;
  }
  &::-webkit-scrollbar {
      display: none;
  }
  `;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1em;
  transition: ease-in-out .3s;
  `;

export const Item = styled.div`
  display: flex;
  justify-content: center;
`;

export const SliderControl = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 40%;
  transition: ease-in .2s;
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
  `;

const SliderNavButton = styled.a`
  width: 45px;
  height: 45px;
  position: absolute;
  background-color: #fff;
  color: #212121;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const SliderNav = ({ direction, onClick, disabled = false }) => {
  return (
    <>
      {!disabled && (
        <SliderNavButton
          onClick={onClick}
          style={direction === "prev" ? { left: 0 } : { right: 0 }}
        >
          {direction === "prev" ?
            <FiChevronLeft size={26} /> : <FiChevronRight size={26} />
          }
        </SliderNavButton>
      )}
    </>
  );
};
