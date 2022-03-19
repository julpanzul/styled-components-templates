import styled from "styled-components";

export const Card = styled.a`
  width: 150px;
  height: 210px;
  margin: 0 auto;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transform: translateY(5%);
  transition: ease 0.3s;
`;
export const CardImage = styled.div`
  height: 100%;
  width: 100%;
  transition: inherit;
  background-color: slateblue;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  opacity: 0;
  transition: inherit;
  transition: ease 0.3s;
`;
export const DetailsButton = styled.div`
  background-color: transparent;
  text-transform: uppercase;
  color: #fff;
  padding: 5px 10px;
  border: 2px solid #fff;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > span {
    color: #2d2d2d;
    background-color: #fff;
    border-radius: 2px;
    padding: 0 0.5em;
    &:first-child {
      color: #fff;
      background-color: transparent;
    }
  }
`;
